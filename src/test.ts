import cococity from './main.ts';

/* init */
const coco = cococity.init({
    dev: !true,
    // fakeLocation: { "latitude": 6.3667, "longitude": 2.4333 }
    fakeLocation: 'ru'
});

/* Tests */

const cap = coco.getCapitalOf({ countries: ['bj', 'bf', 'dz', 'cn'] });

// const ct = coco.getCities().of(['bj']);

const dt = coco.getCountries({ props: ['id', 'fullName', 'iso'], lang: coco.LANG.Ukrainian }).all();
const dk = coco.getCountries().of('africa');

// const cn = coco.getContinents();

const pt = coco.getProperties({ targetType: 'city', props: ['!countryIso', '!latitude', '!longitude'], countryID: 'ru' }).of('moscow');

const pr = coco.getProperties({ targetType: 'country', props: '*' }).of(['mali', 'us', '1']);

const pc = coco.getProperties({ targetType: 'continent', props: '*' }).of('oceaNia');

const py = coco.getProperties({ targetType: 'currency', props: '!id' }).of('xoF');

// const arr = coco.isArray(cn.data);

// const cu = coco.getCurrencies({ props: ['fullName', 'code'] }).of(['us', 'bj', 'bf', 'ag', 'dz', 'is', 'ch', 'jp', 'cn', 'ru']);

// const f = coco.filter({ targetType: 'city', searchValue: 'true', countryID: 'us' }).by('isCapital');

// const fc = coco.filter({ targetType: 'country', searchValue: 'ma' }).fromStart().byDefault();

// const fy = coco.filter({ targetType: 'currency', searchValue: 'g' }).fromStart().byDefault();


// const many = coco.getCapitalOf({ countries: ['bj', 'us', 'russia'] });


const paris = { "latitude": 48.8567, "longitude": 2.3522 };
const london = { "latitude": 51.5072, "longitude": -0.1275 };
const london_ca = { "latitude": 42.9836, "longitude": -81.2497 };

const lz = await coco.localize({ fromCoords: { "latitude": 6.3667, "longitude": 2.4333 } });

// const dz = coco.getDistance(paris, london_ca);

console.log(lz);