import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, resolve } from "node:path";

const root = resolve(".");
const preferredPort = Number(process.env.PORT || 4173);
const host = process.env.HOST || (process.env.PORT ? "0.0.0.0" : "127.0.0.1");
const canRetryPort = !process.env.PORT;
const allowedPdfHosts = new Set(["arkiv.edusci.umu.se", "www.su.se", "su.se", "www.umu.se", "umu.se"]);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
};

async function proxyPdf(url, response) {
  const target = new URL(url.searchParams.get("url") || "");

  if (!allowedPdfHosts.has(target.hostname) || target.protocol !== "https:") {
    response.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("PDF-källan är inte tillåten.");
    return;
  }

  const upstream = await fetch(target, {
    headers: {
      "User-Agent": "GymnasieOpus/1.0",
      Accept: "application/pdf,*/*",
    },
  });

  if (!upstream.ok) {
    response.writeHead(upstream.status, { "Content-Type": "text/plain; charset=utf-8" });
    response.end(`PDF kunde inte hämtas från källan (${upstream.status}).`);
    return;
  }

  const contentType = upstream.headers.get("content-type") || "application/pdf";
  const filename = target.pathname.split("/").pop() || "gymnasieopus.pdf";

  response.writeHead(200, {
    "Content-Type": contentType.includes("pdf") ? contentType : "application/pdf",
    "Content-Disposition": `inline; filename="${filename.replace(/"/g, "")}"`,
    "Cache-Control": "public, max-age=3600",
    "X-Content-Type-Options": "nosniff",
  });

  if (!upstream.body) {
    const buffer = Buffer.from(await upstream.arrayBuffer());
    response.end(buffer);
    return;
  }

  for await (const chunk of upstream.body) {
    response.write(chunk);
  }
  response.end();
}

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", `http://${request.headers.host}`);
    if (url.pathname === "/pdf-health") {
      response.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      response.end(JSON.stringify({ ok: true }));
      return;
    }

    if (url.pathname === "/pdf") {
      await proxyPdf(url, response);
      return;
    }

    const pathname = url.pathname === "/" ? "/index.html" : decodeURIComponent(url.pathname);
    const file = resolve(join(root, pathname));

    if (!file.startsWith(root)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    const data = await readFile(file);
    response.writeHead(200, { "Content-Type": types[extname(file)] || "application/octet-stream" });
    response.end(data);
  } catch (error) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end(error instanceof Error ? error.message : "Not found");
  }
});

function listen(port) {
  server.once("error", (error) => {
    if (error.code === "EADDRINUSE" && canRetryPort && port < preferredPort + 20) {
      listen(port + 1);
      return;
    }
    throw error;
  });

  server.listen(port, host, () => {
    const visibleHost = host === "0.0.0.0" ? "127.0.0.1" : host;
    console.log(`GymnasieOpus körs på http://${visibleHost}:${port}`);
  });
}

listen(preferredPort);
