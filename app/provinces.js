// AngkaNusa provinces page: the largest-provinces chart and the searchable,
// sortable table of all 38 provinces.

import { LARGEST_PROVINCES_2024, PROVINCES } from './data.js';
import { barChart } from './charts.js';

const chartRows = LARGEST_PROVINCES_2024.map((d) => ({ label: d.province, value: d.people }));
document.getElementById('largest-chart').append(barChart(chartRows, { unit: ' M' }));

const tbody = document.getElementById('province-rows');
const count = document.getElementById('province-count');
const search = document.getElementById('province-search');

let sortKey = 'name';
let sortDir = 1;
let query = '';

function visibleProvinces() {
  const q = query.trim().toLowerCase();
  const rows = PROVINCES.filter((p) =>
    !q || p.name.toLowerCase().includes(q) || p.capital.toLowerCase().includes(q) || p.region.toLowerCase().includes(q),
  );
  rows.sort((a, b) => a[sortKey].localeCompare(b[sortKey]) * sortDir);
  return rows;
}

function render() {
  const rows = visibleProvinces();
  tbody.replaceChildren(
    ...rows.map((p) => {
      const tr = document.createElement('tr');
      for (const text of [p.name, p.capital, p.region]) {
        const td = document.createElement('td');
        td.textContent = text;
        tr.append(td);
      }
      return tr;
    }),
  );
  count.textContent = rows.length === PROVINCES.length
    ? `Showing all ${PROVINCES.length} provinces.`
    : `Showing ${rows.length} of ${PROVINCES.length} provinces.`;
}

search.addEventListener('input', () => {
  query = search.value;
  render();
});

for (const button of document.querySelectorAll('[data-sort]')) {
  button.addEventListener('click', () => {
    const key = button.dataset.sort;
    if (key === sortKey) {
      sortDir = -sortDir;
    } else {
      sortKey = key;
      sortDir = 1;
    }
    render();
  });
}

render();
