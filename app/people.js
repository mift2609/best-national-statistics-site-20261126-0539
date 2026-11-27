// AngkaNusa people page: draws the island-group bar chart and the share bar
// (with its legend) from the 2020 census figures in data.js.

import { ISLAND_POPULATION_2020 } from './data.js';
import { barChart, shareBar } from './charts.js';

const rows = ISLAND_POPULATION_2020.map((d) => ({ label: d.island, value: d.people }));
document.getElementById('island-chart').append(barChart(rows, { unit: ' M' }));

const shares = ISLAND_POPULATION_2020.map((d) => ({ label: d.island, value: d.people }));
document.getElementById('island-share').append(shareBar(shares));

const total = ISLAND_POPULATION_2020.reduce((sum, d) => sum + d.people, 0);
const legend = document.getElementById('island-legend');
for (const d of ISLAND_POPULATION_2020) {
  const item = document.createElement('span');
  item.textContent = `${d.island} ${((d.people / total) * 100).toFixed(1)}%`;
  legend.append(item);
}
