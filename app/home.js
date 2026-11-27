// AngkaNusa home page: fills the headline cards from data.js and draws the
// census line chart. Everything it shows comes from the site's own dataset.

import { HEADLINES, CENSUS_YEARS, CENSUS_POPULATION } from './data.js';
import { lineChart } from './charts.js';

const cards = document.getElementById('headline-cards');
for (const item of HEADLINES) {
  const card = document.createElement('article');
  card.className = 'card';
  const label = document.createElement('div');
  label.className = 'card-label';
  label.textContent = item.label;
  const value = document.createElement('div');
  value.className = 'card-value';
  value.textContent = item.value;
  const note = document.createElement('p');
  note.className = 'card-note';
  note.textContent = item.note;
  const source = document.createElement('p');
  source.className = 'source';
  source.textContent = item.source;
  card.append(label, value, note, source);
  cards.append(card);
}

const points = CENSUS_YEARS.map((year, i) => [year, CENSUS_POPULATION[i]]);
document.getElementById('census-chart').append(lineChart(points, { unit: ' million' }));
