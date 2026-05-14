# GymnasieOpus

En svensk studieportal för nationella prov i gymnasiet med ämneskort, provbank, studieplan och inbyggd PDF-läsare.

Provbanken innehåller nu runt 10 gamla matematikprov per kurs för Matematik 1a-4 där officiella frisläppta prov finns, plus officiella materialsidor för engelska, svenska och svenska som andraspråk.

## Öppna sidan

Sidan är statisk och kan hostas på GitHub Pages, Netlify, Vercel eller Cloudflare Pages.

Du kan öppna `index.html` direkt i webbläsaren. PDF-knapparna öppnar originalfilerna i ny flik.

Vill du köra lokalt via server:

```text
node server.mjs
```

Öppna sedan adressen som skrivs ut, oftast:

```text
http://127.0.0.1:4173
```

Om porten redan är upptagen väljer servern nästa lediga port automatiskt.

## Lägga till fler prov

All provdata finns i `script.js` i arrayen `exams`. Lägg till objekt med `subject`, `course`, `term`, `title`, `source`, `type`, `pdfUrl` och `sourceUrl`.

Använd bara officiella källor och direkta PDF-länkar när de faktiskt finns.
