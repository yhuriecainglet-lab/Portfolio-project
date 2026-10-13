/* ============================================================
   Portfolio — data and interactions
   All project text lives here, in one place, so the wording is
   edited once and every screen picks it up.
   ============================================================ */

const PROJECTS = [
  {
    number: "01",
    title: "Enrollment System",
    tech: ["C#", "Windows Forms", ".NET 10", "Visual Studio"],
    environment: "Visual Studio",
    type: "Desktop Application",
    image: "assets/enrollment-system.png",
    imageAlt: "Enrollment System admin window",
    description:
      "A three-role Windows Forms application for managing student records by program. " +
      "A landing screen branches into Student, Faculty, or Admin login. Admin opens one window " +
      "holding a record panel for each of eight programs — BSIT, BSED, BSBA, BSE, BSN, BSHTM, " +
      "BSHK and BSCJE — where records are created, viewed, edited and deleted through a ListView. " +
      "Students get a read-only viewer form per program that reads the same shared record list, " +
      "faculty get a Monday-to-Sunday schedule view, and admin can build a schedule in a " +
      "DataGridView and print it as an Enrollment Registration Certificate using GDI+ drawing " +
      "through PrintDocument.",
    skills: [
      "Classes and properties",
      "Static shared state",
      "List<T> and foreach",
      "Windows Forms events",
      "DataGridView",
      "GDI+ printing",
      "Multi-window navigation"
    ],
    limits:
      "Data is held in memory only and is gone when the app closes. There is no database, no " +
      "attendance module and no grade entry, and the login credentials are hardcoded in source. " +
      "A first-year-scale architecture, not a production system.",
    team: "Two-person coursework build with Ortiz.",
    source: {
      label: "Google Drive folder",
      url: "https://drive.google.com/drive/folders/1S3rzXgc-mI-lkOd7AqEZPjmL7YbRZhtQ?usp=sharing"
    }
  },
  {
    number: "02",
    title: "Enrollment System Portal",
    tech: ["Java", "Swing", "Apache NetBeans"],
    environment: "Apache NetBeans",
    type: "Desktop Application",
    image: "assets/enrollment-system-portal.png",
    imageAlt: "Enrollment System Portal student record table",
    description:
      "A Java Swing student-record application, and two lessons in one: how to structure CRUD " +
      "state, and how to build your own Swing components. A login window validates each field, " +
      "toggles password visibility and gates access. The record window runs a deliberate button " +
      "workflow — New unlocks and clears the inputs, Add commits the row to a JTable and re-locks " +
      "the form, Update writes into the selected row, Delete removes it. Fields are first name, " +
      "last name, ID, email, gender, age and date of birth, and typing in the search box filters " +
      "the table live as you type.",
    skills: [
      "JTable and DefaultTableModel CRUD",
      "Live search via DocumentListener",
      "Custom-painted rounded components",
      "Antialiasing",
      "Button-state management",
      "Row-index conversion under an active filter"
    ],
    limits:
      "No sign-up screen, no faculty side and no persistence. Records exist for the length of the " +
      "session.",
    team: null,
    source: {
      label: "GitHub repository",
      url: "https://github.com/yhuriecainglet-lab/Enrollment-System"
    }
  },
  {
    number: "03",
    title: "Gentleman",
    tech: ["Java", "Swing", "Apache NetBeans", "Point of Sale"],
    environment: "Apache NetBeans",
    type: "Desktop Application",
    image: "assets/gentleman.png",
    imageAlt: "Gentleman point of sale checkout screen",
    description:
      "A working point-of-sale application for a shop selling watches and eyewear, and the project " +
      "where my Java event handling actually clicked. A four-window flow runs login, then a menu " +
      "shell, then checkout. Eleven products appear as image tiles, each with its own quantity " +
      "badge that increments on every click. Adding an item writes a cart row, replacing any " +
      "previous row for that item so quantities never duplicate. The total updates live, cash and " +
      "balance are calculated on payment, a row can be deleted, and Print composes a formatted " +
      "receipt in a text area and sends it to the printer.",
    skills: [
      "DefaultTableModel and Vector as a cart",
      "Re-entrant add logic",
      "DecimalFormat with a guarded NumberFormatException",
      "Multi-window dispose() navigation",
      "Themed Swing borders and layout"
    ],
    limits:
      "Product images are loaded from absolute paths on my machine, so most tiles render blank for " +
      "anyone else. There is no persistence, and the DASHBOARD button is a disabled placeholder.",
    team: "Five-person coursework build — Romano, Salizon, Ortiz, Beajen, and Cainglet (me).",
    source: {
      label: "GitHub repository",
      url: "https://github.com/yhuriecainglet-lab/OOP-project-POS-system-"
    }
  },
  {
    number: "04",
    title: "Simple POS",
    tech: ["Java", "Swing", "Apache NetBeans", "Point of Sale"],
    environment: "Apache NetBeans",
    type: "Desktop Application",
    image: "assets/simple-pos.png",
    imageAlt: "Simple POS food counter screen",
    description:
      "A second point-of-sale build, this time for a food counter, organised around making a " +
      "single class handle a complete transaction. Nine items sit on the panel as buttons, each " +
      "paired with a quantity counter. Clicking an item sends it to a cart table with its line " +
      "total already calculated, a running total sums the table, Pay subtracts that total from the " +
      "cash entered to show the balance, Delete clears a selected row, and Print outputs a receipt " +
      "with the store header, an item, quantity and price breakdown, and the subtotal, cash and " +
      "balance lines.",
    skills: [
      "Cart logic split into addtable(), cal() and a payment handler",
      "Line-total and running-sum calculation",
      "Table-model add, remove and re-total",
      "Printable receipt generation",
      "Swing event wiring across many components"
    ],
    limits:
      "The cart lives only in the table model, so nothing survives a restart. There is no " +
      "persistence and no login.",
    team: null,
    source: {
      label: "GitHub repository",
      url: "https://github.com/yhuriecainglet-lab/Simple-POS"
    }
  },
  {
    number: "05",
    title: "SCP",
    tech: ["Java", "Swing", "Apache NetBeans", "Interface Design"],
    environment: "Apache NetBeans",
    type: "Interface Design Study",
    image: "assets/scp.png",
    imageAlt: "SCP branded login screen",
    description:
      "An interface design study for a fictional organisation, the S.C.P Foundation — Secure, " +
      "Contain, Protect. It is a branded two-window authentication interface: a split grey-and-red " +
      "panel on a fixed 600 by 600 canvas, consistent field labels, a logo lockup, and Login and " +
      "Signup screens that navigate to each other. The work here is layout and visual consistency — " +
      "absolute positioning, frame composition, and holding one colour and type system steady " +
      "across both screens.",
    skills: [
      "Swing frame composition",
      "Absolute layout",
      "A reusable visual language across screens",
      "Typography scale and colour system",
      "Two-way screen navigation"
    ],
    limits:
      "The login button is not wired to a credential check, and the sign-up screen only returns " +
      "to login. The interface is built; the authentication behind it is not.",
    team: null,
    source: {
      label: "GitHub repository",
      url: "https://github.com/yhuriecainglet-lab/login-signup-sample"
    }
  },
  {
    number: "06",
    title: "Notebook",
    tech: ["UI/UX Design", "Mobile Prototype", "Figma"],
    environment: "Figma",
    type: "Mobile Prototype",
    image: "assets/notebook.png",
    imageAlt: "Notebook mobile interface prototype",
    description:
      "A mobile interface prototype for a social platform concept, designed and built entirely in " +
      "Figma. The focus is mobile interaction: how a feed is scanned on a small screen, how the " +
      "primary action stays reachable with one thumb, and how user controls behave on tap, hold " +
      "and navigate. I treated it as a product concept, deciding the core screens, what the user " +
      "can control, and how the layout holds up on a phone before a single line of code exists.",
    skills: [
      "Figma components and auto-layout",
      "Prototyping",
      "Mobile interface design",
      "Information hierarchy",
      "Control states and touch targets",
      "Product concept development"
    ],
    limits: null,
    team: null,
    source: {
      label: "Figma prototype",
      url: "https://www.figma.com/design/0amCo1DRdJqujmGdulaVy9/Untitled?node-id=0-1&t=SsDksAJGDLmbdl6h-1"
    }
  }
];

/* ============================================================
   Rendering
   ============================================================ */

const grid = document.getElementById("project-grid");

function renderProjects() {
  PROJECTS.forEach((project, index) => {
    // A div with role="button" rather than a <button> element: a button's
    // content model only allows phrasing content, so the headings and
    // paragraphs a project card needs would be invalid markup inside one.
    const card = document.createElement("div");
    card.className = "card project-card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-haspopup", "dialog");
    card.setAttribute("aria-label", "View details for " + project.title);

    const thumb = document.createElement("img");
    thumb.className = "project-thumb";
    thumb.src = project.image;
    thumb.alt = project.imageAlt;
    thumb.loading = "lazy";

    const body = document.createElement("div");
    body.className = "project-body";

    const meta = document.createElement("div");
    meta.className = "project-meta";

    const number = document.createElement("span");
    number.className = "project-number";
    number.textContent = project.number;

    const type = document.createElement("span");
    type.className = "project-type";
    type.textContent = project.type;

    meta.append(number, type);

    const title = document.createElement("h3");
    title.className = "project-title";
    title.textContent = project.title;

    const tech = document.createElement("p");
    tech.className = "project-tech";
    tech.textContent = project.tech.join(" · ");

    body.append(meta, title, tech);

    if (project.limits) {
      const flag = document.createElement("span");
      flag.className = "project-flag limits";
      flag.textContent = "known limitations listed in the project";
      body.appendChild(flag);
    }
    if (project.team) {
      const flag = document.createElement("span");
      flag.className = "project-flag team";
      flag.textContent = "team project";
      body.appendChild(flag);
    }

    card.append(thumb, body);
    card.addEventListener("click", () => openDetail(index));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openDetail(index);
      }
    });
    grid.appendChild(card);
  });
}

/* ============================================================
   Project detail overlay
   ============================================================ */

const overlay = document.getElementById("overlay");
const detail = {
  kicker: document.getElementById("detail-kicker"),
  title: document.getElementById("detail-title"),
  tech: document.getElementById("detail-tech"),
  facts: document.getElementById("detail-facts"),
  image: document.getElementById("detail-image"),
  description: document.getElementById("detail-description"),
  skills: document.getElementById("detail-skills"),
  teamCard: document.getElementById("detail-team-card"),
  team: document.getElementById("detail-team"),
  limitsCard: document.getElementById("detail-limits-card"),
  limits: document.getElementById("detail-limits"),
  source: document.getElementById("detail-source")
};

function chip(text) {
  const span = document.createElement("span");
  span.className = "chip";
  span.textContent = text;
  return span;
}

function openDetail(index) {
  const project = PROJECTS[index];

  detail.kicker.textContent = "project " + project.number;
  detail.title.textContent = project.title;

  detail.tech.replaceChildren();
  project.tech.forEach((value) => detail.tech.appendChild(chip(value)));

  detail.facts.textContent =
    "Environment:  " + project.environment + "      Type:  " + project.type;

  detail.image.src = project.image;
  detail.image.alt = project.imageAlt;

  detail.description.textContent = project.description;

  detail.skills.replaceChildren();
  project.skills.forEach((value) => detail.skills.appendChild(chip(value)));

  setVisible(detail.teamCard, Boolean(project.team));
  if (project.team) {
    detail.team.textContent = project.team;
  }

  setVisible(detail.limitsCard, Boolean(project.limits));
  if (project.limits) {
    detail.limits.textContent = project.limits;
  }

  detail.source.textContent = "Open " + project.source.label + "  →";
  detail.source.href = project.source.url;

  overlay.hidden = false;
  document.body.style.overflow = "hidden";
  overlay.querySelector(".overlay-panel").scrollTop = 0;
  detail.source.focus();
}

function closeDetail() {
  overlay.hidden = true;
  document.body.style.overflow = "";
}

function setVisible(element, visible) {
  element.hidden = !visible;
}

/* ============================================================
   Navigation
   ============================================================ */

const SECTIONS = ["home", "about", "projects", "stack", "contact"];
const navLinks = Array.from(document.querySelectorAll(".nav-link"));

function goTo(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) {
    return;
  }
  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelectorAll("[data-nav]").forEach((control) => {
  control.addEventListener("click", () => {
    const target = control.getAttribute("data-nav");
    if (target) {
      goTo(target);
    }
  });
});

/* Highlight the nav item for the section currently in view. */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      const id = entry.target.id;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("data-nav") === id);
      });
    });
  },
  { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
);

SECTIONS.forEach((id) => {
  const section = document.getElementById(id);
  if (section) {
    observer.observe(section);
  }
});

/* ============================================================
   Contact — click a row to copy it
   ============================================================ */

const toast = document.getElementById("toast");
let toastTimer = null;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function copyText(value) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(value).then(
      () => showToast("Copied: " + value),
      () => fallbackCopy(value)
    );
  } else {
    fallbackCopy(value);
  }
}

function fallbackCopy(value) {
  const area = document.createElement("textarea");
  area.value = value;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.select();
  try {
    document.execCommand("copy");
    showToast("Copied: " + value);
  } catch (error) {
    showToast("Copy failed — please select the text manually");
  }
  document.body.removeChild(area);
}

document.getElementById("contact-github").addEventListener("click", () => {
  copyText("yhuriecainglet-lab");
});
document.getElementById("contact-email").addEventListener("click", () => {
  copyText("yhurie_cainglet@sjp2cd.edu.ph");
});

/* ============================================================
   Overlay controls — backdrop click and Escape
   ============================================================ */

overlay.querySelectorAll("[data-close]").forEach((control) => {
  control.addEventListener("click", closeDetail);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !overlay.hidden) {
    closeDetail();
  }
});

/* ============================================================
   Start
   ============================================================ */

renderProjects();
