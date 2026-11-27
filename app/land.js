// AngkaNusa land page: the three time-zone clocks.
//
// Each clock formats the same instant in one of Indonesia's three zones with
// the browser's own time-zone database, so the clocks agree with the
// visitor's device and need nothing from the network.

const ZONES = [
  { id: 'clock-wib', zone: 'Asia/Jakarta' },
  { id: 'clock-wita', zone: 'Asia/Makassar' },
  { id: 'clock-wit', zone: 'Asia/Jayapura' },
];

const formatters = ZONES.map(({ id, zone }) => ({
  node: document.getElementById(id),
  format: new Intl.DateTimeFormat('en-GB', {
    timeZone: zone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }),
}));

function tick() {
  const now = new Date();
  for (const { node, format } of formatters) {
    if (node) node.textContent = format.format(now);
  }
}

tick();
setInterval(tick, 1000);
