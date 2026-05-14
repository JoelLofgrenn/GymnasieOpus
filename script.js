const sources = {
  skolverket:
    "https://www.skolverket.se/prov-och-bedomning/nationella-prov/bestall-nationella-prov/gamla-nationella-prov",
  umea: "https://www.umu.se/institutionen-for-tillampad-utbildningsvetenskap/np/np-2-4/tidigare-givna-prov/",
  prim: "https://www.su.se/enheter/prim-gruppen/nationella-prov/niva-1-kurs-1",
  gu: "https://www.gu.se/nationella-prov-frammande-sprak/prov-och-bedomningsstod-i-engelska/exempel-pa-uppgiftstyper",
  uuGy1:
    "https://www.uu.se/nationella-prov/svenska-och-svenska-som-andrasprak/gymnasiet/gy1/exempel-pa-provmaterial-i-niva-1",
  uuGy3:
    "https://www.uu.se/nationella-prov/svenska-och-svenska-som-andrasprak/gymnasiet/gy3/exempel-pa-provmaterial-i-kurs-3",
};

const PDF_PREVIEW_ENABLED = false;

const subjects = [
  {
    name: "Matematik",
    icon: "M",
    accent: "#9d7cff",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=900&q=85",
    alt: "Närbild på matematiska formler och grafer på papper.",
    description: "Kursprov, delprov, formelblad och tydliga ingångar för Ma 1 till Ma 4.",
    courses: ["Matematik 1a", "Matematik 1b", "Matematik 1c", "Matematik 2a", "Matematik 2b", "Matematik 2c", "Matematik 3b", "Matematik 3c", "Matematik 4"],
    focus: ["algebra", "funktioner", "problemlösning", "digitala verktyg"],
  },
  {
    name: "Engelska",
    icon: "E",
    accent: "#43d9ff",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
    alt: "Laptop, anteckningar och hörlurar för språkstudier.",
    description: "Reading, listening, writing och speaking samlat med officiella övningstyper.",
    courses: ["Engelska 5", "Engelska 6", "Engelska 7"],
    focus: ["reading", "listening", "writing", "speaking"],
  },
  {
    name: "Svenska",
    icon: "S",
    accent: "#ff6fba",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=85",
    alt: "Skrivblock och penna för textarbete i svenska.",
    description: "Läsförståelse, skrivuppgifter, muntliga delar och exempelmaterial.",
    courses: ["Svenska 1", "Svenska 3"],
    focus: ["läsförståelse", "skrivande", "muntligt", "källhantering"],
  },
  {
    name: "SVA",
    label: "Svenska som andraspråk",
    icon: "SVA",
    accent: "#ffd166",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=85",
    alt: "Elev som studerar språk med böcker och dator.",
    description: "Språk, struktur, textproduktion och muntlig kommunikation för SVA 1 och SVA 3.",
    courses: ["SVA 1", "SVA 3"],
    focus: ["ordförråd", "textstruktur", "samtal", "argumentation"],
  },
];

const umuArchive = "https://arkiv.edusci.umu.se/np/np-2-4-prov";
const umuTerms = ["VT 2022", "VT 2017", "HT 2016", "VT 2016", "HT 2015", "VT 2015", "HT 2014", "VT 2014", "HT 2013", "VT 2013", "HT 2012", "VT 2012"];

const umuCourseTerms = {
  "Matematik 2a": umuTerms.slice(0, 11),
  "Matematik 2b": umuTerms,
  "Matematik 2c": umuTerms,
  "Matematik 3b": umuTerms.slice(0, 11),
  "Matematik 3c": umuTerms.slice(0, 11),
  "Matematik 4": umuTerms.slice(0, 10),
};

const primMathOne = [
  {
    course: "Matematik 1a",
    items: [
      ["VT 2022", "Ma 1a Delprov B", "https://www.su.se/download/18.2b7477cb199a332c2a8260b/1759930380717/Ma1a%20VT22%20Delprov%20BVT%202022%20Ma%201a_Delprov%20B_230907.pdf"],
      ["VT 2017", "Ma 1a Delprov B", "https://www.su.se/download/18.2b7477cb199a332c2a8260e/1759930380991/KPVT%202017%20Ma%201a%20Delprov%20BKPVT%202017%20Ma%201a%20Delprov%20B.pdf"],
      ["HT 2016", "Ma 1a Delprov B", "https://www.su.se/download/18.2b7477cb199a332c2a82611/1759930381304/Ma1a%20HT16%20Delprov%20BHT16_Delprov%20B%201a.pdf"],
      ["VT 2016", "Ma 1a Delprov B", "https://www.su.se/download/18.2b7477cb199a332c2a82614/1759930381590/Ma1a%20VT16%20Delprov%20BKPVT%202016%20Ma%201a%20Delprov%20B.pdf"],
      ["HT 2015", "Ma 1a Delprov B", "https://www.su.se/download/18.2b7477cb199a332c2a82617/1759930382591/Ma1a%20HT15%20Delprov%20BKPHT%202015%20Ma%201a%20Delprov%20B.pdf"],
      ["VT 2015", "Ma 1a Delprov B", "https://www.su.se/download/18.2b7477cb199a332c2a8261b/1759930383461/Ma1a%20VT15%20Delprov%20BKPVT%202015%20Ma%201a%20Delprov%20B.pdf"],
      ["HT 2014", "Ma 1a Delprov B", "https://www.su.se/download/18.2b7477cb199a332c2a8261e/1759930383944/Ma1a%20HT14%20Delprov%20BProvh%C3%A4fte%20Delprov%20B%201a%20ht14_.pdf"],
      ["VT 2014", "Ma 1a Delprov B", "https://www.su.se/download/18.2b7477cb199a332c2a82621/1759930384336/Ma1a%20VT14%20Delprov%20BProvh%C3%A4fte%20Del%20B%201a%20VT14.pdf"],
      ["HT 2013", "Ma 1a Delprov B", "https://www.su.se/download/18.2b7477cb199a332c2a82624/1759930384758/Ma1a%20HT13%20Delprov%20BProvh%C3%A4fte%20Del%20B%201a%20HT13.pdf"],
      ["VT 2013", "Ma 1a Delprov B", "https://www.su.se/download/18.2b7477cb199a332c2a82627/1759930385084/Ma1a%20VT13%20Delprov%20BProvh%C3%A4fte%20Del%20B%201a.pdf"],
    ],
  },
  {
    course: "Matematik 1b",
    items: [
      ["VT 2022", "Ma 1b Delprov B", "https://www.su.se/download/18.2b7477cb199a332c2a8262a/1759930385489/Ma1b%20VT22%20Delprov%20BVT%202022%20Ma%201b_Delprov%20B.pdf"],
      ["VT 2017", "Ma 1b Delprov B", "https://www.su.se/download/18.2b7477cb199a332c2a8262d/1759930385910/KPVT%202017%20Ma%201b%20Delprov%20BKPVT%202017%20Ma%201b%20Delprov%20B.pdf"],
      ["HT 2016", "Ma 1b Delprov B", "https://www.su.se/download/18.2b7477cb199a332c2a82630/1759930386342/Ma1b%20HT16%20Delprov%20BHT16_Delprov%20B%201b.pdf"],
      ["VT 2016", "Ma 1b Delprov B", "https://www.su.se/download/18.2b7477cb199a332c2a82633/1759930386667/Ma1b%20VT16%20Delprov%20BKPVT%202016%20Ma%201b%20Delprov%20B.pdf"],
      ["HT 2015", "Ma 1b Delprov B", "https://www.su.se/download/18.2b7477cb199a332c2a82636/1759930387594/Ma1b%20HT15%20Delprov%20BKPHT%202015%20Ma%201b%20Delprov%20B.pdf"],
      ["VT 2015", "Ma 1b Delprov B", "https://www.su.se/download/18.2b7477cb199a332c2a82639/1759930388323/Ma1b%20VT15%20Delprov%20BKPVT%202015%20Ma%201b%20Delprov%20B.pdf"],
      ["HT 2014", "Ma 1b Delprov B", "https://www.su.se/download/18.2b7477cb199a332c2a8263c/1759930388997/Ma1b%20HT14%20Delprov%20BProvh%C3%A4fte%20Delprov%20B%201b%20ht14_.pdf"],
      ["VT 2014", "Ma 1b Delprov B", "https://www.su.se/download/18.2b7477cb199a332c2a8263f/1759930389456/Ma1b%20VT14%20Delprov%20BProvh%C3%A4fte%20Del%20B%201b%20VT14.pdf"],
      ["HT 2013", "Ma 1b Delprov B", "https://www.su.se/download/18.2b7477cb199a332c2a82642/1759930389881/Ma1b%20HT13%20Delprov%20BProvh%C3%A4fte%20Del%20B%201b%20HT13.pdf"],
      ["VT 2013", "Ma 1b Delprov C", "https://www.su.se/download/18.2b7477cb199a332c2a82645/1759930390165/Ma1b%20VT13%20Delprov%20CProvh%C3%A4fte%20Del%20C%201b.pdf"],
    ],
  },
  {
    course: "Matematik 1c",
    items: [
      ["VT 2022", "Ma 1c Delprov B", "https://www.su.se/download/18.2b7477cb199a332c2a82647/1759930390468/Ma1c%20VT22%20Delprov%20BVT%202022%20Ma%201c_Delprov%20B.pdf"],
      ["VT 2017", "Ma 1c Delprov B", "https://www.su.se/download/18.2b7477cb199a332c2a8264a/1759930390880/KPVT%202017%20Ma%201c%20Delprov%20BKPVT%202017%20Ma%201c%20Delprov%20B.pdf"],
      ["HT 2016", "Ma 1c Delprov B", "https://www.su.se/download/18.2b7477cb199a332c2a8264d/1759930391222/Ma1c%20HT16%20Delprov%20BHT16_Delprov%20B%201c.pdf"],
      ["VT 2016", "Ma 1c Delprov B", "https://www.su.se/download/18.2b7477cb199a332c2a82650/1759930391524/Ma1c%20VT16%20Delprov%20BKPVT%202016%20Ma%201c%20Delprov%20B.pdf"],
      ["HT 2015", "Ma 1c Delprov B", "https://www.su.se/download/18.2b7477cb199a332c2a82653/1759930392602/Ma1c%20HT15%20Delprov%20BKPHT%202015%20Ma%201c%20Delprov%20B.pdf"],
      ["VT 2015", "Ma 1c Delprov B", "https://www.su.se/download/18.2b7477cb199a332c2a82656/1759930393332/Ma1c%20VT15%20Delprov%20BKPVT%202015%20Ma%201c%20Delprov%20B.pdf"],
      ["HT 2014", "Ma 1c Delprov B", "https://www.su.se/download/18.2b7477cb199a332c2a82659/1759930393971/Ma1c%20HT14%20Delprov%20BProvh%C3%A4fte%20Delprov%20B%201c%20ht14_.pdf"],
      ["VT 2014", "Ma 1c Delprov B", "https://www.su.se/download/18.2b7477cb199a332c2a8265c/1759930394402/Ma1c%20VT14%20Delprov%20BProvh%C3%A4fte%20Del%20B%201c%20VT14.pdf"],
      ["HT 2013", "Ma 1c Delprov B", "https://www.su.se/download/18.2b7477cb199a332c2a8265f/1759930394715/Ma1c%20HT13%20Delprov%20BProvh%C3%A4fte%20Del%20B%201c%20HT13.pdf"],
      ["VT 2013", "Ma 1c Delprov B", "https://www.su.se/download/18.2b7477cb199a332c2a82662/1759930395102/Ma1c%20VT13%20Delprov%20BProvh%C3%A4fte%20Del%20B%201c.pdf"],
    ],
  },
];

function termSlug(term) {
  const [season, year] = term.toLowerCase().split(" ");
  return `${season}${year.slice(-2)}`;
}

async function canUsePdfProxy() {
  if (window.location.protocol !== "http:" && window.location.protocol !== "https:") return false;
  if (typeof pdfProxyAvailable === "boolean") return pdfProxyAvailable;

  try {
    const response = await fetch("/pdf-health", { cache: "no-store" });
    pdfProxyAvailable = response.ok;
  } catch {
    pdfProxyAvailable = false;
  }

  return pdfProxyAvailable;
}

async function previewPdfUrl(pdfUrl) {
  if (!pdfUrl) return "";
  if (await canUsePdfProxy()) return `/pdf?url=${encodeURIComponent(pdfUrl)}`;
  return `https://docs.google.com/gview?embedded=1&url=${encodeURIComponent(pdfUrl)}`;
}

function makeUmeaExams() {
  return Object.entries(umuCourseTerms).flatMap(([course, terms]) =>
    terms.map((term) => {
      const code = course.replace("Matematik ", "Ma");
      return {
        subject: "Matematik",
        course,
        term,
        title: `${code} Delprov B-D`,
        source: "Umeå universitet / Skolverket",
        type: "PDF",
        pdfUrl: `${umuArchive}/${code}-${termSlug(term)}.pdf`,
        sourceUrl: sources.umea,
      };
    }),
  );
}

function makePrimExams() {
  return primMathOne.flatMap(({ course, items }) =>
    items.map(([term, title, pdfUrl]) => ({
      subject: "Matematik",
      course,
      term,
      title,
      source: "PRIM-gruppen / Skolverket",
      type: "PDF",
      pdfUrl,
      sourceUrl: sources.prim,
    })),
  );
}

const languageResources = [
  {
    subject: "Engelska",
    course: "Engelska 5",
    term: "Exempel",
    title: "Officiella exempel på uppgiftstyper",
    source: "Göteborgs universitet / Skolverket",
    type: "Länk",
    pdfUrl: "",
    sourceUrl: sources.gu,
  },
  {
    subject: "Engelska",
    course: "Engelska 6",
    term: "Exempel",
    title: "Reading, listening och writing",
    source: "Göteborgs universitet / Skolverket",
    type: "Länk",
    pdfUrl: "",
    sourceUrl: sources.gu,
  },
  {
    subject: "Engelska",
    course: "Engelska 7",
    term: "Exempel",
    title: "Bedömningsstöd och exempelmaterial",
    source: "Göteborgs universitet / Skolverket",
    type: "Länk",
    pdfUrl: "",
    sourceUrl: sources.gu,
  },
  {
    subject: "Svenska",
    course: "Svenska 1",
    term: "Exempel",
    title: "Exempel på provmaterial i nivå 1",
    source: "Uppsala universitet / Skolverket",
    type: "Länk",
    pdfUrl: "",
    sourceUrl: sources.uuGy1,
  },
  {
    subject: "Svenska",
    course: "Svenska 3",
    term: "Exempel",
    title: "Exempel på provmaterial i kurs 3",
    source: "Uppsala universitet / Skolverket",
    type: "Länk",
    pdfUrl: "",
    sourceUrl: sources.uuGy3,
  },
  {
    subject: "SVA",
    course: "SVA 1",
    term: "Exempel",
    title: "Exempel på provmaterial i nivå 1",
    source: "Uppsala universitet / Skolverket",
    type: "Länk",
    pdfUrl: "",
    sourceUrl: sources.uuGy1,
  },
  {
    subject: "SVA",
    course: "SVA 3",
    term: "Exempel",
    title: "Exempel på provmaterial i kurs 3",
    source: "Uppsala universitet / Skolverket",
    type: "Länk",
    pdfUrl: "",
    sourceUrl: sources.uuGy3,
  },
];

const exams = [...makePrimExams(), ...makeUmeaExams(), ...languageResources];

const state = {
  search: "",
  subject: "Alla",
  course: "Alla",
  type: "Alla",
  pdfOnly: false,
};

const els = {
  subjectGrid: document.querySelector("#subjectGrid"),
  examList: document.querySelector("#examList"),
  globalSearch: document.querySelector("#globalSearch"),
  clearSearch: document.querySelector("#clearSearch"),
  subjectFilter: document.querySelector("#subjectFilter"),
  courseFilter: document.querySelector("#courseFilter"),
  typeFilter: document.querySelector("#typeFilter"),
  pdfOnly: document.querySelector("#pdfOnly"),
  plannerSubject: document.querySelector("#plannerSubject"),
  plannerCourse: document.querySelector("#plannerCourse"),
  plannerWeeks: document.querySelector("#plannerWeeks"),
  plannerHours: document.querySelector("#plannerHours"),
  timeline: document.querySelector("#timeline"),
  pdfModal: document.querySelector("#pdfModal"),
  pdfTitle: document.querySelector("#pdfTitle"),
  pdfSource: document.querySelector("#pdfSource"),
  pdfFrame: document.querySelector("#pdfFrame"),
  pdfFrameWrap: document.querySelector(".pdf-frame-wrap"),
  pdfNewTab: document.querySelector("#pdfNewTab"),
  closePdf: document.querySelector("#closePdf"),
  menuToggle: document.querySelector("#menuToggle"),
  mainNav: document.querySelector(".main-nav"),
  themeToggle: document.querySelector("#themeToggle"),
  courseFocus: document.querySelector("#courseFocus"),
  courseImage: document.querySelector("#courseImage"),
  courseSubject: document.querySelector("#courseSubject"),
  courseTitle: document.querySelector("#courseTitle"),
  courseDescription: document.querySelector("#courseDescription"),
  courseTags: document.querySelector("#courseTags"),
  randomExam: document.querySelector("#randomExam"),
  subjectCount: document.querySelector("#subjectCount"),
  resourceCount: document.querySelector("#resourceCount"),
  pdfCount: document.querySelector("#pdfCount"),
};

let pdfFallbackTimer;
let pdfProxyAvailable;

function unique(values) {
  return ["Alla", ...new Set(values.filter(Boolean))];
}

function labelFor(value) {
  return value === "SVA" ? "Svenska som andraspråk" : value;
}

function optionList(select, values, selected = "Alla") {
  select.innerHTML = values.map((value) => `<option value="${value}">${labelFor(value)}</option>`).join("");
  const fallback = values.includes("Alla") ? "Alla" : values[0] || "";
  select.value = values.includes(selected) ? selected : fallback;
}

function getSubject(subjectName) {
  return subjects.find(
    (subject) => subject.name === subjectName || subject.label === subjectName || (subject.name === "SVA" && subjectName === "SVA"),
  );
}

function syncChips() {
  document.querySelectorAll(".chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.subject === state.subject);
  });
}

function attachImageFallbacks(root = document) {
  root.querySelectorAll("img").forEach((img) => {
    if (img.dataset.fallbackReady) return;
    img.dataset.fallbackReady = "true";
    img.addEventListener("error", () => {
      img.classList.add("image-failed");
      img.removeAttribute("src");
    });
  });
}

function resourceLabel(count) {
  if (!count) return "Flera resurser och källor";
  return count === 1 ? "1 resurs och källa" : `${count} resurser och källor`;
}

function renderSubjects() {
  els.subjectCount.textContent = subjects.length;
  els.resourceCount.textContent = exams.length;
  els.pdfCount.textContent = exams.filter((exam) => exam.pdfUrl).length;

  els.subjectGrid.innerHTML = subjects
    .map((subject) => {
      const count = exams.filter((exam) => exam.subject === subject.name).length;
      const displayName = subject.label || subject.name;
      return `
        <article class="subject-card" style="--accent: ${subject.accent}">
          <img src="${subject.image}" alt="${subject.alt}" loading="lazy" decoding="async">
          <div class="subject-card-content">
            <div class="subject-icon">${subject.icon}</div>
            <h3>${displayName}</h3>
            <p>${subject.description}</p>
            <div class="course-pills">
              ${subject.courses
                .map((course) => `<button type="button" data-course="${course}" data-subject="${subject.name}">${course}</button>`)
                .join("")}
            </div>
            <div class="card-bottom">
              <span>${resourceLabel(count)}</span>
              <button class="arrow-button" type="button" data-open-subject="${subject.name}" aria-label="Öppna ${displayName}">→</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
  attachImageFallbacks(els.subjectGrid);
}

function filteredExams() {
  const query = state.search.trim().toLowerCase();
  return exams.filter((exam) => {
    const haystack = `${exam.subject} ${exam.course} ${exam.term} ${exam.title} ${exam.source} ${exam.type}`.toLowerCase();
    const matchesSearch = !query || haystack.includes(query);
    const matchesSubject = state.subject === "Alla" || exam.subject === state.subject;
    const matchesCourse = state.course === "Alla" || exam.course === state.course;
    const matchesType = state.type === "Alla" || exam.type === state.type;
    const matchesPdf = !state.pdfOnly || Boolean(exam.pdfUrl);
    return matchesSearch && matchesSubject && matchesCourse && matchesType && matchesPdf;
  });
}

function renderFilters() {
  optionList(els.subjectFilter, unique(exams.map((exam) => exam.subject)), state.subject);
  const courses = state.subject === "Alla" ? exams.map((exam) => exam.course) : exams.filter((exam) => exam.subject === state.subject).map((exam) => exam.course);
  optionList(els.courseFilter, unique(courses), state.course);
  optionList(els.typeFilter, unique(exams.map((exam) => exam.type)), state.type);
}

function renderExams() {
  const items = filteredExams();
  if (!items.length) {
    els.examList.innerHTML = `<div class="empty">Inga prov matchar filtren. Testa att rensa sökningen eller välj ett bredare ämne.</div>`;
    return;
  }

  els.examList.innerHTML = items
    .map((exam, index) => {
      const primaryAction =
        exam.pdfUrl && PDF_PREVIEW_ENABLED
          ? `<button class="small-button" type="button" data-preview="${exams.indexOf(exam)}">Förhandsvisa</button>`
          : `<a class="small-button primary-small" href="${exam.pdfUrl || exam.sourceUrl}" target="_blank" rel="noopener noreferrer">${exam.pdfUrl ? "Öppna PDF" : "Öppna"}</a>`;
      return `
        <article class="exam-row">
          <input class="exam-check" type="checkbox" aria-label="Markera ${exam.title}">
          <div class="term">${exam.term}</div>
          <div class="course-name">${exam.course}</div>
          <div class="exam-title">
            <strong>${exam.title}</strong>
            <span>${exam.source} · ${exam.type}</span>
          </div>
          <div class="exam-actions">
            ${primaryAction}
            <a class="small-button" href="${exam.sourceUrl}" target="_blank" rel="noopener noreferrer">Källa</a>
          </div>
        </article>
      `;
    })
    .join("");
}

function showCourse(subjectName, courseName) {
  const subject = getSubject(subjectName);
  if (!subject) return;
  const courseExams = exams.filter((exam) => exam.course === courseName);
  els.courseFocus.hidden = false;
  els.courseImage.src = subject.image;
  els.courseImage.alt = subject.alt;
  els.courseImage.classList.remove("image-failed");
  els.courseSubject.textContent = subject.label || subject.name;
  els.courseTitle.textContent = courseName;
  els.courseDescription.textContent =
    courseExams.length > 0
      ? `${courseName} har ${courseExams.length} resurser i provbanken. Börja med senaste frisläppta provet och jämför sedan äldre prov för återkommande uppgiftstyper.`
      : `${courseName} finns med i ämnesnavet. Lägg in fler direkta källor i datafilen när du vill bygga ut provbanken.`;
  els.courseTags.innerHTML = subject.focus.map((tag) => `<span class="badge">${tag}</span>`).join("");
  els.courseFocus.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function openPdf(exam) {
  if (!exam.pdfUrl) {
    window.open(exam.sourceUrl, "_blank", "noopener,noreferrer");
    return;
  }
  els.pdfTitle.textContent = exam.title;
  els.pdfSource.textContent = exam.source;
  els.pdfFrameWrap.classList.add("loading");
  els.pdfFrameWrap.classList.remove("show-fallback");
  els.pdfFrame.src = await previewPdfUrl(exam.pdfUrl);
  els.pdfNewTab.href = exam.pdfUrl;
  els.pdfModal.classList.add("open");
  els.pdfModal.setAttribute("aria-hidden", "false");
  clearTimeout(pdfFallbackTimer);
  pdfFallbackTimer = setTimeout(() => {
    if (els.pdfModal.classList.contains("open") && els.pdfFrameWrap.classList.contains("loading")) {
      els.pdfFrameWrap.classList.add("show-fallback");
    }
  }, 3500);
  els.closePdf.focus();
}

function closePdf() {
  clearTimeout(pdfFallbackTimer);
  els.pdfModal.classList.remove("open");
  els.pdfModal.setAttribute("aria-hidden", "true");
  els.pdfFrameWrap.classList.remove("loading", "show-fallback");
  els.pdfFrame.src = "about:blank";
}

function updatePlannerCourses() {
  const selectedSubject = els.plannerSubject.value;
  const subject = getSubject(selectedSubject);
  const courses = subject ? subject.courses : subjects.flatMap((item) => item.courses);
  optionList(els.plannerCourse, courses, els.plannerCourse.value || courses[0]);
}

function renderPlanner() {
  const weeks = Math.max(1, Math.min(12, Number(els.plannerWeeks.value) || 4));
  const hours = Math.max(1, Math.min(20, Number(els.plannerHours.value) || 4));
  const course = els.plannerCourse.value;
  const templates = [
    ["Diagnos och översikt", `Gör ett äldre prov utan stress. Markera vilka områden i ${course} som känns svagast.`],
    ["Bygg grunden", `Repetera teori, formler, texttyper eller strategier. Sikta på ${Math.ceil(hours * 0.6)} timmar aktiv träning.`],
    ["Prov under tid", "Kör ett helt delprov med timer. Rätta direkt och skriv en fellista."],
    ["Finputs och simulering", "Repetera fellistan, gör en sista provsimulering och vila kvällen före."],
  ];

  const cards = Array.from({ length: weeks }, (_, index) => {
    const template = templates[Math.min(index, templates.length - 1)];
    const title = weeks > 4 && index < weeks - 4 ? "Lång repetition" : template[0];
    const text =
      weeks > 4 && index < weeks - 4
        ? `Arbeta ${hours} timmar med ett huvudområde. Blanda teori med gamla uppgifter så att repetitionen inte blir passiv.`
        : template[1];
    return `
      <article class="week-card">
        <strong>Vecka ${index + 1}</strong>
        <h3>${title}</h3>
        <p>${text}</p>
      </article>
    `;
  });

  els.timeline.innerHTML = cards.join("");
}

function setSubject(subject) {
  state.subject = subject;
  state.course = "Alla";
  syncChips();
  renderFilters();
  renderExams();
  document.querySelector("#provbank").scrollIntoView({ behavior: "smooth", block: "start" });
}

function setTheme(theme) {
  const light = theme === "light";
  document.body.classList.toggle("light", light);
  els.themeToggle.textContent = light ? "☾" : "☼";
  els.themeToggle.setAttribute("aria-label", light ? "Byt till mörkt tema" : "Byt till ljust tema");
  try {
    localStorage.setItem("gymnasieopus-theme", theme);
  } catch {
    /* Theme still changes even if storage is unavailable. */
  }
}

function savedTheme() {
  try {
    return localStorage.getItem("gymnasieopus-theme");
  } catch {
    return null;
  }
}

function initPlanner() {
  optionList(els.plannerSubject, subjects.map((subject) => subject.name), "Matematik");
  updatePlannerCourses();
  renderPlanner();
}

function bindEvents() {
  els.globalSearch.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderExams();
  });

  els.clearSearch.addEventListener("click", () => {
    state.search = "";
    els.globalSearch.value = "";
    renderExams();
  });

  document.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => setSubject(chip.dataset.subject));
  });

  els.subjectFilter.addEventListener("change", (event) => {
    state.subject = event.target.value;
    state.course = "Alla";
    syncChips();
    renderFilters();
    renderExams();
  });

  els.courseFilter.addEventListener("change", (event) => {
    state.course = event.target.value;
    renderExams();
  });

  els.typeFilter.addEventListener("change", (event) => {
    state.type = event.target.value;
    renderExams();
  });

  els.pdfOnly.addEventListener("change", (event) => {
    state.pdfOnly = event.target.checked;
    renderExams();
  });

  els.subjectGrid.addEventListener("click", (event) => {
    const courseButton = event.target.closest("[data-course]");
    const subjectButton = event.target.closest("[data-open-subject]");
    if (courseButton) {
      state.subject = courseButton.dataset.subject;
      state.course = courseButton.dataset.course;
      syncChips();
      renderFilters();
      renderExams();
      showCourse(courseButton.dataset.subject, courseButton.dataset.course);
    }
    if (subjectButton) {
      setSubject(subjectButton.dataset.openSubject);
    }
  });

  els.examList.addEventListener("click", (event) => {
    const preview = event.target.closest("[data-preview]");
    const source = event.target.closest("[data-source]");
    if (preview) openPdf(exams[Number(preview.dataset.preview)]);
    if (source) window.open(source.dataset.source, "_blank", "noopener,noreferrer");
  });

  els.closePdf.addEventListener("click", closePdf);
  els.pdfFrame.addEventListener("load", () => {
    clearTimeout(pdfFallbackTimer);
    els.pdfFrameWrap.classList.remove("loading");
  });
  els.pdfFrame.addEventListener("error", () => {
    els.pdfFrameWrap.classList.remove("loading");
    els.pdfFrameWrap.classList.add("show-fallback");
  });

  els.pdfModal.addEventListener("click", (event) => {
    if (event.target === els.pdfModal) closePdf();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && els.pdfModal.classList.contains("open")) closePdf();
  });

  [els.plannerSubject, els.plannerCourse, els.plannerWeeks, els.plannerHours].forEach((input) => {
    input.addEventListener("input", () => {
      if (input === els.plannerSubject) updatePlannerCourses();
      renderPlanner();
    });
  });

  els.menuToggle.addEventListener("click", () => {
    els.mainNav.classList.toggle("open");
    els.menuToggle.setAttribute("aria-expanded", String(els.mainNav.classList.contains("open")));
  });

  els.mainNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      els.mainNav.classList.remove("open");
      els.menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  document.querySelectorAll("[data-footer-subject]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      setSubject(link.dataset.footerSubject);
    });
  });

  els.themeToggle.addEventListener("click", () => {
    setTheme(document.body.classList.contains("light") ? "dark" : "light");
  });

  els.randomExam.addEventListener("click", () => {
    const available = filteredExams();
    const exam = available[Math.floor(Math.random() * available.length)] || exams[0];
    if (exam.pdfUrl && PDF_PREVIEW_ENABLED) openPdf(exam);
    else window.open(exam.pdfUrl || exam.sourceUrl, "_blank", "noopener,noreferrer");
  });
}

function init() {
  setTheme(savedTheme() || "dark");
  attachImageFallbacks(document);
  syncChips();
  renderSubjects();
  renderFilters();
  renderExams();
  initPlanner();
  bindEvents();
}

init();
