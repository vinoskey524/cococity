import kdTree from 'kd-tree-javascript';
import DatabaseSync from 'better-sqlite3';

type MAIN_TYPE = {
    init: (x?: INIT_ARG_TYPE) => {
        getCapitalOf: (x: { countries: string | string[] }) => GET_CAPITAL_OF_FINAL_RETURN_TYPE,
        getCities: (x?: { props?: GET_CITIES_PROPS_ARG_TYPE }) => GET_CITIES_RETURN_TYPE,
        getCountries: (x?: { props?: GET_COUNTRIES_PROPS_ARG_TYPE, lang?: GET_COUNTRIES_FULLNAME_LANG_TYPE }) => GET_COUNTRIES_RETURN_TYPE,
        getContinents: (x?: { props?: GET_CONTINENTS_PROPS_ARG_TYPE }) => GET_CONTINENTS_FINAL_RETURN_TYPE,
        getCurrencies: (x?: { props?: GET_CURRENCY_PROPS_ARG_TYPE }) => GET_CURRENCY_RETURN_TYPE,
        getProperties: <T extends T4>(x: GET_PROPERTIES_FULL_ARG_TYPE<T>) => GET_PROPERTIES_RETURN_TYPE<T>,
        filter: <T extends T4>(x: FILTER_FULL_ARG_TYPE<T>) => FILTER_RETURN_TYPE<T>,
        localize: (x?: { fromCoords?: COORDS_TYPE, maxDistance?: number }) => Promise<FUNCTION_BASIC_RETURN_TYPE>,
        getDistance: (x: COORDS_TYPE, y: COORDS_TYPE) => GET_DISTANCE_RETURN_TYPE,
        isArray: (x: any) => boolean,
        LANG: LANG_TYPE
    }
};

type T3 = 'continent' | 'country' | 'city';

type T4 = T3 | 'currency';

type INIT_ARG_TYPE = { dev: boolean, fakeLocation?: 'bj' | 'ml' | 'fr' | 'us' | 'ru' | 'cn' | COORDS_TYPE };

type GET_CAPITAL_OF_FINAL_RETURN_TYPE = { ok: boolean, log: string, data: string | undefined };

type CITY_PROPS_LIST_TYPE = 'id' | 'fullName' | 'countryIso' | 'latitude' | 'longitude' | 'isCapital';
type CITY_FULL_PROPS_LIST_TYPE = CITY_PROPS_LIST_TYPE | '!id' | '!fullName' | '!countryIso' | '!latitude' | '!longitude' | '!isCapital';
type GET_CITIES_PROPS_ARG_TYPE = CITY_FULL_PROPS_LIST_TYPE | CITY_FULL_PROPS_LIST_TYPE[] | undefined;
type GET_CITIES_RETURN_TYPE = { of: (x: string | string[]) => GET_CITIES_FINAL_RETURN_TYPE };
type CITY_PROPS_TYPE = { id: string, fullName: string, countryISO: string, latitude: number, longitude: number, isCapital: boolean };
type GET_CITIES_FINAL_RETURN_TYPE = { ok: boolean, log: string, data: CITY_PROPS_TYPE[] | undefined };

type COUNTRY_PROPS_LIST_TYPE = 'id' | 'fullName' | 'dialCode' | 'iso' | 'currencyId' | 'currencyName' | 'currencyCode' | 'continentId' | 'continentCode' | 'continentName' | 'flag' | 'languages';
type COUNTRY_FULL_PROPS_LIST_TYPE = COUNTRY_PROPS_LIST_TYPE | '!id' | '!fullName' | '!dialCode' | '!iso' | '!currencyId' | '!currencyName' | '!currencyCode' | '!continentId' | '!continentCode' | '!continentName' | '!flag' | '!languages';
type GET_COUNTRIES_PROPS_ARG_TYPE = COUNTRY_FULL_PROPS_LIST_TYPE | COUNTRY_FULL_PROPS_LIST_TYPE[] | undefined;
type GET_COUNTRIES_FULLNAME_LANG_TYPE = 'native' | 'ar' | 'bg' | 'cs' | 'da' | 'de' | 'el' | 'en' | 'eo' | 'es' | 'et' | 'eu' | 'fi' | 'fr' | 'hr' | 'hu' | 'hy'
    | 'it' | 'ja' | 'ko' | 'lt' | 'nl' | 'no' | 'pl' | 'pt' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr' | 'sv' | 'th' | 'uk' | 'zh' | 'zh-tw';
type GET_COUNTRIES_RETURN_TYPE = {
    all: () => GET_COUNTRIES_FINAL_RETURN_TYPE,
    of: (x: CONTINENTS_NAME_TYPE) => GET_COUNTRIES_FINAL_RETURN_TYPE
};
type COUNTRY_PROPS_TYPE = { id: string, flag: string, fullName: string, dialCode: number, iso: [string, string], languages: string[], currencyId: string | null, currencyName: string | null, currencyCode: string, continentId: string, continentCode: string, continentName: string };
type GET_COUNTRIES_FINAL_RETURN_TYPE = { ok: boolean, log: string, data: COUNTRY_PROPS_TYPE[] | undefined };

type CONTINENT_PROPS_LIST_TYPE = 'id' | 'fullName' | 'code';
type CONTINENT_FULL_PROPS_LIST_TYPE = CONTINENT_PROPS_LIST_TYPE | '!id' | '!fullName' | '!code';
type CONTINENT_PROPS_TYPE = { id: string, fullName: string, code: string };
type GET_CONTINENTS_FINAL_RETURN_TYPE = { ok: boolean, log: string, data: CONTINENT_PROPS_TYPE[] | undefined };
type GET_CONTINENTS_PROPS_ARG_TYPE = CONTINENT_FULL_PROPS_LIST_TYPE | CONTINENT_FULL_PROPS_LIST_TYPE[] | undefined;

type CURRENCY_PROPS_LIST_TYPE = 'id' | 'fullName' | 'code';
type CURRENCY_FULL_PROPS_LIST_TYPE = CURRENCY_PROPS_LIST_TYPE | '!id' | '!fullName' | '!code';
type CURRENCY_PROPS_TYPE = { id: string, fullName: string, code: string };
type GET_CURRENCY_PROPS_ARG_TYPE = CURRENCY_FULL_PROPS_LIST_TYPE | CURRENCY_FULL_PROPS_LIST_TYPE[] | undefined;
type GET_CURRENCY_RETURN_TYPE = {
    all: () => GET_CURRENCY_FINAL_RETURN_TYPE,
    of: (x: string | string[]) => GET_CURRENCY_FINAL_RETURN_TYPE
};
type GET_CURRENCY_FINAL_RETURN_TYPE = { ok: boolean, log: string, data: CURRENCY_PROPS_TYPE | CURRENCY_PROPS_TYPE[] | undefined };

type GET_PROPERTIES_FULL_ARG_TYPE<T> = T extends 'city' ? { targetType: T, props: GET_PROPERTIES_Y_ARG_TYPE<T>, countryID: string } : { targetType: T, props: GET_PROPERTIES_Y_ARG_TYPE<T> };
type GET_PROPERTIES_Y_ARG_TYPE<T> = T extends 'city' ? '*' | CITY_FULL_PROPS_LIST_TYPE | CITY_FULL_PROPS_LIST_TYPE[]
    : T extends 'country' ? '*' | COUNTRY_FULL_PROPS_LIST_TYPE | COUNTRY_FULL_PROPS_LIST_TYPE[]
    : T extends 'continent' ? '*' | CONTINENT_FULL_PROPS_LIST_TYPE | CONTINENT_FULL_PROPS_LIST_TYPE[]
    : T extends 'currency' ? '*' | CURRENCY_FULL_PROPS_LIST_TYPE | CURRENCY_FULL_PROPS_LIST_TYPE[] : any;
type GET_PROPERTIES_RETURN_TYPE<T> = { of: (x: string | string[]) => GET_PROPERTIES_FINAL_RETURN_TYPE<T> };
type GET_PROPERTIES_OF_RETURN_TYPE<T> = T extends 'city' ? { ok: boolean, log: string, data: Partial<CITY_PROPS_TYPE> | Partial<CITY_PROPS_TYPE>[] | undefined }
    : T extends 'country' ? { ok: boolean, log: string, data: Partial<COUNTRY_PROPS_TYPE> | Partial<COUNTRY_PROPS_TYPE>[] | undefined }
    : T extends 'continent' ? { ok: boolean, log: string, data: Partial<CONTINENT_PROPS_TYPE> | Partial<CONTINENT_PROPS_TYPE>[] | undefined }
    : T extends 'currency' ? { ok: boolean, log: string, data: Partial<CURRENCY_PROPS_TYPE> | Partial<CURRENCY_PROPS_TYPE>[] | undefined } : any;
type GET_PROPERTIES_FINAL_RETURN_TYPE<T> = { ok: boolean, log: string, data: { [key: string]: GET_PROPERTIES_OF_RETURN_TYPE<T> | undefined } };

type FILTER_FULL_ARG_TYPE<T> = T extends 'city' ? { targetType: T, searchValue: string, countryID: string } : { targetType: T, searchValue: string };
type FILTER_BY_ARG_TYPE<T> = T extends 'city' ? CITY_PROPS_LIST_TYPE | CITY_PROPS_LIST_TYPE[]
    : T extends 'country' ? COUNTRY_PROPS_LIST_TYPE | COUNTRY_PROPS_LIST_TYPE[]
    : T extends 'continent' ? CONTINENT_PROPS_LIST_TYPE | CONTINENT_PROPS_LIST_TYPE[]
    : T extends 'currency' ? CURRENCY_PROPS_LIST_TYPE | CURRENCY_PROPS_LIST_TYPE[] : any;
type FILTER_RETURN_TYPE<T> = {
    fromStart: () => {
        byDefault: () => FILTER_FINAL_RETURN_TYPE<T>,
        by: (x: FILTER_BY_ARG_TYPE<T>) => FILTER_FINAL_RETURN_TYPE<T>
    },
    byDefault: () => FILTER_FINAL_RETURN_TYPE<T>,
    by: (x: FILTER_BY_ARG_TYPE<T>) => FILTER_FINAL_RETURN_TYPE<T>
};
type FILTER_FINAL_RETURN_TYPE<T> = { ok: boolean, log: string, data: FILTER_FINAL_DATA_TYPE<T> | undefined };
type FILTER_FINAL_DATA_TYPE<T> = T extends 'city' ? Partial<CITY_PROPS_TYPE>[]
    : T extends 'country' ? Partial<COUNTRY_PROPS_TYPE>[]
    : T extends 'continent' ? Partial<CONTINENT_PROPS_TYPE>[]
    : T extends 'currency' ? Partial<CURRENCY_PROPS_TYPE>[] : any;

type CONTINENTS_NAME_TYPE = 'africa' | 'asia' | 'america' | 'north_america' | 'south_america' | 'europe' | 'oceania';

type COORDS_TYPE = { latitude: number, longitude: number };

type GET_DISTANCE_RETURN_TYPE = [number, string, string];

type JSON_BASIC_TYPE = { [key: string]: any };

type FUNCTION_BASIC_RETURN_TYPE = { ok: boolean, log: string, data: any };

type LANG_TYPE = {
    "Default": 'en',
    "Arabic": 'ar',
    "Bulgarian": 'bg',
    "Czech": 'cs',
    "Danish": 'da',
    "German": 'de',
    "Greek": 'el',
    "English": 'en',
    "Esperanto": 'eo',
    "Spanish": 'es',
    "Estonian": 'et',
    "Basque": 'eu',
    "Finnish": 'fi',
    "French": 'fr',
    "Croatian": 'hr',
    "Hungarian": 'hu',
    "Armenian": 'hy',
    "Italian": 'it',
    "Japanese": 'ja',
    "Korean": 'ko',
    "Lithuanian": 'lt',
    "Dutch": 'nl',
    "Norwegian": 'no',
    "Polish": 'pl',
    "Portuguese": 'pt',
    "Romanian": 'ro',
    "Russian": 'ru',
    "Slovak": 'sk',
    "Slovenian": 'sl',
    "Serbian": 'sr',
    "Swedish": 'sv',
    "Thai": 'th',
    "Ukrainian": 'uk',
    "Chinese": 'zh',
    "Chinese_Simplified": 'zh-tw'
};

/* 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
*/

/* ------------------------------------------------ Constants ------------------------------------------------ */

const _dev_ = { current: false };
const _earth_radius_ = 6371;
const _min_distance_ = 100; // In meter
const _max_distance_ = 10_000; // In meter
const _fake_coord_: { current: { latitude: number, longitude: number } } = { current: { latitude: 6.384018889999998, longitude: 2.318750379999999 } }; // Benin
const _lang_ = ['ar', 'bg', 'cs', 'da', 'de', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fi', 'fr', 'hr', 'hu', 'hy', 'it', 'ja', 'ko', 'lt', 'nl', 'no', 'pl', 'pt', 'ro', 'ru', 'sk', 'sl', 'sr', 'sv', 'th', 'uk', 'zh', 'zh-tw'];
const _lang_data_: any = {
    "Default": 'en',
    "Arabic": 'ar',
    "Bulgarian": 'bg',
    "Czech": 'cs',
    "Danish": 'da',
    "German": 'de',
    "Greek": 'el',
    "English": 'en',
    "Esperanto": 'eo',
    "Spanish": 'es',
    "Estonian": 'et',
    "Basque": 'eu',
    "Finnish": 'fi',
    "French": 'fr',
    "Croatian": 'hr',
    "Hungarian": 'hu',
    "Armenian": 'hy',
    "Italian": 'it',
    "Japanese": 'ja',
    "Korean": 'ko',
    "Lithuanian": 'lt',
    "Dutch": 'nl',
    "Norwegian": 'no',
    "Polish": 'pl',
    "Portuguese": 'pt',
    "Romanian": 'ro',
    "Russian": 'ru',
    "Slovak": 'sk',
    "Slovenian": 'sl',
    "Serbian": 'sr',
    "Swedish": 'sv',
    "Thai": 'th',
    "Ukrainian": 'uk',
    "Chinese": 'zh',
    "Chinese_Simplified": 'zh-tw'
};

/* 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
*/

/* ------------------------------------------------ DATA ------------------------------------------------ */

const db = new DatabaseSync('cocobase.sqlite');
const cocobase: any = db.prepare(`select * from data`).all();
const extractFunc = (type: string) => JSON.parse(cocobase.filter((e: any) => e.type === type)[0].data);

const cityDATA = extractFunc('cityDATA') as any[];
const countryDATA = extractFunc('countryDATA') as any[];
const continentDATA = extractFunc('continentDATA') as any[];
const currencyDATA = extractFunc('currencyDATA') as any[];
const countryLanguageDATA = extractFunc('countryLanguageDATA') as any[];
const countryNativeNameDATA = extractFunc('countryNativeNameDATA') as any[];
const flagsDATA = extractFunc('flagsDATA');
const languageDATA = extractFunc('languageDATA') as any[];
const mergedCityDATA = extractFunc('mergedCityDATA') as any[];

/*
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
*/

/* ------------------------------------------------ Methods ------------------------------------------------ */

/** Clone object */
const cloneObjFunc = (x: { obj: any }): any => {
    try {
        const tp: boolean = (typeof x.obj === 'object' && x.obj !== null) ? true : false;
        const obj = x.obj;

        /* Return cloned object */
        if (tp) return structuredClone(obj);

        /* If "obj" is not an object */
        return Array.isArray(x.obj) ? [] : {};

    } catch (e: any) {
        plog('Clonning failed ::', e.message);
        return { ok: false, log: e.message, data: undefined };
    }
};

/*
*
*
*
*
*
*
*/

/** Extract props */
const extractPropsFunc = (data: any[], props: any): any[] => {
    const fdata = Array.isArray(data) ? data : [data];
    const pp: string[] = (typeof props === 'string') ? [props] : props;
    const inc = pp.filter((e: string) => !e.includes('!'));
    const exc = pp.filter((e: string) => e.includes('!'));
    const fpp = [...inc, ...exc];
    const tab: any[] = [];
    for (let c = 0; c < fdata.length; c++) {
        let currentCity = fdata[c];
        let collector: any = (inc.length === 0) ? currentCity : {};
        for (let i = 0; i < fpp.length; i++) {
            let currentProp = fpp[i];
            if (currentProp.includes('!')) {
                const mp = currentProp.replace('!', '');
                delete collector[mp];
            }
            else collector[currentProp] = currentCity[currentProp];
        }
        tab.push(collector);
    }
    return tab;
};

/** Extract nearest */
const extractNearestFunc = (x: any[], userCoords: any) => {
    const data = x.sort((a, b) => a[1] - b[1]);
    const city = data[0][0];
    const iso: string = city.countryIso;
    const country: any = getPropertiesFunc('country', '*', undefined, [iso]).data;

    let fulldata: any = country[iso];
    /* country */
    fulldata['countryId'] = fulldata['id'];
    fulldata['countryName'] = fulldata['fullName'];
    fulldata['countryDialCode'] = fulldata['dialCode'];
    fulldata['countryIso'] = (fulldata['iso'][0] as string).toLowerCase();
    fulldata['countryFullIso'] = fulldata['iso'];
    /* country extra */
    const extra = getCountryExtraDataFunc(iso);
    fulldata['countryFlag'] = extra['flag'];
    fulldata['countryLanguages'] = extra['languages'];
    /* city */
    fulldata['cityId'] = city['id'];
    fulldata['cityName'] = city['fullName'];
    fulldata['cityLatitude'] = city['latitude'];
    fulldata['cityLongitude'] = city['longitude'];
    fulldata['cityIsCapital'] = city['isCapital'];
    /* user */
    fulldata['userLatitude'] = userCoords['latitude'];
    fulldata['userLongitude'] = userCoords['longitude'];
    /* capital */
    if (city.isCapital) fulldata['distanceFromCapital'] = [0, '0km', '0m'];
    else {
        const cap: any = getCapitalFunc([iso]).data!;
        const cdata = cap[iso];
        fulldata['capitalId'] = cdata['id'];
        fulldata['capitalName'] = cdata['fullName'];
        fulldata['capitalLatitude'] = cdata['latitude'];
        fulldata['capitalLongitude'] = cdata['longitude'];
        fulldata['distanceFromCapital'] = getDistanceFunc(userCoords, cdata);
    }
    /* deletion */
    delete fulldata['id'];
    delete fulldata['fullName'];
    delete fulldata['dialCode'];
    delete fulldata['iso'];

    /* return */
    return fulldata;
};

/*
*
*
*
*
*
*
*/

/** Filter */
const filterFunc = <T extends T4>(targetType: T, value: string | number, fromStart: boolean, countryID: string | undefined, filterProps: FILTER_BY_ARG_TYPE<T>[]): FILTER_FINAL_RETURN_TYPE<T> => {
    let res: FILTER_FINAL_RETURN_TYPE<T> = { ok: true, log: '', data: undefined };
    try {
        switch (targetType) {
            case 'city': {
                const clonedData = cloneObjFunc({ obj: cityDATA });
                let cid = countryID!.toLowerCase(); /* Can be country "id" or "iso" */
                let cdata: any = clonedData.filter((e: any) => [e.countryId, (e.countryIsoId).toLowerCase()].includes(cid));

                /* If country not found */
                if (cdata.length === 0) {
                    res.ok = false;
                    res.log = res.log + `\nNo country found for "${countryID}"`;
                    return res;
                }

                /* - */
                const cities: any[] = cdata[0].cities;
                let val = String(value).toLowerCase();
                const fdata: any = cities.filter((e: any) => {
                    for (let f = 0; f < filterProps.length; f++) {
                        const cprop = filterProps[f];
                        const cval = String(e[cprop]).toLocaleLowerCase();
                        if (cval.includes(val)) return fromStart ? (cval.indexOf(val) === 0 ? true : false) : true;
                    }
                    return false;
                });
                res.data = fdata;
            } break;

            case 'country': {
                const clonedData = cloneObjFunc({ obj: countryDATA });
                let val = String(value).toLowerCase();
                const fdata: any = clonedData.filter((e: any) => {
                    for (let f = 0; f < filterProps.length; f++) {
                        const cprop = filterProps[f];
                        const cval = String(e[cprop]).toLocaleLowerCase();
                        if (cval.includes(val)) return fromStart ? (cval.indexOf(val) === 0 ? true : false) : true;
                    }
                    return false;
                });
                res.data = fdata;
            } break;

            case 'continent': {
                const clonedData = cloneObjFunc({ obj: continentDATA });
                let val = String(value).toLowerCase();
                const fdata: any = clonedData.filter((e: any) => {
                    for (let f = 0; f < filterProps.length; f++) {
                        const cprop = filterProps[f];
                        const cval = String(e[cprop]).toLocaleLowerCase();
                        if (cval.includes(val)) return fromStart ? (cval.indexOf(val) === 0 ? true : false) : true;
                    }
                    return false;
                });
                res.data = fdata;
            } break;

            case 'currency': {
                const clonedData = cloneObjFunc({ obj: currencyDATA });
                let val = String(value).toLowerCase();
                const fdata: any = clonedData.filter((e: any) => {
                    for (let f = 0; f < filterProps.length; f++) {
                        const cprop = filterProps[f];
                        const cval = String(e[cprop]).toLocaleLowerCase();
                        if (cval.includes(val)) return fromStart ? (cval.indexOf(val) === 0 ? true : false) : true;
                    }
                    return false;
                });
                res.data = fdata;
            } break;

            default: { };
        };

    } catch (e: any) { res.ok = false; res.log = e.message };
    return res;
};

/*
*
*
*
*
*
*
*/

/** Get country extra data (languages, flag) */
const getCountryExtraDataFunc = (countryIso: string): { flag: string, languages: string[] } => {
    const iso = countryIso.toUpperCase();
    const isow = countryIso.toLowerCase();
    const fg = flagsDATA[isow];
    const lg = countryLanguageDATA.filter((e: any) => e.iso === iso)[0] || { languages: [] };
    return { flag: fg, languages: lg['languages'] };
};

/** Get capital */
const getCapitalFunc = (countriesID: string[]): GET_CAPITAL_OF_FINAL_RETURN_TYPE => {
    let res: GET_CAPITAL_OF_FINAL_RETURN_TYPE = { ok: true, log: '', data: undefined };
    try {
        const clonedData = cloneObjFunc({ obj: cityDATA });
        let collector: any = {};
        for (let i = 0; i < countriesID.length; i++) {
            let countryID = countriesID[i]; /* Can be country "id" or "iso" */
            let cid = countryID.toLowerCase();
            let cdata: any = clonedData.filter((e: any) => [e.countryId, (e.countryIsoId).toLowerCase()].includes(cid));

            /* If country not found */
            if (cdata.length === 0) {
                collector[countryID] = undefined;
                res.log = res.log + `\nNo country found for "${countryID}"`;
                continue;
            }

            /* Extract capital */
            const cities: any[] = cdata[0].cities;
            const capital = cities.filter((e: any) => e.isCapital === true)[0];
            collector[countryID] = capital;
        }
        res.data = collector;

    } catch (e: any) { res.ok = false; res.log = e.message };
    return res;
};

/** Get cities */
const getCitiesFunc = (props: GET_CITIES_PROPS_ARG_TYPE, countriesID: string[]): GET_CITIES_FINAL_RETURN_TYPE => {
    let res: GET_CITIES_FINAL_RETURN_TYPE = { ok: true, log: '', data: undefined };
    try {
        const clonedData = cloneObjFunc({ obj: cityDATA });
        let collector: any = {};
        for (let i = 0; i < countriesID.length; i++) {
            let countryID = countriesID[i];
            let cid = countryID.toLowerCase(); /* Can be country "id" or "iso" */
            let cdata: any = clonedData.filter((e: any) => [e.countryId, (e.countryIsoId).toLowerCase()].includes(cid));

            /* If country not found */
            if (cdata.length === 0) {
                collector[countryID] = undefined;
                res.log = res.log + `\nNo country found for "${countryID}"`;
                continue;
            }

            /* - */
            const cities: any[] = cdata[0].cities;
            collector[countryID] = (props === undefined) ? cities : extractPropsFunc(cities, props);
        }
        res.data = collector;
    } catch (e: any) { res.ok = false; res.log = e.message };
    return res;
};

/** Get countries */
const getCountriesFunc = (props: GET_COUNTRIES_PROPS_ARG_TYPE, continentName: CONTINENTS_NAME_TYPE | undefined, lang: GET_COUNTRIES_FULLNAME_LANG_TYPE | undefined): GET_COUNTRIES_FINAL_RETURN_TYPE => {
    let res: GET_COUNTRIES_FINAL_RETURN_TYPE = { ok: true, log: '', data: undefined };
    try {
        const countries = cloneObjFunc({ obj: countryDATA });
        let cdata: any[] = [];
        if (continentName === undefined) cdata = (props === undefined) ? countries : extractPropsFunc(countries, props);
        else {
            const continentID = continentName;
            const fcountries = countries.filter((e: any) => (continentID === 'america') ? (e.continentId)?.includes(continentID) : e.continentId === continentID);
            cdata = (props === undefined) ? fcountries : extractPropsFunc(fcountries, props);
        }

        /* get extra */
        const gfg = (props === undefined || props?.includes('flag')) ? true : false;
        const glg = (props === undefined || props?.includes('languages')) ? true : false;
        if (gfg || glg) for (let c = 0; c < cdata.length; c++) {
            const ctarg = cdata[c];
            const iso = ctarg.iso[0] || undefined;
            if (iso === undefined) continue;
            const xtr = getCountryExtraDataFunc(iso);
            if (gfg) ctarg['flag'] = xtr['flag'];
            if (glg) ctarg['languages'] = xtr['languages'];
        }

        /* lang */
        if (lang && cdata.length > 0) {
            for (let i = 0; i < cdata.length; i++) {
                const target = cdata[i];
                const iso = (target.iso[0] as string).toLowerCase();

                const names = countryNativeNameDATA.filter((e) => e.alpha2 === iso)[0] || undefined;
                if (!names) continue;

                cdata[i].fullName = names[lang];
            }
        }

        /* - */
        res.data = cdata;

    } catch (e: any) { res.ok = false; res.log = e.message };
    return res;
};

/** Get continents */
const getContinentsFunc = (props: GET_CONTINENTS_PROPS_ARG_TYPE): GET_CONTINENTS_FINAL_RETURN_TYPE => {
    let res: GET_CONTINENTS_FINAL_RETURN_TYPE = { ok: true, log: '', data: undefined };
    try {
        const continents = cloneObjFunc({ obj: continentDATA });
        res.data = (props === undefined) ? continents : extractPropsFunc(continents, props);
    } catch (e: any) { res.ok = false; res.log = e.message };
    return res;
};

/** Get currencies */
const getCurrenciesFunc = (props: GET_CURRENCY_PROPS_ARG_TYPE, countriesID: string[] | undefined): GET_CURRENCY_FINAL_RETURN_TYPE => {
    let res: GET_CURRENCY_FINAL_RETURN_TYPE = { ok: true, log: '', data: undefined };
    try {
        if (countriesID === undefined) {
            const currencies = cloneObjFunc({ obj: currencyDATA });
            res.data = (props === undefined) ? currencies : extractPropsFunc(currencies, props);
        } else {
            const countries: any[] = cloneObjFunc({ obj: countryDATA });
            let collector: any[] = [];
            for (let i = 0; i < countriesID.length; i++) {
                const countryID = countriesID[i];
                const cid = countryID.toLowerCase();
                const country = countries.filter((e: any) => [e.id, e.fullName, String(e.dialCode), (e.iso[0]).toLowerCase(), (e.iso[1]).toLowerCase()].includes(cid));
                let coll: any = {};

                /* If country not found */
                if (country.length === 0) {
                    coll[countryID] = undefined;
                    res.log = res.log + `\nNo country matches "${countryID}".`;
                    collector.push(coll);
                    continue; /* Jump to next target */
                }

                /* - */
                const cdata = country[0];
                const ecudata = [{ id: cdata.currencyId, fullName: cdata.currencyName, code: cdata.currencyCode }];
                const fcudata = (props === undefined) ? ecudata : extractPropsFunc(ecudata, props);
                coll[countryID] = fcudata[0];
                collector.push(coll);
            }
            res.data = collector;
        }
    } catch (e: any) { res.ok = false; res.log = e.message };
    return res;
};

/** Get properties */
const getPropertiesFunc = <T extends T4>(targetType: T, props: GET_PROPERTIES_Y_ARG_TYPE<T>, countryID: string | undefined, targets: string[]): GET_PROPERTIES_FINAL_RETURN_TYPE<T> => {
    let res: GET_PROPERTIES_FINAL_RETURN_TYPE<T> = { ok: true, log: '', data: {} };
    try {
        let collector: any = {};
        switch (targetType) {
            case 'city': {
                const clonedData = cloneObjFunc({ obj: cityDATA });
                let cid = countryID!.toLowerCase(); /* Can be country "id" or "iso" */
                let cdata: any = clonedData.filter((e: any) => [e.countryId, (e.countryIsoId).toLowerCase()].includes(cid));

                /* If country not found */
                if (cdata.length === 0) {
                    res.ok = false;
                    res.log = res.log + `\nNo country found for "${countryID}"`;
                    return res;
                }

                /* - */
                const cities: any[] = cdata[0].cities;
                for (let i = 0; i < targets.length; i++) {
                    let cityID = targets[i]; /* Can be city "id" or "fullName" */
                    let ciid = cityID.toLowerCase();
                    let city = cities.filter((e: any) => [e.id, (e.fullName)].includes(ciid));

                    /* If city not found */
                    if (city.length === 0) {
                        collector[cityID] = undefined;
                        res.log = res.log + `\nNo city found for "${cityID}"`;
                        continue;
                    }

                    /* - */
                    const fdata = (props === '*') ? [city] : extractPropsFunc(city, props);
                    collector[cityID] = fdata[0];
                }
                res.data = collector;
            } break;

            case 'country': {
                const clonedData = cloneObjFunc({ obj: countryDATA });
                for (let i = 0; i < targets.length; i++) {
                    let countryID = targets[i];
                    let cid = countryID.toLowerCase(); /* Can be country "id", "fullName", "dialCode" or "iso" */
                    let cdata: any[] = clonedData.filter((e: any) => [e.id, e.fullName, String(e.dialCode), (e.iso[0]).toLowerCase(), (e.iso[1]).toLowerCase()].includes(cid));

                    /* If country not found */
                    if (cdata.length === 0) {
                        collector[countryID] = undefined;
                        res.log = res.log + `\nNo country found for "${countryID}".`;
                        continue;
                    }

                    /* - */
                    const clen = cdata.length;
                    collector[countryID] = [];
                    for (let d = 0; d < clen; d++) {
                        let edata = cdata[d];
                        let fdata = (props === '*') ? [edata] : extractPropsFunc(edata, props);
                        clen > 1 ? collector[countryID].push(...fdata) : collector[countryID] = fdata[0];
                    }
                }
                res.data = collector;
            } break;

            case 'continent': {
                const clonedData = cloneObjFunc({ obj: continentDATA });
                for (let i = 0; i < targets.length; i++) {
                    let continentID = targets[i];
                    let cid = continentID.toLowerCase(); /* Can be continent "id", "fullName" or "code" */
                    let cdata: any[] = clonedData.filter((e: any) => [e.id, (e.fullName).toLowerCase(), (e.code).toLowerCase()].includes(cid));

                    /* If continent not found */
                    if (cdata.length === 0) {
                        collector[continentID] = undefined;
                        res.log = res.log + `\nNo continent found for "${continentID}".`;
                        continue;
                    }

                    /* - */
                    const clen = cdata.length;
                    collector[continentID] = [];
                    for (let d = 0; d < clen; d++) {
                        let edata = cdata[d];
                        let fdata = (props === '*') ? [edata] : extractPropsFunc(edata, props);
                        clen > 1 ? collector[continentID].push(...fdata) : collector[continentID] = fdata[0];
                    }
                }
                res.data = collector;
            } break;

            case 'currency': {
                const clonedData = cloneObjFunc({ obj: currencyDATA });
                for (let i = 0; i < targets.length; i++) {
                    let currencyID = targets[i];
                    let cid = currencyID.toLowerCase();
                    let cdata: any[] = clonedData.filter((e: any) => [e.id, (e.fullName).toLowerCase(), (e.code).toLowerCase()].includes(cid));

                    /* If continent not found */
                    if (cdata.length === 0) {
                        collector[currencyID] = undefined;
                        res.log = res.log + `\nNo currency found for "${currencyID}".`;
                        continue;
                    }

                    /* - */
                    const clen = cdata.length;
                    collector[currencyID] = [];
                    for (let d = 0; d < clen; d++) {
                        let edata = cdata[d];
                        let fdata = (props === '*') ? [edata] : extractPropsFunc(edata, props);
                        clen > 1 ? collector[currencyID].push(...fdata) : collector[currencyID] = fdata[0];
                    }
                }
                res.data = collector;
            } break;

            default: { };
        };
    } catch (e: any) { res.ok = false; res.log = e.message };
    return res;
};

/** Get location */
const getLocationFunc = async (): Promise<any> => {
    const nav: any = navigator;
    const prom = new Promise((res, rej) => {
        if (!nav.geolocation) rej(new Error(`Geolocation not available !`));
        else nav.geolocation.getCurrentPosition(res, rej);
    });
    return prom;
};

/** Get coordinates */
const getCoordsFunc = async (): Promise<FUNCTION_BASIC_RETURN_TYPE> => {
    let res: FUNCTION_BASIC_RETURN_TYPE = { ok: true, log: '', data: undefined };
    try {
        /* dev coords */
        if (_dev_.current) { res.data = _fake_coord_.current; return res }

        /* prod coords */
        res.data = await getLocationFunc()
            .then((pos: any) => { return { latitude: pos.coords.latitude, longitude: pos.coords.longitude } })
            .catch((e: any) => { return e.message });
    } catch (e: any) { res.ok = false; res.log = e.message }
    return res;
};

/** Get radius */
const getRadiusFunc = (deg: number): number => { return (deg * (Math.PI / 180)) };

/** Get distance */
const getDistanceFunc = (x: COORDS_TYPE, y: COORDS_TYPE): GET_DISTANCE_RETURN_TYPE => {
    const dlat = getRadiusFunc(y.latitude - x.latitude);
    const dlon = getRadiusFunc(y.longitude - x.longitude);

    const latrx = getRadiusFunc(x.latitude);
    const latry = getRadiusFunc(y.latitude);

    const a = (Math.sin(dlat / 2) ** 2) + (Math.cos(latrx) * Math.cos(latry) * (Math.sin(dlon / 2) ** 2));
    const b = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const c = _earth_radius_ * b;

    return [c, `${Number(c.toFixed(2)).toLocaleString('en-US')}Km`, `${Number((c * 1000).toFixed(0)).toLocaleString('en-US')}m`];
};

/*
*
*
*
*
*
*
*/

/** Init */
const initFunc = (x: INIT_ARG_TYPE) => {
    if (x === undefined) return;
    const dev = x.dev;
    const fakeLocation = x.fakeLocation;

    /* Set "dev" state */
    _dev_.current = dev;

    /* Set fake location */
    if (!fakeLocation) return;
    let coords: any = fakeLocation;
    if (typeof fakeLocation === 'string') {
        switch (fakeLocation) {
            case 'bj': { coords = { latitude: 6.384018889999998, longitude: 2.318750379999999 } } break;
            case 'ml': { coords = { latitude: 12.6458, longitude: -7.9922 } } break;
            case 'fr': { coords = { latitude: 48.8567, longitude: 2.3522 } } break;
            case 'us': { coords = { latitude: 38.9047, longitude: -77.0163 } } break;
            case 'ru': { coords = { latitude: 55.7558, longitude: 37.6178 } } break;
            case 'cn': { coords = { latitude: 39.904, longitude: 116.4075 } } break;
            default: { };
        };
    }
    _fake_coord_.current = coords;
};

/*
*
*
*
*
*
*
*/

/** kd-tree search */
const kdificationFunc = (ca: any, cb: any): number => {
    const dlat = getRadiusFunc(cb.latitude - ca.latitude);
    const dlon = getRadiusFunc(cb.longitude - ca.longitude);
    const lat1 = getRadiusFunc(ca.latitude);
    const lat2 = getRadiusFunc(cb.latitude);
    const val = (Math.sin(dlat / 2) ** 2) + ((Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon / 2) ** 2));
    const final = Math.asin(Math.sqrt(val)) * (_earth_radius_ * 2);
    return final;
};

/*
*
*
*
*
*
*
*/

/** Localize */
const localizeFunc = async (x?: { fromCoords?: COORDS_TYPE, maxDistance?: number }): Promise<FUNCTION_BASIC_RETURN_TYPE> => {
    let res: FUNCTION_BASIC_RETURN_TYPE = { ok: true, log: '', data: undefined };
    try {
        const location = x?.fromCoords ? undefined : await getCoordsFunc();

        const coords = location?.data || x?.fromCoords || undefined;
        if (!coords) throw new Error(`Invalid coordinates !`);
        const md = x?.maxDistance || _min_distance_;

        const tree = new kdTree.kdTree(mergedCityDATA, kdificationFunc, ['latitude', 'longitude']);
        const dst = (md < _min_distance_) ? _min_distance_ : (md > _max_distance_) ? _max_distance_ : md;

        const tab = tree.nearest(coords, 1, dst);
        const ndata = extractNearestFunc(tab, coords);

        res.data = ndata;

    } catch (e: any) { res.ok = false; res.log = e.message }
    return res;
};

/** Log */
const logFunc = (...log: any[]) => { if (_dev_.current) console.log(...log) };

/*
*
*
*
*
*
*
*/

/** Permanent Log */
const plog = (...log: any[]) => { console.log(...log) };

/* 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
*/

/* ------------------------------------------------ Main ------------------------------------------------ */

const main: MAIN_TYPE = {
    init(x: any) {
        initFunc(x);
        const next = {
            /* Get capital */
            getCapitalOf(x: { countries: string | string[] }): GET_CAPITAL_OF_FINAL_RETURN_TYPE {
                const countries = x.countries;
                return getCapitalFunc(Array.isArray(countries) ? countries : [countries]);
            },

            /* Get cities */
            getCities(x?: { props?: GET_CITIES_PROPS_ARG_TYPE }): GET_CITIES_RETURN_TYPE {
                let props = x?.props ?? undefined;
                let countriesID: string[] | undefined = undefined;
                const next = { of(x: string | string[]) { countriesID = Array.isArray(x) ? x : [x]; return getCitiesFunc(props, countriesID!) } };
                return next;
            },

            /* Get countries */
            getCountries(x?: { props?: GET_COUNTRIES_PROPS_ARG_TYPE, lang?: GET_COUNTRIES_FULLNAME_LANG_TYPE }): GET_COUNTRIES_RETURN_TYPE {
                let props = x?.props ?? undefined;
                let lang = x?.lang ?? undefined;
                let continentName: CONTINENTS_NAME_TYPE | undefined = undefined;
                const next = {
                    all() { return getCountriesFunc(props, undefined, lang) },
                    of(x: CONTINENTS_NAME_TYPE) { continentName = x; return getCountriesFunc(props, continentName, lang) }
                };
                return next;
            },

            /* Get continents */
            getContinents(x?: { props?: GET_CONTINENTS_PROPS_ARG_TYPE }): GET_CONTINENTS_FINAL_RETURN_TYPE {
                let props = x?.props ?? undefined;
                const final = getContinentsFunc(props);
                return final;
            },

            /* Get currencies */
            getCurrencies(x?: { props?: GET_CURRENCY_PROPS_ARG_TYPE }): GET_CURRENCY_RETURN_TYPE {
                let props = x?.props ?? undefined;
                let countriesID: string[] | undefined = undefined;
                const next = {
                    all() { return getCurrenciesFunc(props, undefined) },
                    of(x: string | string[]) { countriesID = Array.isArray(x) ? x : [x]; return getCurrenciesFunc(props, countriesID!) }
                };
                return next;
            },

            /* Get properties */
            getProperties<T extends T4>(x: GET_PROPERTIES_FULL_ARG_TYPE<T>): GET_PROPERTIES_RETURN_TYPE<T> {
                let targetType = x.targetType;
                let props = x.props;
                let countryID = (x as any).countryID ?? undefined;
                let targets: string[] = [];
                const next = {
                    of(x: string | string[]) {
                        targets = Array.isArray(x) ? x : [x];
                        const final = getPropertiesFunc(targetType, props, countryID, targets);
                        return final;
                    }
                };
                return next;
            },

            /* Filter */
            filter<T extends T4>(x: FILTER_FULL_ARG_TYPE<T>): FILTER_RETURN_TYPE<T> {
                let targetType = x.targetType;
                let value = x.searchValue; /* The value to search */
                let countryID = (x as any).countryID ?? undefined;
                let fromStart = false;
                let filterProps: any[] = ['id', 'fullName'];
                const next = {
                    byDefault() {
                        const final = filterFunc(targetType, value, fromStart, countryID, filterProps);
                        return final;
                    },
                    by(x: FILTER_BY_ARG_TYPE<T>) {
                        filterProps = Array.isArray(x) ? x : [x];
                        const final = filterFunc(targetType, value, fromStart, countryID, filterProps);
                        return final;
                    },
                    fromStart() { fromStart = true; return { byDefault: next.byDefault, by: next.by } }
                };
                return next;
            },

            /* Localize */
            async localize(x?: { fromCoords?: COORDS_TYPE, maxDistance?: number }): Promise<FUNCTION_BASIC_RETURN_TYPE> { return await localizeFunc(x) },

            /* Get distance */
            getDistance(x: COORDS_TYPE, y: COORDS_TYPE): GET_DISTANCE_RETURN_TYPE { return getDistanceFunc(x, y) },

            /* Check */
            isArray(x: any): boolean { return Array.isArray(x) },

            /* LANG */
            LANG: _lang_data_
        };
        return next;
    }
};

/* Export default "cococity" */
const cococity: MAIN_TYPE = main;
export default cococity;