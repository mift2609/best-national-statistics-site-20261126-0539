// AngkaNusa economy page: the series switcher and the sector chart.
//
// Each button swaps the line chart, the one-line reading under it and the
// source line, so the control does exactly what its label promises.

import { ECONOMY_SERIES, GDP_SECTORS_2024 } from './data.js';
import { lineChart, barChart } from './charts.js';

const READINGS = {
  growth: 'Growth held near five percent for a decade, broke only for the pandemic year 2020, and returned to 5.03% in 2024.',
  poverty: 'The March poverty rate fell from 11.22% in 2015 to 9.03% in 2024, with one pandemic interruption in 2021.',
  unemployment: 'Open unemployment spiked to 7.07% in August 2020 and has fallen every year since, reaching 4.91% in 2024.',
  inflation: 'Inflation peaked at 5.51% in December 2022 after fuel price adjustments, then eased to 1.57% by December 2024.',
};

const chartBox = document.getElementById('series-chart');
const title = document.getElementById('series-title');
const reading = document.getElementById('series-reading');
const source = document.getElementById('series-source');
const buttons = [...document.querySelectorAll('[data-series]')];

function showSeries(key) {
  const series = ECONOMY_SERIES[key];
  title.textContent = `${series.label} (${series.unit})`;
  reading.textContent = READINGS[key];
  source.textContent = series.source;
  chartBox.replaceChildren(lineChart(series.points, { unit: '%' }));
  for (const button of buttons) {
    button.setAttribute('aria-pressed', String(button.dataset.series === key));
  }
}

for (const button of buttons) {
  button.addEventListener('click', () => showSeries(button.dataset.series));
}
showSeries('growth');

const sectorRows = GDP_SECTORS_2024.map((d) => ({ label: d.sector, value: d.share }));
document.getElementById('sector-chart').append(barChart(sectorRows, { unit: '%' }));
