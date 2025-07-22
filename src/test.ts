import cococity from './main.ts';

/* init */
const coco = cococity.init({ dev: true, fakeLocation: { "latitude": 6.3667, "longitude": 2.4333 } });

/* Tests */

// const cap = coco.getCapitalOf(['bj', 'bf', 'dz', 'cn', 'bj']);

// const ct = coco.getCities().of(['bj']);

// const dt = coco.getCountries(['id', 'fullName', 'iso']).all();
const dk = coco.getCountries().of('africa');

// const cn = coco.getContinents();

// const pt = coco.getProperties('city', ['!countryIso', '!latitude', '!longitude'], 'ru').of('moscow');

// const pr = coco.getProperties('country', '*').of(['mali', 'us', '1']);

// const pc = coco.getProperties('continent', 'code').of('oc');

// const py = coco.getProperties('currency', '!id').of('xof');

// const arr = coco.isArray(cn.data);

// const cu = coco.getCurrencies(['fullName', 'code']).of(['us', 'bj', 'bf', 'ag', 'dz', 'is', 'ch', 'jp', 'cn', 'ru']);

// const f = coco.filter('city', 'true', 'us').by('isCapital');

// const fc = coco.filter('country', 'ma').fromStart().byDefault();

// const fy = coco.filter('currency', 'g').fromStart().byDefault();





// const many = coco.getCapitalOf(['bj', 'us', 'russia']);



const paris = { "latitude": 48.8567, "longitude": 2.3522 };
const london = { "latitude": 51.5072, "longitude": -0.1275 };
const london_ca = { "latitude": 42.9836, "longitude": -81.2497 };

const lz = await coco.localize();

const dz = coco.getDistance(paris, london_ca);

console.log(lz);