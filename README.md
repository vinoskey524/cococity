# cococity <img src="assets/logo.png" alt="logo" width="40" height="40" style="vertical-align:bottom;">

A lightweight and high-performance library that provides regional data and precise GPS-based localization, without relying on external APIs.

## Table of contents

- [Installation](#installation)
- [What's cococity](#whats-cococity)
- [Features](#features)
- [API Documentation](#api-documentation)
    - [getCapitalOf](#getcapitalof)
    - [getContinents](#getcontinents)
    - [getCountries](#getcountries)
    - [getCities](#getcities)
    - [getCurrencies](#getcurrencies)
    - [getProperties](#getproperties)
    - [filter](#filter)
    - [localize](#localize)
    - [getDistance](#getdistance)
- [Author](#author)
- [Other packages](#other-packages)
- [Contact Me](#contact-me)
- [License](#license)

## Installation

```sh
# npm
$ npm install cococity

# yarn
$ yarn add cococity

# pnpm
$ pnpm add cococity

# bun
$ bun add cococity

# deno
$ deno add npm:cococity
```

## What's cococity

Cococity (**CO**tinent - **CO**untry - **CITY**) is a lightweight package that provides structured and ready-to-use regional information about **continents**, **countries**, **cities**, **currencies**, **languages** and **user's location**. It is ideal for applications that require localized data without relying on external APIs and paid services.

## Features


## API Documentation

> **Note: We're using top-level await in this documentation, so make sure that your environment is properly configured to support it as well.**

### **getCapitalOf**

```ts
import coco from 'cococity';

// Get the capital of a country
const capital = coco.getCapitalOf({ countries: 'bj'});
console.log(capital);
```

- **`getCapitalOf(*)`**: It takes as argument a JSON object with the following property :

  - `countries`: (`string | string[]`) A string or an array of strings representing the `iso` or `id` (the country's id within cococity) of the country.

```sh
# log
{
  ok: true,
  log: '',
  data: {
    bj: {
      id: 'porto_novo',
      fullName: 'Porto-Novo',
      latitude: 6.3667,
      longitude: 2.4333,
      isCapital: true
    }
  }
}
```

It returns as result a JSON object with the following properties :

- **`ok`**: (`boolean`) Indicates the status of the process: `true` for success and `false` for failure.

- **`log`**: (`string`) Contains the error message in case of failure.

- **`data`**: (`any | undefined`) Contains the expected result or undefined in case of failure.

> **Note: All APIs return the same JSON format as result.**

### **getContinents**

```ts
// 1. Get the list of all continents with all props
const continents = coco.getContinents();
console.log('data ::', continents.data);

// 2. Get the list of all continents by filtering the props
// Will only return "id" and "fullName"
const filterProps = coco.getContinents({ props: ['id', 'fullName'] });
console.log('data ::', filterProps.data);

// 3. Get the list of all continents by excluding "code" prop
// Will return all properties excepting "fullName" - You can also exclude many props by using an array
const excludeProps = coco.getContinents({ props: '!fullName' });
console.log('data ::', excludeProps.data);
```

- **`getContinents(?)`**: It optionally takes as argument a JSON object with the following property :

  - `props?`: (`string | string[]`) A string or an array of strings representing the props you want to **retrieve** or **exclude** (any prop starting with a "!" will be excluded).

Of course, props are auto-suggested so that you won't need to memorize them.

```sh
# log

# 1. "continents.data"
data :: [
  { id: "africa", fullName: "Africa", code: "AF" },
  { id: "asia", fullName: "Asia", code: "AS" },
  { id: "america", fullName: "America", code: "AM" },
  { id: "north_america", fullName: "North America", code: "NA" },
  { id: "south_america", fullName: "South America", code: "SA" },
  { id: "europe", fullName: "Europe", code: "EU" },
  { id: "oceania", fullName: "Oceania", code: "OC" }
]

# 2. "filterProps.data"
data :: [
  { id: "africa", fullName: "Africa" },
  { id: "asia", fullName: "Asia" },
  { id: "america", fullName: "America" },
  { id: "north_america", fullName: "North America" },
  { id: "south_america", fullName: "South America" },
  { id: "europe", fullName: "Europe" },
  { id: "oceania", fullName: "Oceania" }
]

# 3. "excludeProps.data"
data :: [
  { id: "africa", code: "AF" },
  { id: "asia", code: "AS" },
  { id: "america", code: "AM" },
  { id: "north_america", code: "NA" },
  { id: "south_america", code: "SA" },
  { id: "europe", code: "EU" },
  { id: "oceania", code: "OC" }
]
```

### **getCountries**

```ts
// 1. Get the list of all countries
const allCountries = coco.getCountries().all();
console.log(allCountries.data);

// 2. Get all countries of the specified continent
const africanCountries = coco.getCountries().of('africa');
console.log(africanCountries.data);

// 3. Get the list of all countries by "filtering" props
const filterProps = coco.getCountries({ props: ['id', 'fullName', 'iso', 'dialCode'] }).all();
console.log(filterProps.data);

// 4. Get the list of all countries by "excluding" props
const excludeProps = coco.getCountries({ props: ['!iso', '!dialCode'] }).all();
console.log(excludeProps.data);

// 5. Get the list of all countries with traducted names
const lang = coco.getCountries({ props: ['id', 'fullName'], lang: coco.LANG.Chinese }).all();
console.log(lang.data);
```

- **`getCountries(?)`**: It optionally takes as argument a JSON object with the following properties :

  - `props?`: (`string | string[]`) A string or an array of strings representing the props you want to **retrieve** or **exclude** (any prop starting with a "!" will be excluded).

  - `lang?`: (`Default | en | fr | etc...`) Specify the language in which you want to translate countries `fullName`. The default language is **English**.

- **`all()`**: It returns all countries and doesn't take any argument.

- **`of(*)`**: It takes as argument a string representing the `id` of the target continent. Here are the auto-suggested continent IDs : `africa`, `asia`, `america`, `north_america`, `south_america`, `europe`, `oceania`.

```sh
# log

# 1. "allCountries.data"
[
  {
    id: "afghanistan",
    fullName: "Afghanistan",
    dialCode: 93,
    iso: [ "AF", "AFG" ],
    currencyId: "afghanistan_afghani",
    currencyName: "Afghanistan Afghani",
    currencyCode: "AFN",
    continentId: "asia",
    continentCode: "AS",
    continentName: "Asia"
  },
  {
    id: "albania",
    fullName: "Albania",
    dialCode: 355,
    iso: [ "AL", "ALB" ],
    currencyId: "albanian_lek",
    currencyName: "Albanian Lek",
    currencyCode: "ALL",
    continentId: "europe",
    continentCode: "EU",
    continentName: "Europe"
  },
  {
    id: "algeria",
    fullName: "Algeria",
    dialCode: 213,
    iso: [ "DZ", "DZA" ],
    currencyId: "algerian_dinar",
    currencyName: "Algerian Dinar",
    currencyCode: "DZD",
    continentId: "africa",
    continentCode: "AF",
    continentName: "Africa"
  },
  ... more items
]

# 5. "lang.data"
[
  { id: 'afghanistan', fullName: '阿富汗' },
  { id: 'albania', fullName: '阿尔巴尼亚' },
  { id: 'algeria', fullName: '阿尔及利亚' },
  ... more items
]
```

### **getCities**

```ts
// 1. Get all cities of the specified country
const citiesOfBenin = coco.getCities().of('bj');
console.log('data ::' citiesOfBenin.data);

// 2. Get all cities of many countries and filter props
const citiesOfCountries = coco.getCities({ props: ['id', 'fullName'] }).of(['bj', 'us']);
console.log(citiesOfCountries.data);
```

- **`getCities(?)`**: It optionally takes as argument a JSON object with the following property :

  - `props?`: (`string | string[]`) A string or an array of strings representing the props you want to **retrieve** or **exclude** (any prop starting with a "!" will be excluded).

- **`of(*)`**: It takes as argument a string or an array of strings representing the country `id` or `iso`.

```sh
# log

# 1. "citiesOfBenin.data"
{
  bj: [
    {
      id: 'abomey',
      fullName: 'Abomey',
      countryIso: 'BJ',
      latitude: 7.1856,
      longitude: 1.9881,
      isCapital: false
    },
    {
      id: 'abomey_calavi',
      fullName: 'Abomey-Calavi',
      countryIso: 'BJ',
      latitude: 6.4486,
      longitude: 2.3556,
      isCapital: false
    },
    {
      id: 'adakplame',
      fullName: 'Adakplamé',
      countryIso: 'BJ',
      latitude: 7.45,
      longitude: 2.55,
      isCapital: false
    },
    ... more items
  ]
}
```

### **getCurrencies**

```ts
const currencies = coco.getCurrencies().of(['nigeria', 'us']);
console.log(currencies.data);
```

- **`getCurrencies(?)`**: It optionally takes as argument a JSON object with the following property :

  - `props?`: (`string | string[]`) A string or an array of strings representing the props you want to **retrieve** or **exclude** (any prop starting with a "!" will be excluded).

- **`of(*)`**: It takes as argument a string or an array of strings representing the country `id` or `iso`.

```sh
# log

# "currencies.data"
[
  { nigeria: { id: 'naira', fullName: 'Naira', code: 'NGN' } },
  { us: { id: 'us_dollar', fullName: 'US Dollar', code: 'USD' } }
]
```

### **getProperties**

```ts
// 1. Get "city" properties
const cityProps = coco.getProperties({ targetType: 'city', props: '*', countryId: 'ru' }).of('moscow');
console.log(cityProps.data);

// 2. Get "country" properties
const countryProps = coco.getProperties({ targetType: 'country' }).of('ghana');
console.log(countryProps.data);

// 3. Get "continent" properties
const continentProps = coco.getProperties({ targetType: 'continent' }).of('europe');
console.log(continentProps.data);

// 4. Get "currency" properties
const currencyProps = coco.getProperties({ targetType: 'currency' }).of(['new_sheqel', 'RUB']);
console.log(currencyProps.data);
```

- **`getProperties(*)`**: It takes as argument a JSON object with the following properties :

  - `targetType`: (`city | country | continent | currency`) Specify the target.

  - `props?`: (`* | string | string[]`) A string or an array of strings representing the props you want to **retrieve** or **exclude** (any prop starting with a "!" will be excluded).

  - `countryId`: (`string`) A string representing the country `id` or `iso`. **This option is only available when `targetType` is `city`**.

- **`of(*)`**: It takes as argument a string or an array of strings representing the target `id`, `iso` or `code` (only for currencies).

```sh
# log

# 1. "cityProps.data"
{
  moscow: [
    {
      id: 'moscow',
      fullName: 'Moscow',
      countryIso: 'RU',
      latitude: 55.7558,
      longitude: 37.6178,
      isCapital: true
    }
  ]
}
```

### **filter**

```ts
// 1. Filter "cities"
const cityFilter = coco.filter({ targetType: 'city', searchValue: true, countryId: 'us' }).by('isCapital');
console.log(cityFilter.data);

// 2. Filter "countries"
const countryFilter = coco.filter({ targetType: 'country', searchValue: 229, fromStart: true }).byDefault();
console.log(countryFilter.data);

// 3. Filter "continents"
const continentFilter = coco.filter({ targetType: 'continent', searchValue: 'a' }).byDefault();
console.log(continentFilter.data);

// 4. Filter "currencies"
const currencyFilter = coco.filter({ targetType: 'currency', searchValue: 'g', fromStart: true }).by('fullName');
console.log(currencyFilter.data);
```

- **`filter(*)`**: It takes as argument a JSON object with the following properties :

  - `targetType`: (`city | country | continent | currency`) Specify the target.

  - `searchValue`: (`string | number | boolean`) The value used as filter.

  - `fromStart?`: (`boolean`) If `true`, the filter will seek for values **starting** by the `searchValue`. For example, if `searchValue` is `g`, only values starting with the letter `g` will match the filter. On the other side, if it's `false` (default), the filter will seek for values **containing** the `searchValue`.

  - `countryId`: (`string`) A string representing the country `id` or `iso`. **This option is only available when `targetType` is `city`**.

- **`byDefault()`**: The filter will check all relevant props.

- **`by(*)`**: It takes as argument a string representing the prop to check. The filter will check the specified prop only.

```sh
# log 

# 1. "cityFilter.data"
[
  {
    id: 'washington',
    fullName: 'Washington',
    countryIso: 'US',
    latitude: 38.9047,
    longitude: -77.0163,
    isCapital: true
  }
]
```

### **localize**

```ts
// 1. Localize directly via GPS (Browsers only)
const localize = await coco.localize();
console.log(localize.data);

// 2. Localize from coordinates
const point = { "latitude": 6.3667, "longitude": 2.4333 };
const localizeFromCoord = await coco.localize({ fromCoords: point });
console.log(localizeFromCoord.data);
```

- **`localize(?)`**: It optionally takes as argument a JSON object with the following property :

  - `fromCoords`: (`{ latitude: number, longitude: number }`) Coordinates.

```sh
# log

# 2. "localizeFromCoord.data"
{
  currencyId: 'cfa_franc',
  currencyName: 'CFA Franc',
  currencyCode: 'XOF',

  continentId: 'africa',
  continentCode: 'AF',
  continentName: 'Africa',

  countryId: 'benin',
  countryName: 'Benin',
  countryDialCode: 229,
  countryIso: 'bj',
  countryFullIso: [ 'BJ', 'BEN' ],
  countryFlag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAHlSURBVHja7Jc7jtRAEIa/sr2MQDOMhIRIuMJmhEicggtxF0LETUgIiEkXCdhZPH50VxWBvYO96xkj0XiSrcSvbvmrqv+3yuLunDMyzhwPAALkwKo/LhkKNAXw9O3Hd9/zTCZXeU8J8P7Np4SpZ+TbD88KYJuJ8Prl5bguUwQXm4T5fwHYFsBK3Wg1cN2U+B2GkUn9qn8yXOVHOsvxdbIFbwFWBUB0o4ottYbT1N4kSr8GuncVAGpKHVvq2M5srBIBXIwBoiv7UFOFmQx9nwggx+9WYBcqyljPAJQJXdj+AQimlG3FPjYLAfhBT10LTLkJ1awGPBmAgoUxwK+mouldcNdo4wpMGVX+PnOkF2AcAKhSak2weN/O/h9a4C1IPnZBGSqC6cl9X19pIhdm5JsnAxGqouqY+/RH7DbMB2U81go/9h0dSECxONJAwMQwt/t7htdmEzenzk9PWWKOBx1qwHDoKnAqDgD/qgHHQzsEiHiezQJ4QoAYdeyCosjwmdKRaoAVQePAhmZd72cn5IQTtPWOywBMFREWCxHpkr4FcHOERQkOAEVnGkdEWD96fHqEXq8TtsAPAOru7H5ez276sdslA+jVpAK8AC6B5wuP5d+Az9L/E2z645LRADfy8HN6boDfAwB2TBjr/rPYzwAAAABJRU5ErkJggg==',
  countryLanguages: [
    'Adja',   'Aizo',
    'Bariba', 'Fon',
    'Ful',    'Joruba',
    'Somba',  'French'
  ],

  cityId: 'cotonou',
  cityName: 'Cotonou',
  cityLatitude: 6.3667,
  cityLongitude: 2.4333,
  cityIsCapital: false,

  userLatitude: 6.3667,
  userLongitude: 2.4333,

  capitalId: 'porto_novo',
  capitalName: 'Porto-Novo',
  capitalLatitude: 6.4972,
  capitalLongitude: 2.605,

  distanceFromCapital: [ 23.885220516899988, '23.89Km', '23,885m' ]
}
```

### **getDistance**

```ts
const cotonou = { latitude: 6.3667, longitude: 2.4333 }; // Benin
const niamey = { latitude: 13.515, longitude: 2.1175 }; // Niger
const distance = coco.getDistance(cotonou, niamey);
console.log('distance ::', distance);
```

- **`getDistance(*, *)`**: It takes as argument two JSON objects, containing the `latitude` and the `longitude` of each points.

```sh
# log
distance :: [ 795.6058255570176, '795.61Km', '795,606m' ]
```

## Author

My name is **Hamet Kévin E. ODOUTAN** (@vinoskey524) and I’ve been doing software development (web, desktop and mobile) since 2017.

I’m not the kind of developer who types “How to build a cool web app” into Google and picks the first response, or the kind who makes a dumb copy-paste from ChatGPT. No !
I like to understand things and know what I’m really doing. For me, a real developer should be able to explain every single line of his code.

Don’t ask me which school or university I attended, because I taught myself software engineering using PDFs from **openclassrooms.com**, which was called **siteduzero** when I started.
A sad truth is that you can’t learn coding just by watching videos; you need books !

I’m really passionate about building software, and **I sincerely believe that being a developer is not just a job, but a lifestyle** !

## Other packages

Below are other packages from the same author.

- **[forestdb](https://npmjs.com/package/forestdb)**: An uncomplicated real-time database with encrypted HTTP and WebSocket server-client communication, fast caching, dataflow and state management, a cross-runtime file system manager, and more, working seamlessly on both frontend and backend.

- **[illisible](https://npmjs.com/package/illisible)**: A powerful and high-performance cross-runtime encryption software.

<!-- - **[feedlist](https://npmjs.com/package/feedlist)**: A highly efficient and high-performance feeds renderer, designed for React and React Native. -->

<!-- - **[voicify](https://npmjs.com/package/voicify)**: A highly efficient and blazing fast Text-To-Speech (TTS) software. -->

## Contact Me

Feel free to reach me at [vinoskey524@gmail.com](mailto:vinoskey524@gmail.com). I speak both French and English.

## License

MIT License

Copyright (c) [2025] [Hamet Kévin E. ODOUTAN]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM,
OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.