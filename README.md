# cococity

A lightweight and high-performance library that provides regional data and precise GPS-based localization, without relying on external APIs.

## Table of contents

- [Installation](#installation)
- [What's cococity](#whats-cococity)
- [Features](#features)
- [DATA](#data)
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
    - [isArray](#isarray)
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

# bun
$ bun add cococity

# deno
$ deno add npm:cococity
```

## What's cococity

Cococity (COtinent COuntry CITY) is a lightweight 100% Typescript package that provides structured and ready-to-use regional information about **continents**, **countries**, **cities**, **currencies**, **languages** and **user's location**. It is ideal for applications that require localized data without relying on external APIs.

## Features

- Retrieve data by continent, country or city.

- Get associated name (in native language), ISO, dial code, currency, and more, for each country.

- Lightweight and fast.

- Support custom filtering and integration.

- A very complete and up-to-date database.

## DATA

-

## API Documentation

### **getCapitalOf**

```ts
import coco from 'cococity';

// 1. Get the capital of one country
const one = coco.getCapitalOf('bj');
console.log(one);

// 2. Get the capitals of many countries
const many = coco.getCapitalOf(['bj', 'us', 'russia']);
console.log(many);
```

```sh
# log - one
{
  status: "success",
  log: "",
  data: {
    bj: {
      id: "cotonou",
      fullName: "Cotonou",
      latitude: 6.3667,
      longitude: 2.4333,
      isCapital: true
    }
  }
}

# log - many
{
  status: "success",
  log: "",
  data: {
    bj: {
      id: "cotonou",
      fullName: "Cotonou",
      latitude: 6.3667,
      longitude: 2.4333,
      isCapital: true
    },
    us: {
      id: "washington",
      fullName: "Washington",
      countryIso: "US",
      latitude: 38.9047,
      longitude: -77.0163,
      isCapital: true
    },
    russia: {
      id: "moscow",
      fullName: "Moscow",
      countryIso: "RU",
      latitude: 55.7558,
      longitude: 37.6178,
      isCapital: true
    }
  }
}
```

### **getContinents**

```ts
// Get the list of all continents
const continents = coco.getContinents();
console.log(continents.data);
```

```sh
# log
{ id: "africa", fullName: "Africa", code: "AF" },
{ id: "asia", fullName: "Asia", code: "AS" },
{ id: "america", fullName: "America", code: "AM" },
{ id: "north_america", fullName: "North America", code: "NA" },
{ id: "south_america", fullName: "South America", code: "SA" },
{ id: "europe", fullName: "Europe", code: "EU" },
{ id: "oceania", fullName: "Oceania", code: "OC" }
```

### **getCountries**

```ts
// 1. Get the list of all countries
const allCountries = coco.getCountries().all();
console.log(allCountries.data);

// 2. Get the list of all countries by filtering props
const selectProps = coco.getCountries(['id', 'fullName', 'iso', 'dialCode']).all();
console.log(selectProps.data);

// 3. Get the list of all countries without 'iso' and 'dialCode' props
// Props beginning with '!' will be skipped
const skipProps = coco.getCountries(['!iso', '!dialCode']).all();
console.log(skipProps.data);

// 4. Get all countries of the specified continent
// You can also filter props
const africanCountries = coco.getCountries().of('africa');
console.log(africanCountries.data);
```

```sh
# log - "allCountries.data"
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
  ... other items
]
```

### **getCities**

```ts
// 1. Get all the cities of the specified country
const citiesOfBenin = coco.getCities().of('bj');
console.log(citiesOfBenin.data);

// 2. Get all the cities of many countries and filter props
const citiesOfCountries = coco.getCities(['id', 'fullName']).of(['bj', 'us']);
console.log(citiesOfCountries.data);
```

```sh
# log - "citiesOfBenin.data"
```

- **`getCities`**: It takes as argument a string or an array of strings to filter props.

- **`of`**: It takes as argument a string or an array of strings, representing the country ID (id, iso).

### **getCurrencies**

### **getProperties**

### **filter**

### **localize**

### **getDistance**

### **isArray**

## Author

My name is **Hamet Kévin E. ODOUTAN** (@vinoskey524). I’ve been doing software development since 8 years now. I do web, desktop, and mobile development, and now I’m very excited to contribute to open-source with forestDB.

I’m not the kind of developer who types “How to build a cool web app” into Google and picks the first response, or the kind who makes a dumb copy-paste from ChatGPT. No !
I like to understand things and know what I’m really doing. For me, a real developer should be able to explain every single line of his code.

Don’t ask me which school or university I attended, because I taught myself software engineering using PDFs from **openclassrooms.com**, which was called **siteduzero** when I started.
A sad truth is that you can’t learn coding just by watching videos; you need books !

I’m really passionate about building software, and **I sincerely believe that being a developer is not just a job, but a lifestyle** !

## Other packages

- **[ForestDB](https://npmjs.com/package/forestdb)**: An uncomplicated real-time database with encrypted HTTP and WebSocket server-client communication, fast caching, dataflow and state management, a cross-runtime file system manager, and more, working seamlessly on both frontend and backend.

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