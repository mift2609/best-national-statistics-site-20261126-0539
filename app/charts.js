// AngkaNusa — small inline-SVG chart builders.
//
// Every chart on the site is drawn by one of these functions from the arrays
// in data.js. Charts are real SVG in the page (never images), carry a title
// and description for screen readers, and label every value they plot, so a
// figure can be read off the chart without hovering.

const SVG_NS = 'http://www.w3.org/2000/svg';

function el(tag, attrs, text) {
  const node = document.createElementNS(SVG_NS, tag);
  for (const [name, value] of Object.entries(attrs ?? {})) node.setAttribute(name, String(value));
  if (text !== undefined) node.textContent = text;
  return node;
}

function frame(svg, width, height, title, desc) {
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', `${title}. ${desc}`);
  svg.append(el('title', {}, title), el('desc', {}, desc));
}

// Horizontal bars: rows of {label, value}, value labels at the bar ends.
// Returns an SVG sized to fit every row. Rows are tall and the type is set
// large for an SVG, because the chart scales down to a phone's width and its
// labels must stay readable there.
export function barChart(rows, { unit = '', max = null, width = 640, rowHeight = 40 } = {}) {
  const height = rows.length * rowHeight + 8;
  const labelWidth = 168;
  const valueWidth = 76;
  const plotWidth = width - labelWidth - valueWidth;
  const peak = max ?? Math.max(...rows.map((r) => r.value));
  const svg = el('svg', { class: 'chart chart-bars' });
  const summary = rows.map((r) => `${r.label} ${r.value}${unit}`).join('; ');
  frame(svg, width, height, 'Bar chart', summary);
  rows.forEach((row, i) => {
    const y = i * rowHeight + 4;
    const barWidth = Math.max(2, (row.value / peak) * plotWidth);
    svg.append(
      el('text', { x: labelWidth - 10, y: y + rowHeight / 2 + 4, class: 'chart-label', 'text-anchor': 'end' }, row.label),
      el('rect', { x: labelWidth, y: y + 5, width: barWidth, height: rowHeight - 12, class: 'chart-bar', rx: 3 }),
      el('text', { x: labelWidth + barWidth + 8, y: y + rowHeight / 2 + 4, class: 'chart-value' }, `${row.value}${unit}`),
    );
  });
  return svg;
}

// A line over time with dots and value labels on every point, an axis for
// the years, and a zero line when the series crosses below it.
export function lineChart(points, { unit = '', width = 640, height = 300 } = {}) {
  const margin = { top: 26, right: 18, bottom: 30, left: 44 };
  const plotW = width - margin.left - margin.right;
  const plotH = height - margin.top - margin.bottom;
  const values = points.map((p) => p[1]);
  let lo = Math.min(0, ...values);
  let hi = Math.max(...values);
  if (lo === hi) hi = lo + 1;
  const pad = (hi - lo) * 0.12;
  lo -= pad;
  hi += pad;
  const x = (i) => margin.left + (i / (points.length - 1)) * plotW;
  const y = (v) => margin.top + (1 - (v - lo) / (hi - lo)) * plotH;
  const svg = el('svg', { class: 'chart chart-line' });
  const summary = points.map((p) => `${p[0]}: ${p[1]}${unit}`).join('; ');
  frame(svg, width, height, 'Line chart', summary);

  // Gridlines at the low, middle and high of the range.
  for (const frac of [0, 0.5, 1]) {
    const v = lo + frac * (hi - lo);
    svg.append(
      el('line', { x1: margin.left, x2: width - margin.right, y1: y(v), y2: y(v), class: 'chart-grid' }),
      el('text', { x: margin.left - 8, y: y(v) + 4, class: 'chart-axis', 'text-anchor': 'end' }, v.toFixed(1)),
    );
  }
  if (lo < 0 && hi > 0) {
    svg.append(el('line', { x1: margin.left, x2: width - margin.right, y1: y(0), y2: y(0), class: 'chart-zero' }));
  }
  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)},${y(p[1]).toFixed(1)}`).join(' ');
  svg.append(el('path', { d: path, class: 'chart-path' }));
  points.forEach((p, i) => {
    svg.append(
      el('circle', { cx: x(i), cy: y(p[1]), r: 4, class: 'chart-dot' }),
      el('text', { x: x(i), y: y(p[1]) - 10, class: 'chart-value', 'text-anchor': 'middle' }, String(p[1])),
      el('text', { x: x(i), y: height - 8, class: 'chart-axis', 'text-anchor': 'middle' }, String(p[0])),
    );
  });
  return svg;
}

// A single row of proportional segments, for shares of a whole.
export function shareBar(rows, { width = 640, height = 30 } = {}) {
  const total = rows.reduce((sum, r) => sum + r.value, 0);
  const svg = el('svg', { class: 'chart chart-share' });
  const summary = rows.map((r) => `${r.label} ${((r.value / total) * 100).toFixed(1)}%`).join('; ');
  frame(svg, width, height, 'Share bar', summary);
  let cursor = 0;
  rows.forEach((row, i) => {
    const w = (row.value / total) * width;
    svg.append(el('rect', { x: cursor, y: 0, width: Math.max(0, w - 2), height, class: `chart-seg seg-${i % 6}`, rx: 3 }));
    cursor += w;
  });
  return svg;
}
