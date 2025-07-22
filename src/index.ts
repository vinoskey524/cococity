// const db = new DatabaseSync('cocobase.sqlite');
// db.prepare(`CREATE TABLE IF NOT EXISTS data(id integer primary key, type text not null, data text not null)`).run();
// db.prepare(`INSERT INTO data (type, data) VALUES (?, ?)`).run('cityDATA', JSON.stringify(cityDATA));
// db.prepare(`INSERT INTO data (type, data) VALUES (?, ?)`).run('countryDATA', JSON.stringify(countryDATA));
// db.prepare(`INSERT INTO data (type, data) VALUES (?, ?)`).run('continentDATA', JSON.stringify(continentDATA));
// db.prepare(`INSERT INTO data (type, data) VALUES (?, ?)`).run('currencyDATA', JSON.stringify(currencyDATA));
// db.prepare(`INSERT INTO data (type, data) VALUES (?, ?)`).run('countryLanguageDATA', JSON.stringify(countryLanguageDATA));
// db.prepare(`INSERT INTO data (type, data) VALUES (?, ?)`).run('countryNativeNameDATA', JSON.stringify(countryNativeNameDATA));
// db.prepare(`INSERT INTO data (type, data) VALUES (?, ?)`).run('flagsDATA', JSON.stringify(flagsDATA));
// db.prepare(`INSERT INTO data (type, data) VALUES (?, ?)`).run('languageDATA', JSON.stringify(languageDATA));
// db.prepare(`INSERT INTO data (type, data) VALUES (?, ?)`).run('mergedCityDATA', JSON.stringify(mergedCityDATA.value));

// const mergeCitiesFunc = () => {
//     if (hasMergedCities.value) return;
//     const clonedData = cloneObjFunc({ obj: cityDATA });
//     for (let i = 0; i < clonedData.length; i++) {
//         const ccity: JSON_BASIC_TYPE[] = clonedData[i].cities;
//         mergedCityDATA.value.push(...ccity);
//     };
// };

// import * as city_data from './data/city.json' assert { type: 'json' };
// import * as country_data from './data/country.json' assert { type: 'json' };
// import * as continent_data from './data/continent.json' assert { type: 'json' };
// import * as currency_data from './data/currency.json' assert { type: 'json' };
// import * as country_language_data from './data/country_language.json' assert { type: 'json' };
// import * as country_native_name_data from './data/country_native_name.json' assert { type: 'json' };
// import * as flags_data from './data/flags.json' assert { type: 'json' };
// import * as language_data from './data/language.json' assert { type: 'json' };