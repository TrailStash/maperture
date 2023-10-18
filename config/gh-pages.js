const mapboxGlAccessToken =
  'pk.eyJ1IjoiZHNjaGVwIiwiYSI6ImNsbnV6c2E2czBidmwyaXQ5cjNueGZlN2wifQ.Jw3qF_Dy3DPogIz3_iJU9Q';

const stylePresets = [
  {
    id: 'trailstash-liberty',
    name: 'TrailStash Liberty',
    type: 'maplibre-gl',
    url: 'https://trailstash.gitlab.io/liberty/style.json',
  },
  {
    id: 'omt-osm',
    name: 'OpenMapTiles OSM',
    type: 'maplibre-gl',
    url: 'https://trailstash.gitlab.io/openmaptiles-style/style.json',
  },
  {
    id: 'mapbox-streets',
    name: 'Mapbox Streets',
    type: 'mapbox-gl',
    url: 'mapbox://styles/mapbox/streets-v11',
  },
  {
    id: 'mapbox-outdoors',
    name: 'Mapbox Outdoors',
    type: 'mapbox-gl',
    url: 'mapbox://styles/mapbox/outdoors-v11',
  },
  {
    id: 'mapbox-light',
    name: 'Mapbox Light',
    type: 'mapbox-gl',
    url: 'mapbox://styles/mapbox/light-v10',
  },
  {
    id: 'mapbox-dark',
    name: 'Mapbox Dark',
    type: 'mapbox-gl',
    url: 'mapbox://styles/mapbox/dark-v10',
  },
  {
    id: 'openstreetmap',
    name: 'OpenStreetMap',
    type: 'leaflet',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
  {
    id: 'stamen-toner',
    name: 'Stamen Toner',
    type: 'leaflet',
    url: 'https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png',
    attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
  },
  {
    id: 'stamen-toner-lite',
    name: 'Stamen Toner (Lite)',
    type: 'leaflet',
    url: 'https://stamen-tiles.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png',
    attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
  },
  {
    id: 'stamen-toner-hybrid',
    name: 'Stamen Toner (Hybrid)',
    type: 'leaflet',
    url: 'https://stamen-tiles.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}.png',
    attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
  },
  {
    id: 'stamen-toner-labels',
    name: 'Stamen Toner (Labels)',
    type: 'leaflet',
    url: 'https://stamen-tiles.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}.png',
    attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
  },
  {
    id: 'stamen-toner-lines',
    name: 'Stamen Toner (Lines)',
    type: 'leaflet',
    url: 'https://stamen-tiles.a.ssl.fastly.net/toner-lines/{z}/{x}/{y}.png',
    attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
  },
  {
    id: 'stamen-toner-background',
    name: 'Stamen Toner (Background)',
    type: 'leaflet',
    url: 'https://stamen-tiles.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png',
    attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
  },
  {
    id: 'stamen-terrain',
    name: 'Stamen Terrain',
    type: 'leaflet',
    url: 'https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png',
    attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
  },
  {
    id: 'stamen-terrain-labels',
    name: 'Stamen Terrain (Labels)',
    type: 'leaflet',
    url: 'https://stamen-tiles.a.ssl.fastly.net/terrain-labels/{z}/{x}/{y}.png',
    attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
  },
  {
    id: 'stamen-terrain-lines',
    name: 'Stamen Terrain (Lines)',
    type: 'leaflet',
    url: 'https://stamen-tiles.a.ssl.fastly.net/terrain-lines/{z}/{x}/{y}.png',
    attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
  },
  {
    id: 'stamen-terrain-background',
    name: 'Stamen Terrain (Background)',
    type: 'leaflet',
    url: 'https://stamen-tiles.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.png',
    attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
  },
  {
    id: 'stamen-watercolor',
    name: 'Stamen Watercolor',
    type: 'leaflet',
    url: 'https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png',
    attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
  },
];

export { mapboxGlAccessToken, stylePresets };
