/* ============================================================
   app.js — Shipping Dashboard | New Hope Cambodia
   April 2026
   ============================================================ */

/* ---------- CONSTANTS ---------- */
const COLORS = ['#2563EB', '#16A34A', '#D97706', '#9333EA', '#DC2626'];

/* ---------- DATA ---------- */
const employees = [
  {
    id: 'NHP158', name: 'NOPSOPHONNAR',
    b20: 451,  b25: 35012, b30: 12885,
    tons: 1261.9,  earn: 88.33,
    t20: 9.02,  t25: 875.3,  t30: 386.55
  },
  {
    id: 'NHP', name: 'Srey Neag',
    b20: 57,   b25: 888,   b30: 87483,
    tons: 2647.84, earn: 185.35,
    t20: 1.14,  t25: 22.2,   t30: 2624.49
  },
  {
    id: 'NH', name: 'Vanneth',
    b20: 30,   b25: 922,   b30: 69387,
    tons: 2105.3,  earn: 147.37,
    t20: 0.6,   t25: 23.05,  t30: 2081.61
  },
  {
    id: 'NHP062', name: 'Khem Veasna',
    b20: 11,   b25: 1102,  b30: 55093,
    tons: 1680.6,  earn: 117.64,
    t20: 0.22,  t25: 27.55,  t30: 1652.79
  },
  {
    id: 'NH', name: 'VEASNA',
    b20: 0,    b25: 0,     b30: 0,
    tons: 7704.52, earn: 231.14,
    t20: 0,     t25: 0,      t30: 0
  }
];

const dailyData = [
  { d: 1,  b20: 1,   b25: 3475, b30: 23236, tons: 783.98, bags: 26712, rev: 870.78 },
  { d: 2,  b20: 0,   b25: 3349, b30: 13547, tons: 490.14, bags: 16896, rev: 547.84 },
  { d: 3,  b20: 5,   b25: 5548, b30: 18563, tons: 695.69, bags: 24116, rev: 739.89 },
  { d: 4,  b20: 2,   b25: 1876, b30: 17538, tons: 573.08, bags: 19416, rev: 631.58 },
  { d: 5,  b20: 15,  b25: 670,  b30: 7423,  tons: 239.74, bags: 8108,  rev: 270.34 },
  { d: 6,  b20: 270, b25: 4489, b30: 23437, tons: 820.74, bags: 28196, rev: 880.04 },
  { d: 7,  b20: 8,   b25: 3397, b30: 22108, tons: 748.33, bags: 25513, rev: 792.83 },
  { d: 8,  b20: 0,   b25: 2107, b30: 21360, tons: 693.48, bags: 23467, rev: 752.48 },
  { d: 9,  b20: 8,   b25: 4367, b30: 24426, tons: 842.12, bags: 28801, rev: 856.12 },
  { d: 10, b20: 205, b25: 1910, b30: 14701, tons: 492.88, bags: 16816, rev: 567.58 },
  { d: 11, b20: 25,  b25: 3558, b30: 14516, tons: 524.93, bags: 18099, rev: 538.73 },
  { d: 12, b20: 10,  b25: 3121, b30: 14249, tons: 505.70, bags: 17380, rev: 549.70 },
  { d: 13, b20: 0,   b25: 57,   b30: 9744,  tons: 293.75, bags: 9801,  rev: 324.25 }
];

/* ---------- TAB SWITCHING ---------- */
function showTab(id, btn) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tb').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  btn.classList.add('active');
}

/* ---------- CHART HELPER ---------- */
function makeChart(id, type, data, extraOptions = {}) {
  const ctx = document.getElementById(id);
  if (!ctx) return;
  return new Chart(ctx, {
    type,
    data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      ...extraOptions
    }
  });
}

/* ---------- OVERVIEW CHARTS ---------- */
function initOverview() {
  makeChart('cEarn', 'bar', {
    labels: employees.map(e => e.name),
    datasets: [{
      data: employees.map(e => e.earn),
      backgroundColor: COLORS,
      borderRadius: 6
    }]
  }, {
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true, ticks: { callback: v => '$' + v } } }
  });

  makeChart('cTons', 'bar', {
    labels: employees.map(e => e.name),
    datasets: [{
      data: employees.map(e => e.tons),
      backgroundColor: COLORS.map(c => c + 'BB'),
      borderRadius: 6
    }]
  }, {
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } }
  });
}

/* ---------- DAILY CHARTS ---------- */
function initDaily() {
  makeChart('cDailyTons', 'line', {
    labels: dailyData.map(d => 'Apr ' + d.d),
    datasets: [{
      label: 'Total Tons',
      data: dailyData.map(d => d.tons),
      borderColor: '#2563EB',
      backgroundColor: '#2563EB22',
      fill: true,
      tension: 0.35,
      pointRadius: 4
    }]
  }, {
    plugins: { legend: { display: false } }
  });

  makeChart('cDailyRev', 'bar', {
    labels: dailyData.map(d => 'Apr ' + d.d),
    datasets: [{
      label: 'Revenue (USD)',
      data: dailyData.map(d => d.rev),
      backgroundColor: '#16A34A99',
      borderRadius: 4
    }]
  }, {
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true, ticks: { callback: v => '$' + v } } }
  });

  // Build daily table
  const tbody = document.getElementById('dTbody');
  if (!tbody) return;
  dailyData.forEach(d => {
    tbody.innerHTML += `
      <tr>
        <td>Apr ${d.d}</td>
        <td>${d.b20}</td>
        <td>${d.b25.toLocaleString()}</td>
        <td>${d.b30.toLocaleString()}</td>
        <td>${d.tons}</td>
        <td>${d.bags.toLocaleString()}</td>
        <td>$${d.rev.toFixed(2)}</td>
      </tr>`;
  });
  tbody.innerHTML += `
    <tr class="total-row">
      <td>Total</td>
      <td>549</td><td>37,924</td><td>224,848</td>
      <td>7,704.52</td><td>263,321</td><td>$8,322.12</td>
    </tr>`;
}

/* ---------- EMPLOYEE CARDS + RADAR ---------- */
function initEmployees() {
  const maxEarn = Math.max(...employees.map(e => e.earn));
  const grid = document.getElementById('empGrid');
  if (!grid) return;

  employees.forEach((emp, i) => {
    const pct = ((emp.earn / maxEarn) * 100).toFixed(1);
    grid.innerHTML += `
      <div class="emp-card">
        <div class="emp-name">${emp.name}</div>
        <div class="emp-stat"><span>Emp ID</span>   <span>${emp.id}</span></div>
        <div class="emp-stat"><span>Total Tons</span><span>${emp.tons.toLocaleString()}</span></div>
        <div class="emp-stat"><span>20kg bags</span> <span>${emp.b20}</span></div>
        <div class="emp-stat"><span>25kg bags</span> <span>${emp.b25.toLocaleString()}</span></div>
        <div class="emp-stat"><span>30kg bags</span> <span>${emp.b30.toLocaleString()}</span></div>
        <div class="emp-earn">$${emp.earn.toFixed(2)}</div>
        <div class="prog">
          <div class="prog-fill" style="width:${pct}%; background:${COLORS[i]}"></div>
        </div>
      </div>`;
  });

  makeChart('cRadar', 'radar', {
    labels: ['Earnings', 'Tons', '25kg Bags', '30kg Bags'],
    datasets: employees.map((emp, i) => ({
      label: emp.name,
      data: [
        (emp.earn  / maxEarn)   * 100,
        (emp.tons  / 7704.52)   * 100,
        (emp.b25   / 35012)     * 100,
        (emp.b30   / 87483)     * 100
      ],
      borderColor:     COLORS[i],
      backgroundColor: COLORS[i] + '22',
      pointRadius: 3
    }))
  }, {
    scales: { r: { min: 0, max: 100, ticks: { display: false } } }
  });
}

/* ---------- BAG-TYPE CHARTS ---------- */
function initBags() {
  makeChart('cPie', 'doughnut', {
    labels: ['20kg bags', '25kg bags', '30kg bags'],
    datasets: [{
      data: [549, 37924, 224848],
      backgroundColor: ['#2563EB', '#16A34A', '#D97706'],
      borderWidth: 2
    }]
  }, {
    plugins: {
      legend: { position: 'bottom' },
      tooltip: { callbacks: { label: ctx => `${ctx.label}: ${ctx.parsed.toLocaleString()} bags` } }
    }
  });

  const fourEmps = employees.slice(0, 4);
  makeChart('cStacked', 'bar', {
    labels: fourEmps.map(e => e.name),
    datasets: [
      { label: '20kg (tons)', data: fourEmps.map(e => e.t20), backgroundColor: '#2563EB', borderRadius: 3 },
      { label: '25kg (tons)', data: fourEmps.map(e => e.t25), backgroundColor: '#16A34A', borderRadius: 3 },
      { label: '30kg (tons)', data: fourEmps.map(e => e.t30), backgroundColor: '#D97706', borderRadius: 3 }
    ]
  }, {
    scales: { x: { stacked: true }, y: { stacked: true, beginAtZero: true } },
    plugins: { legend: { position: 'bottom' } }
  });
}

/* ---------- BOOT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initOverview();
  initDaily();
  initEmployees();
  initBags();
});
