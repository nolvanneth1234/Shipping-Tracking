/* ===== CSS VARIABLES ===== */
:root {
  --bg:     #F0F4F8;
  --card:   #ffffff;
  --navy:   #1A3A5C;
  --blue:   #2563EB;
  --green:  #16A34A;
  --amber:  #D97706;
  --purple: #9333EA;
  --red:    #DC2626;
  --slate:  #64748B;
  --border: #E2E8F0;
  --text:   #1E293B;
  --muted:  #94A3B8;
  --radius: 10px;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg:     #0F172A;
    --card:   #1E293B;
    --border: #334155;
    --text:   #F1F5F9;
    --muted:  #64748B;
    --slate:  #94A3B8;
  }
}

/* ===== RESET ===== */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ===== BASE ===== */
body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: var(--bg);
  color: var(--text);
  font-size: 14px;
  padding-bottom: env(safe-area-inset-bottom, 0);
}

/* ===== HEADER ===== */
header {
  background: var(--navy);
  color: #ffffff;
  padding: 1.1rem 1.25rem;
}

header h1 {
  font-size: 1rem;
  font-weight: 700;
}

header p {
  font-size: 0.75rem;
  opacity: 0.6;
  margin-top: 0.2rem;
}

/* ===== TABS ===== */
.tabs {
  display: flex;
  background: var(--card);
  border-bottom: 1px solid var(--border);
  overflow-x: auto;
}

.tb {
  flex-shrink: 0;
  padding: 0.65rem 1rem;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 0.8rem;
  color: var(--slate);
  border-bottom: 2px solid transparent;
  white-space: nowrap;
  transition: color 0.15s, border-color 0.15s;
}

.tb.active {
  color: var(--blue);
  border-bottom-color: var(--blue);
  font-weight: 700;
}

/* ===== MAIN ===== */
main {
  padding: 0.9rem;
  max-width: 900px;
  margin: 0 auto;
}

/* ===== PANELS ===== */
.panel { display: none; }
.panel.active { display: block; }

/* ===== KPI CARDS ===== */
.kpi-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
  margin-bottom: 0.9rem;
}

@media (min-width: 480px) {
  .kpi-row { grid-template-columns: repeat(4, 1fr); }
}

.kpi {
  background: var(--card);
  border-radius: var(--radius);
  padding: 0.9rem;
  border: 1px solid var(--border);
}

.kpi-label {
  font-size: 0.68rem;
  color: var(--muted);
  margin-bottom: 0.25rem;
}

.kpi-value {
  font-size: 1.4rem;
  font-weight: 800;
  line-height: 1;
}

.kpi-sub {
  font-size: 0.68rem;
  color: var(--slate);
  margin-top: 0.2rem;
}

/* Color helpers */
.blue   { color: var(--blue); }
.green  { color: var(--green); }
.amber  { color: var(--amber); }
.navy   { color: var(--navy); }

/* ===== CARD ===== */
.card {
  background: var(--card);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  padding: 0.9rem;
  margin-bottom: 0.9rem;
}

.card h3 {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--slate);
  margin-bottom: 0.7rem;
}

/* Chart wrapper */
.cw {
  position: relative;
  height: 220px;
}

/* ===== TABLE ===== */
.table-wrap { overflow-x: auto; }

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.78rem;
}

th {
  text-align: left;
  padding: 0.45rem 0.55rem;
  background: var(--bg);
  color: var(--slate);
  font-weight: 700;
  font-size: 0.68rem;
  border-bottom: 1px solid var(--border);
  white-space: nowrap;
}

td {
  padding: 0.45rem 0.55rem;
  border-bottom: 1px solid var(--border);
}

tr:last-child td { border-bottom: none; }

tr.total-row td {
  font-weight: 700;
  background: rgba(37, 99, 235, 0.06);
}

/* ===== EMPLOYEE GRID ===== */
.emp-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.7rem;
  margin-bottom: 0.9rem;
}

@media (min-width: 580px) {
  .emp-grid { grid-template-columns: repeat(3, 1fr); }
}

.emp-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 0.85rem;
}

.emp-name {
  font-weight: 700;
  font-size: 0.88rem;
  margin-bottom: 0.45rem;
}

.emp-stat {
  font-size: 0.72rem;
  color: var(--slate);
  display: flex;
  justify-content: space-between;
  padding: 0.18rem 0;
}

.emp-stat span:last-child {
  font-weight: 700;
  color: var(--text);
}

.emp-earn {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--green);
  margin-top: 0.35rem;
}

/* ===== PROGRESS BAR ===== */
.prog {
  height: 5px;
  background: var(--border);
  border-radius: 999px;
  margin-top: 0.35rem;
  overflow: hidden;
}

.prog-fill {
  height: 100%;
  border-radius: 999px;
  transition: width 0.4s ease;
}
