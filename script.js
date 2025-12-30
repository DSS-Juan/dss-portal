// ----------------------------
// DATA
// ----------------------------
const tools = [
  {
    id: "globe-11-orders",
    section: "1. Order Creation",
    name: "1.1 Globe 11 Orders",
    desc: "Create and organize Globe 11 orders using the automation workbook.",
    tags: ["Orders", "Excel", "VBA"],
    path: "P:\\- DSS Tools\\1. Order Creation\\1.1 Globe 11 Orders\\Globe 11 Orders Automation.xlsm"
  },
  {
    id: "stlth-orders",
    section: "1. Order Creation",
    name: "1.2 STLTH Orders",
    desc: "Generate STLTH orders with the standardized workflow and tabs.",
    tags: ["Orders", "Excel", "VBA"],
    path: "P:\\- DSS Tools\\1. Order Creation\\1.2 STLTH Orders\\STLTH Orders.xlsm"
  },
  {
    id: "shopify-continue-deny-automation",
    section: "2. Website Inventory Update (Shopify)",
    name: "2.1.1 Continue or Deny Shopify (Automation)",
    desc: "Automated Continue/Deny master file workflow for Shopify inventory updates.",
    tags: ["Shopify", "Inventory", "Automation"],
    path: "P:\\- DSS Tools\\2. Website Inventory Update (Shopify)\\2.1 Shopify Inventory Tools\\2.1.1 Continue or Deny Shopify Automation\\Shopify - Continue Or Deny MSTR File Automation.xlsm"
  },
  {
    id: "shopify-continue-deny-manual",
    section: "2. Website Inventory Update (Shopify)",
    name: "2.1.2 Continue or Deny Shopify (Manual)",
    desc: "Manual comparison file for Continue/Deny decisions.",
    tags: ["Shopify", "Inventory"],
    path: "P:\\- DSS Tools\\2. Website Inventory Update (Shopify)\\2.1 Shopify Inventory Tools\\2.1.2 Continue or Deny Shopify Manually\\Shopify - Continue Or Deny Comparison.xlsx"
  },
  {
    id: "dss-upload-cart",
    section: "2. Website Inventory Update (Shopify)",
    name: "2.2 DSS Upload Cart Automation",
    desc: "Build and upload cart data for DSS Shopify updates.",
    tags: ["Shopify", "Uploads"],
    path: "P:\\- DSS Tools\\2. Website Inventory Update (Shopify)\\2.2 DSS Upload Cart Automation\\DSS Upload Cart Automation.xlsx"
  },
  {
    id: "sales-report",
    section: "3. Sales & Reporting",
    name: "3.1 Sales Report Automation",
    desc: "Refresh sales reporting model (shortcut).",
    tags: ["Reporting", "Power Query"],
    path: "P:\\- DSS Tools\\3. Sales & Reporting\\3.1 Sales Report Automation\\Sales Report - Shortcut.lnk"
  },
  {
    id: "canntrack-stamp-recon",
    section: "3. Sales & Reporting",
    name: "3.3 CannTrack vs Purchase – Stamp Reconciliation",
    desc: "Reconcile CannTrack vs Purchase and validate stamp movements.",
    tags: ["Compliance", "Reconciliation", "Excel"],
    path: "P:\\- DSS Tools\\3. Sales & Reporting\\3.3 CannTrack vs Purchase – Stamp Reconciliation\\Canntrack VS Purchase Automation - NEW.xlsm"
  },
  {
    id: "discontinued-skus-manufactured",
    section: "4. Inventory Management (ERPLY + Shopify)",
    name: "4.1 Discontinued SKUs Tool (Manufactured Products)",
    desc: "Identify discontinued manufactured products still showing online and generate action lists.",
    tags: ["Inventory", "Shopify", "ERPLY", "Manufactured"],
    path: "P:\\- DSS Tools\\4. Inventory Management (ERPLY + Shopify)\\4.1 STLTH Discontinued SKUs Tool\\Discontinued SKUs Tool Automation.xlsm"
  },
  {
    id: "discontinued-skus-stlth",
    section: "4. Inventory Management (ERPLY + Shopify)",
    name: "4.1 STLTH Discontinued SKUs Tool",
    desc: "Identify discontinued STLTH items still showing online and generate action lists.",
    tags: ["Inventory", "Shopify", "ERPLY", "STLTH"],
    path: "P:\\- DSS Tools\\4. Inventory Management (ERPLY + Shopify)\\4.1 STLTH Discontinued SKUs Tool\\STLTH Discontinued SKUs Tool Automation.xlsm"
  },
  {
    id: "stock-replenishment",
    section: "5. Stock Replenishment System",
    name: "5.1 Stock Replenishment Automation",
    desc: "Generate production plan / replenishment based on inventory + sales logic.",
    tags: ["Replenishment", "Production", "Excel"],
    path: "P:\\- DSS Tools\\5. Stock Replenishment System\\5.1 Stock Replenishment Automation\\Stock Replenishment Automation.xlsm"
  },
  {
    id: "recipes-automation",
    section: "6. Production & Recipes",
    name: "6.2 Recipes Automation",
    desc: "Recipe mixing + printing workflow (shortcut).",
    tags: ["Production", "Recipes", "Printing"],
    path: "P:\\- DSS Tools\\6. Production & Recipes\\6.2 Recipes Automation\\Recipe Mixing printing Final - Base on ml V.10 - Shortcut.lnk"
  },
  {
    id: "act-import-update",
    section: "7. Act",
    name: "7.1 Act Import Update Data Base Automation",
    desc: "Create Act-ready import files and update the Act database workflow.",
    tags: ["Act", "Imports", "Automation"],
    path: "P:\\- DSS Tools\\7. Act\\7.1 Act Import Update Data Base Automation\\Act Data Updated - Import Automation Tool.xlsm"
  }
];

// Tutorials are linked to a tool by toolId.
// For now they’re placeholders — you’ll replace url later.
const tutorials = [
  {
    toolId: "discontinued-skus",
    title: "Tool walkthrough: Discontinued SKUs",
    desc: "Refresh data, review HOLD/REMOVE lists, export results.",
    tags: ["Inventory"],
    url: "#"
  },
  {
    toolId: "sales-report",
    title: "Sales Report Automation: Refresh + Filters",
    desc: "How to refresh the model and read the weekly/monthly results.",
    tags: ["Reporting"],
    url: "#"
  }
];

// Order the sections how you want them displayed
const sectionOrder = [
  "1. Order Creation",
  "2. Website Inventory Update (Shopify)",
  "3. Sales & Reporting",
  "4. Inventory Management (ERPLY + Shopify)",
  "5. Stock Replenishment System",
  "6. Production & Recipes",
  "7. Act"
];

// ----------------------------
// HELPERS
// ----------------------------
function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function makeToolCard(t) {
  const tags = (t.tags || []).map(x => `<span class="tag">${escapeHtml(x)}</span>`).join("");
  const toolLink = `tool.html?tool=${encodeURIComponent(t.id)}`;

  return `
    <article class="card">
      <h4>${escapeHtml(t.name)}</h4>
      <p>${escapeHtml(t.desc)}</p>
      <div class="tags">${tags}</div>

      <div class="card-actions">
        <a href="${toolLink}">Open page</a>
        <button class="btn-mini" type="button" data-copy-path="${escapeHtml(t.id)}">Copy path</button>
      </div>
    </article>
  `;
}

function groupTools(toolList) {
  const groups = new Map();
  for (const t of toolList) {
    if (!groups.has(t.section)) groups.set(t.section, []);
    groups.get(t.section).push(t);
  }
  return groups;
}

function renderTools(toolList) {
  const toolGrid = document.getElementById("toolGrid");
  const groups = groupTools(toolList);

  const orderedSections = sectionOrder.filter(s => groups.has(s));
  const otherSections = [...groups.keys()].filter(s => !orderedSections.includes(s));
  const finalSections = [...orderedSections, ...otherSections];

  toolGrid.innerHTML = finalSections.map(section => {
    const cards = groups.get(section).map(makeToolCard).join("");
    return `
      <div class="group">
        <h4 class="group-title">${escapeHtml(section)}</h4>
        <div class="group-grid">${cards}</div>
      </div>
    `;
  }).join("");
}

function makeTutorialCard(v) {
  const tags = (v.tags || []).map(x => `<span class="tag">${escapeHtml(x)}</span>`).join("");
  return `
    <article class="card">
      <h4>${escapeHtml(v.title)}</h4>
      <p>${escapeHtml(v.desc)}</p>
      <div class="tags">${tags}</div>
      <div class="card-actions">
        <a href="${escapeHtml(v.url)}" target="_blank" rel="noreferrer">Watch</a>
      </div>
    </article>
  `;
}

function renderTutorials() {
  const videoGrid = document.getElementById("videoGrid");
  videoGrid.innerHTML = tutorials.map(makeTutorialCard).join("");
}

// ----------------------------
// INIT
// ----------------------------
renderTools(tools);
renderTutorials();

document.getElementById("toolCount").textContent = String(tools.length);
document.getElementById("videoCount").textContent = String(tutorials.length);
document.getElementById("year").textContent = String(new Date().getFullYear());

// Search tools
document.getElementById("search").addEventListener("input", (e) => {
  const q = e.target.value.trim().toLowerCase();
  const filtered = tools.filter(t =>
    (t.name + " " + t.desc + " " + (t.tags || []).join(" ") + " " + t.section).toLowerCase().includes(q)
  );
  renderTools(filtered);
});

// Copy path (supports single string OR array of paths)
document.addEventListener("click", async (e) => {
  const btn = e.target.closest("[data-copy-path]");
  if (!btn) return;

  const toolId = btn.getAttribute("data-copy-path");
  const tool = tools.find(t => t.id === toolId);
  if (!tool) return;

  const pathText = Array.isArray(tool.path) ? tool.path.join("\n") : tool.path;

  try {
    await navigator.clipboard.writeText(pathText);
    btn.textContent = "Copied!";
    setTimeout(() => (btn.textContent = "Copy path"), 900);
  } catch {
    alert("Copy failed. You can copy it manually from the tool page.");
  }
});
