// AngkaNusa — the figures behind every page of the site.
//
// Each number carries the source and year it comes from, and the pages print
// that source beside the figure. Values are the published ones of the bodies
// named (BPS — Statistics Indonesia, the World Bank, APJII, PVMBG and the
// Geospatial Information Agency), rounded the way those bodies round them.
// Nothing on the site is fetched: this file is the whole dataset.

// Headline figures for the front page cards. `value` is display text so the
// rounding the source published is the rounding the visitor sees.
export const HEADLINES = [
  { label: 'Population', value: '284.4 million', note: 'Mid-2025 estimate', source: 'BPS, 2025' },
  { label: 'Gross domestic product', value: 'Rp 22,139 trillion', note: 'Current prices, 2024', source: 'BPS, 2025' },
  { label: 'Economic growth', value: '5.03%', note: 'GDP growth, 2024', source: 'BPS, 2025' },
  { label: 'Poverty rate', value: '8.57%', note: 'September 2024', source: 'BPS, 2025' },
  { label: 'Life expectancy', value: '72.4 years', note: 'At birth, 2024', source: 'BPS, 2024' },
  { label: 'Provinces', value: '38', note: 'Since the 2022 Papua splits', source: 'Ministry of Home Affairs' },
  { label: 'Named islands', value: '17,001', note: 'Officially named and verified', source: 'Geospatial Information Agency, 2023' },
  { label: 'Land area', value: '1,904,569 km²', note: 'Across three time zones', source: 'Geospatial Information Agency' },
];

// Population counted at each census, millions of people.
export const CENSUS_YEARS = [1971, 1980, 1990, 2000, 2010, 2020];
export const CENSUS_POPULATION = [119.2, 147.5, 179.4, 206.3, 237.6, 270.2];

// Where the 2020 census found people, by island group, millions.
export const ISLAND_POPULATION_2020 = [
  { island: 'Java', people: 151.6 },
  { island: 'Sumatra', people: 58.6 },
  { island: 'Sulawesi', people: 19.9 },
  { island: 'Kalimantan', people: 16.6 },
  { island: 'Bali & Nusa Tenggara', people: 15.3 },
  { island: 'Papua', people: 4.3 },
  { island: 'Maluku', people: 3.1 },
];

// People page facts.
export const PEOPLE_FACTS = {
  midYear2024: '281.6 million',
  densityPerKm2: 148,
  javaSharePercent: 56.1,
  urbanSharePercent: 58.6,
  medianAgeYears: 30.7,
  fertilityRate: 2.1,
  literacyPercent: 96.0,
  schoolingYears: 9.2,
  internetUsersMillion: 221.6,
  internetPenetrationPercent: 79.5,
};

// Annual series for the economy page's switchable chart. Each entry is a
// label, the unit the axis shows, and [year, value] points.
export const ECONOMY_SERIES = {
  growth: {
    label: 'GDP growth',
    unit: '% a year',
    source: 'BPS, annual GDP releases',
    points: [
      [2015, 4.88], [2016, 5.03], [2017, 5.07], [2018, 5.17], [2019, 5.02],
      [2020, -2.07], [2021, 3.70], [2022, 5.31], [2023, 5.05], [2024, 5.03],
    ],
  },
  poverty: {
    label: 'Poverty rate',
    unit: '% of population, March',
    source: 'BPS, March poverty releases',
    points: [
      [2015, 11.22], [2016, 10.86], [2017, 10.64], [2018, 9.82], [2019, 9.41],
      [2020, 9.78], [2021, 10.14], [2022, 9.54], [2023, 9.36], [2024, 9.03],
    ],
  },
  unemployment: {
    label: 'Open unemployment',
    unit: '% of labour force, August',
    source: 'BPS, August labour force survey',
    points: [
      [2019, 5.23], [2020, 7.07], [2021, 6.49], [2022, 5.86], [2023, 5.32], [2024, 4.91],
    ],
  },
  inflation: {
    label: 'Inflation',
    unit: '% a year, December',
    source: 'BPS, consumer price index',
    points: [
      [2019, 2.72], [2020, 1.68], [2021, 1.87], [2022, 5.51], [2023, 2.61], [2024, 1.57],
    ],
  },
};

// The five largest shares of 2024 GDP by industry, percent; the remainder is
// every other industry combined.
export const GDP_SECTORS_2024 = [
  { sector: 'Manufacturing', share: 18.98 },
  { sector: 'Wholesale & retail trade', share: 13.11 },
  { sector: 'Agriculture, forestry & fishing', share: 12.61 },
  { sector: 'Construction', share: 10.43 },
  { sector: 'Mining & quarrying', share: 8.97 },
  { sector: 'All other industries', share: 35.90 },
];

export const ECONOMY_FACTS = {
  gdpPerCapitaRupiah: 'Rp 78.6 million',
  gdpPerCapitaUsd: 'about US$4,960',
  exportsUsd: 'US$264.7 billion',
  importsUsd: 'US$233.7 billion',
  tradeSurplusUsd: 'US$31.0 billion',
  hdi: '74.4',
};

// Land and nature figures.
export const LAND_FACTS = {
  coastlineKm: '108,000 km',
  highestPoint: 'Puncak Jaya, 4,884 m',
  largestLake: 'Lake Toba, about 1,130 km²',
  longestRiver: 'Kapuas River, 1,143 km',
  activeVolcanoes: 127,
  forestMillionHa: 95.9,
  forestSharePercent: 51,
  ethnicGroups: 1340,
  languages: 718,
  touristArrivals2024: '13.9 million',
};

// The ten most populous provinces, BPS mid-2024 estimates, millions.
export const LARGEST_PROVINCES_2024 = [
  { province: 'West Java', people: 50.3 },
  { province: 'East Java', people: 41.8 },
  { province: 'Central Java', people: 38.2 },
  { province: 'North Sumatra', people: 15.6 },
  { province: 'Banten', people: 12.4 },
  { province: 'Jakarta', people: 10.6 },
  { province: 'South Sulawesi', people: 9.5 },
  { province: 'Lampung', people: 9.4 },
  { province: 'South Sumatra', people: 8.8 },
  { province: 'Riau', people: 6.7 },
];

// All 38 provinces with their capitals, grouped by island region.
export const PROVINCES = [
  { name: 'Aceh', capital: 'Banda Aceh', region: 'Sumatra' },
  { name: 'North Sumatra', capital: 'Medan', region: 'Sumatra' },
  { name: 'West Sumatra', capital: 'Padang', region: 'Sumatra' },
  { name: 'Riau', capital: 'Pekanbaru', region: 'Sumatra' },
  { name: 'Riau Islands', capital: 'Tanjungpinang', region: 'Sumatra' },
  { name: 'Jambi', capital: 'Jambi', region: 'Sumatra' },
  { name: 'South Sumatra', capital: 'Palembang', region: 'Sumatra' },
  { name: 'Bangka Belitung Islands', capital: 'Pangkalpinang', region: 'Sumatra' },
  { name: 'Bengkulu', capital: 'Bengkulu', region: 'Sumatra' },
  { name: 'Lampung', capital: 'Bandar Lampung', region: 'Sumatra' },
  { name: 'Banten', capital: 'Serang', region: 'Java' },
  { name: 'Jakarta', capital: 'Jakarta', region: 'Java' },
  { name: 'West Java', capital: 'Bandung', region: 'Java' },
  { name: 'Central Java', capital: 'Semarang', region: 'Java' },
  { name: 'Yogyakarta', capital: 'Yogyakarta', region: 'Java' },
  { name: 'East Java', capital: 'Surabaya', region: 'Java' },
  { name: 'West Kalimantan', capital: 'Pontianak', region: 'Kalimantan' },
  { name: 'Central Kalimantan', capital: 'Palangka Raya', region: 'Kalimantan' },
  { name: 'South Kalimantan', capital: 'Banjarbaru', region: 'Kalimantan' },
  { name: 'East Kalimantan', capital: 'Samarinda', region: 'Kalimantan' },
  { name: 'North Kalimantan', capital: 'Tanjung Selor', region: 'Kalimantan' },
  { name: 'Bali', capital: 'Denpasar', region: 'Bali & Nusa Tenggara' },
  { name: 'West Nusa Tenggara', capital: 'Mataram', region: 'Bali & Nusa Tenggara' },
  { name: 'East Nusa Tenggara', capital: 'Kupang', region: 'Bali & Nusa Tenggara' },
  { name: 'North Sulawesi', capital: 'Manado', region: 'Sulawesi' },
  { name: 'Gorontalo', capital: 'Gorontalo', region: 'Sulawesi' },
  { name: 'Central Sulawesi', capital: 'Palu', region: 'Sulawesi' },
  { name: 'West Sulawesi', capital: 'Mamuju', region: 'Sulawesi' },
  { name: 'South Sulawesi', capital: 'Makassar', region: 'Sulawesi' },
  { name: 'Southeast Sulawesi', capital: 'Kendari', region: 'Sulawesi' },
  { name: 'Maluku', capital: 'Ambon', region: 'Maluku' },
  { name: 'North Maluku', capital: 'Sofifi', region: 'Maluku' },
  { name: 'Papua', capital: 'Jayapura', region: 'Papua' },
  { name: 'Central Papua', capital: 'Nabire', region: 'Papua' },
  { name: 'Highland Papua', capital: 'Wamena', region: 'Papua' },
  { name: 'South Papua', capital: 'Merauke', region: 'Papua' },
  { name: 'West Papua', capital: 'Manokwari', region: 'Papua' },
  { name: 'Southwest Papua', capital: 'Sorong', region: 'Papua' },
];
