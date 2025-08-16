/*
*
* cococity
*
* A lightweight and high-performance library that provides regional data and precise GPS-based localization, without relying on external APIs.
*
* @vinoskey524 • Hamet Kévin E. ODOUTAN (Author)
*
*/

import kdTree from 'kd-tree-javascript';
import * as city_data from './data/city.json' assert { type: 'json' };
import * as country_data from './data/country.json' assert { type: 'json' };
import * as continent_data from './data/continent.json' assert { type: 'json' };
import * as currency_data from './data/currency.json' assert { type: 'json' };
import * as country_language_data from './data/country_language.json' assert { type: 'json' };
import * as country_native_name_data from './data/country_native_name.json' assert { type: 'json' };
import * as flags_data from './data/flags.json' assert { type: 'json' };
import * as language_data from './data/language.json' assert { type: 'json' };

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
        getDistance: (x: COORDS_TYPE, y: COORDS_TYPE) => FUNCTION_BASIC_RETURN_TYPE,
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
type GET_CITIES_RETURN_TYPE = { of: (x: COUNTRIES_ID_ISO_TYPE) => GET_CITIES_FINAL_RETURN_TYPE };
type CITY_PROPS_TYPE = { id: string, fullName: string, countryISO: string, latitude: number, longitude: number, isCapital: boolean };
type CITY_OF_ARG_TYPE = COUNTRIES_ID_ISO_TYPE;
type GET_CITIES_FINAL_RETURN_TYPE = { ok: boolean, log: string, data: CITY_PROPS_TYPE[] | undefined };


type COUNTRY_PROPS_LIST_TYPE = 'id' | 'fullName' | 'dialCode' | 'iso' | 'currencyId' | 'currencyName' | 'currencyCode' | 'continentId' | 'continentCode' | 'continentName' | 'flag' | 'languages';
type COUNTRY_FULL_PROPS_LIST_TYPE = COUNTRY_PROPS_LIST_TYPE | '!id' | '!fullName' | '!dialCode' | '!iso' | '!currencyId' | '!currencyName' | '!currencyCode' | '!continentId' | '!continentCode' | '!continentName' | '!flag' | '!languages';
type COUNTRIES_ID_TYPE = 'afghanistan' | 'albania' | 'algeria' | 'american_samoa' | 'andorra' | 'angola' | 'anguilla' | 'antigua_and_barbuda' | 'argentina' | 'armenia' | 'aruba' | 'australia' | 'austria' | 'azerbaijan' | 'bahrain' | 'bangladesh'
    | 'barbados' | 'belarus' | 'belgium' | 'belize' | 'benin' | 'bermuda' | 'bhutan' | 'bolivia' | 'bonaire_sint_eustatius_and_saba' | 'bosnia_and_herzegovina' | 'botswana' | 'brazil' | 'british_virgin_islands' | 'brunei' | 'bulgaria' | 'burkina_faso'
    | 'burundi' | 'cabo_verde' | 'cambodia' | 'cameroon' | 'canada' | 'cayman_islands' | 'central_african_republic' | 'chad' | 'chile' | 'china' | 'christmas_island' | 'colombia' | 'comoros' | 'congo_brazzaville' | 'congo_kinshasa' | 'cook_islands'
    | 'costa_rica' | 'croatia' | 'cuba' | 'curacao' | 'cyprus' | 'czechia' | 'ivory_coast' | 'denmark' | 'djibouti' | 'dominica' | 'dominican_republic' | 'ecuador' | 'egypt' | 'el_salvador' | 'equatorial_guinea' | 'eritrea' | 'estonia' | 'ethiopia'
    | 'falkland_islands_islas_malvinas' | 'faroe_islands' | 'federated_states_of_micronesia' | 'fiji' | 'finland' | 'france' | 'french_guiana' | 'french_polynesia' | 'gabon' | 'gaza_strip' | 'georgia' | 'germany' | 'ghana' | 'gibraltar' | 'greece'
    | 'greenland' | 'grenada' | 'guadeloupe' | 'guam' | 'guatemala' | 'guinea' | 'guinea_bissau' | 'guyana' | 'haiti' | 'honduras' | 'hong_kong' | 'hungary' | 'iceland' | 'india' | 'indonesia' | 'iran' | 'iraq' | 'ireland' | 'isle_of_man' | 'israel'
    | 'italy' | 'jamaica' | 'japan' | 'jersey' | 'jordan' | 'kazakhstan' | 'kenya' | 'kiribati' | 'kosovo' | 'kuwait' | 'kyrgyzstan' | 'laos' | 'latvia' | 'lebanon' | 'lesotho' | 'liberia' | 'libya' | 'liechtenstein' | 'lithuania' | 'luxembourg' | 'macau'
    | 'macedonia' | 'madagascar' | 'malawi' | 'malaysia' | 'maldives' | 'mali' | 'malta' | 'marshall_islands' | 'martinique' | 'mauritania' | 'mauritius' | 'mayotte' | 'mexico' | 'moldova' | 'monaco' | 'mongolia' | 'montenegro' | 'montserrat' | 'morocco'
    | 'mozambique' | 'myanmar' | 'namibia' | 'nauru' | 'nepal' | 'netherlands' | 'new_caledonia' | 'new_zealand' | 'nicaragua' | 'niger' | 'nigeria' | 'niue' | 'norfolk_island' | 'north_korea' | 'northern_mariana_islands' | 'norway' | 'oman' | 'pakistan'
    | 'palau' | 'panama' | 'papua_new_guinea' | 'paraguay' | 'peru' | 'philippines' | 'pitcairn_islands' | 'poland' | 'portugal' | 'puerto_rico' | 'qatar' | 'reunion' | 'romania' | 'russia' | 'rwanda' | 'saint_barthelemy' | 'saint_helena_ascension_and_tristan_da_cunha'
    | 'saint_kitts_and_nevis' | 'saint_lucia' | 'saint_martin' | 'saint_pierre_and_miquelon' | 'saint_vincent_and_the_grenadines' | 'samoa' | 'san_marino' | 'sao_tome_and_principe' | 'saudi_arabia' | 'senegal' | 'serbia' | 'seychelles' | 'sierra_leone'
    | 'singapore' | 'sint_maarten' | 'slovakia' | 'slovenia' | 'solomon_islands' | 'somalia' | 'south_africa' | 'south_georgia_and_south_sandwich_islands' | 'south_korea' | 'south_sudan' | 'spain' | 'sri_lanka' | 'sudan' | 'suriname' | 'svalbard' | 'swaziland'
    | 'sweden' | 'switzerland' | 'syria' | 'taiwan' | 'tajikistan' | 'tanzania' | 'thailand' | 'the_bahamas' | 'the_gambia' | 'timor_leste' | 'togo' | 'tonga' | 'trinidad_and_tobago' | 'tunisia' | 'turkey' | 'turkmenistan' | 'turks_and_caicos_islands' | 'tuvalu'
    | 'uganda' | 'ukraine' | 'united_arab_emirates' | 'united_kingdom' | 'united_states' | 'uruguay' | 'us_virgin_islands' | 'uzbekistan' | 'vanuatu' | 'vatican_city' | 'venezuela' | 'vietnam' | 'wallis_and_futuna' | 'west_bank' | 'yemen' | 'zambia'
    | 'zimbabwe';
type COUNTRIES_ISO_TYPE = 'AF' | 'AL' | 'DZ' | 'AS' | 'AD' | 'AO' | 'AI' | 'AG' | 'AR' | 'AM' | 'AU' | 'AT' | 'AZ' | 'BH' | 'BD' | 'BB' | 'BY' | 'BE' | 'BZ' | 'BJ' | 'BM' | 'BT' | 'BO' | 'BQ' | 'BA' | 'BW' | 'BR' | 'VG' | 'BN' | 'BG' | 'BF' | 'BI' | 'CV' | 'KH' | 'CM'
    | 'CA' | 'KY' | 'CF' | 'TD' | 'CL' | 'CN' | 'CX' | 'CO' | 'KM' | 'CG' | 'CD' | 'CK' | 'CR' | 'HR' | 'CU' | 'CW' | 'CY' | 'CZ' | 'CI' | 'DK' | 'DJ' | 'DM' | 'DO' | 'EC' | 'EG' | 'SV' | 'GQ' | 'ER' | 'EE' | 'ET' | 'FK' | 'FO' | 'FM' | 'FJ' | 'FI' | 'FR' | 'GF' | 'PF'
    | 'GA' | 'XG' | 'GE' | 'DE' | 'GH' | 'GI' | 'GR' | 'GL' | 'GD' | 'GP' | 'GU' | 'GT' | 'GN' | 'GW' | 'GY' | 'HT' | 'HN' | 'HK' | 'HU' | 'IS' | 'IN' | 'ID' | 'IR' | 'IQ' | 'IE' | 'IM' | 'IL' | 'IT' | 'JM' | 'JP' | 'JO' | 'KZ' | 'KE' | 'XK' | 'KW' | 'KG' | 'LA' | 'LB'
    | 'LS' | 'LR' | 'LY' | 'LI' | 'LT' | 'LU' | 'MO' | 'MK' | 'MG' | 'MW' | 'MY' | 'MV' | 'ML' | 'MT' | 'MH' | 'MQ' | 'MR' | 'MU' | 'YT' | 'MX' | 'MD' | 'MC' | 'MN' | 'ME' | 'MS' | 'MA' | 'MZ' | 'MM' | 'NA' | 'NR' | 'NP' | 'NL' | 'NC' | 'NZ' | 'NI' | 'NE' | 'NG' | 'NU'
    | 'NF' | 'KP' | 'MP' | 'NO' | 'OM' | 'PK' | 'PW' | 'PA' | 'PG' | 'PY' | 'PE' | 'PH' | 'PN' | 'PL' | 'PT' | 'PR' | 'QA' | 'RE' | 'RO' | 'RU' | 'RW' | 'BL' | 'SH' | 'KN' | 'LC' | 'MF' | 'PM' | 'VC' | 'WS' | 'SM' | 'ST' | 'SA' | 'SN' | 'RS' | 'SC' | 'SL' | 'SG' | 'SX'
    | 'SK' | 'SI' | 'SB' | 'SO' | 'ZA' | 'GS' | 'KR' | 'SS' | 'ES' | 'LK' | 'SD' | 'SR' | 'XR' | 'SZ' | 'SE' | 'CH' | 'SY' | 'TW' | 'TJ' | 'TZ' | 'TH' | 'BS' | 'GM' | 'TL' | 'TG' | 'TO' | 'TT' | 'TN' | 'TR' | 'TM' | 'TC' | 'TV' | 'UG' | 'UA' | 'AE' | 'GB' | 'US' | 'VU'
    | 'VA' | 'VE' | 'VN' | 'WF' | 'XW' | 'YE' | 'ZM' | 'ZW'
    | 'af' | 'al' | 'dz' | 'as' | 'ad' | 'ao' | 'ai' | 'ag' | 'ar' | 'am' | 'au' | 'at' | 'az' | 'bh' | 'bd' | 'bb' | 'by' | 'be' | 'bz' | 'bj' | 'bm' | 'bt' | 'bo' | 'bq' | 'ba' | 'bw' | 'br' | 'vg' | 'bn' | 'bg' | 'bf' | 'bi' | 'cv' | 'kh' | 'cm'
    | 'ca' | 'ky' | 'cf' | 'td' | 'cl' | 'cn' | 'cx' | 'co' | 'km' | 'cg' | 'cd' | 'ck' | 'cr' | 'hr' | 'cu' | 'cw' | 'cy' | 'cz' | 'ci' | 'dk' | 'dj' | 'dm' | 'do' | 'ec' | 'eg' | 'sv' | 'gq' | 'er' | 'ee' | 'et' | 'fk' | 'fo' | 'fm' | 'fj' | 'fi' | 'fr' | 'gf' | 'pf'
    | 'ga' | 'xg' | 'ge' | 'de' | 'gh' | 'gi' | 'gr' | 'gl' | 'gd' | 'gp' | 'gu' | 'gt' | 'gn' | 'gw' | 'gy' | 'ht' | 'hn' | 'hk' | 'hu' | 'is' | 'in' | 'id' | 'ir' | 'iq' | 'ie' | 'im' | 'il' | 'it' | 'jm' | 'jp' | 'jo' | 'kz' | 'ke' | 'xk' | 'kw' | 'kg' | 'la' | 'lb'
    | 'ls' | 'lr' | 'ly' | 'li' | 'lt' | 'lu' | 'mo' | 'mk' | 'mg' | 'mw' | 'my' | 'mv' | 'ml' | 'mt' | 'mh' | 'mq' | 'mr' | 'mu' | 'yt' | 'mx' | 'md' | 'mc' | 'mn' | 'me' | 'ms' | 'ma' | 'mz' | 'mm' | 'na' | 'nr' | 'np' | 'nl' | 'nc' | 'nz' | 'ni' | 'ne' | 'ng' | 'nu'
    | 'nf' | 'kp' | 'mp' | 'no' | 'om' | 'pk' | 'pw' | 'pa' | 'pg' | 'py' | 'pe' | 'ph' | 'pn' | 'pl' | 'pt' | 'pr' | 'qa' | 're' | 'ro' | 'ru' | 'rw' | 'bl' | 'sh' | 'kn' | 'lc' | 'mf' | 'pm' | 'vc' | 'ws' | 'sm' | 'st' | 'sa' | 'sn' | 'rs' | 'sc' | 'sl' | 'sg' | 'sx'
    | 'sk' | 'si' | 'sb' | 'so' | 'za' | 'gs' | 'kr' | 'ss' | 'es' | 'lk' | 'sd' | 'sr' | 'xr' | 'sz' | 'se' | 'ch' | 'sy' | 'tw' | 'tj' | 'tz' | 'th' | 'bs' | 'gm' | 'tl' | 'tg' | 'to' | 'tt' | 'tn' | 'tr' | 'tm' | 'tc' | 'tv' | 'ug' | 'ua' | 'ae' | 'gb' | 'us' | 'vu'
    | 'va' | 've' | 'vn' | 'wf' | 'xw' | 'ye' | 'zm' | 'zw';
type COUNTRIES_ID_ISO_TYPE = COUNTRIES_ID_TYPE | COUNTRIES_ID_TYPE[] | COUNTRIES_ISO_TYPE | COUNTRIES_ISO_TYPE[] | (COUNTRIES_ID_TYPE | COUNTRIES_ISO_TYPE)[];
type GET_COUNTRIES_PROPS_ARG_TYPE = COUNTRY_FULL_PROPS_LIST_TYPE | COUNTRY_FULL_PROPS_LIST_TYPE[] | undefined;
type GET_COUNTRIES_FULLNAME_LANG_TYPE = 'native' | 'AR' | 'BG' | 'CS' | 'DA' | 'DE' | 'EL' | 'EN' | 'EO' | 'ES' | 'ET' | 'EU' | 'FI' | 'FR' | 'HR' | 'HU' | 'HY'
    | 'IT' | 'JA' | 'KO' | 'LT' | 'NL' | 'NO' | 'PL' | 'PT' | 'RO' | 'RU' | 'SK' | 'SL' | 'SR' | 'SV' | 'TH' | 'UK' | 'ZH' | 'ZH-TW'
    | 'ar' | 'bg' | 'cs' | 'da' | 'de' | 'el' | 'en' | 'eo' | 'es' | 'et' | 'eu' | 'fi' | 'fr' | 'hr' | 'hu' | 'hy'
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
type CURRENCY_OF_ARG_TYPE = COUNTRIES_ID_ISO_TYPE;
type CURRENCY_ID_TYPE = 'afghanistan_afghani' | 'albanian_lek' | 'algerian_dinar' | 'angolan_kwanza' | 'argentine_peso' | 'australian_dollar' | 'bahamian_dollar' | 'baharaini_dinar' | 'balboa' | 'barbados_dollar' | 'belarusian_ruble' | 'belarusian_ruble' | 'belize_dollar' | 'bhat'
    | 'bolivar_fuerte' | 'boliviano' | 'botswana_pula' | 'brazilian_real' | 'brunei_dollar' | 'bulgarian_lev' | 'burundi_franc' | 'cfa_franc' | 'canadian_dollar' | 'cape_verde_escudo' | 'chilean_peso' | 'colombian_peso' | 'comoros_franc' | 'congolese_franc' | 'convertible_mark'
    | 'costa_rican_colone' | 'cuban_peso' | 'danish_krone' | 'denar' | 'djibouti_franc' | 'dominican_peso' | 'dong' | 'dram' | 'eastern_caribbean_dollar' | 'egyptian_pound' | 'ethiopian_birr' | 'euro' | 'fiji_dollar' | 'gambian_dalasi' | 'ghana_cedi' | 'guarani' | 'guatemalan_quetzal'
    | 'guinea_franc' | 'guyana_dollar' | 'haitian_gourde' | 'honduran_lempira' | 'hryvnia' | 'hungarian_forint' | 'icelandic_krona' | 'indian_rupee' | 'indonesian_rupiah' | 'iranian_rial' | 'iraqi_dinar' | 'jamaican_dollar' | 'japanese_yen' | 'jordanian_dinar' | 'kenyan_shilling'
    | 'kina' | 'kip' | 'kuna' | 'kuwaiti_dinar' | 'kwacha' | 'kyat' | 'lari' | 'lebanese_pound' | 'leone' | 'lesotho_loti' | 'liberian_dollar' | 'libyan_dinar' | 'lilangeni' | 'malagasy_ariary' | 'malawian_kwacha' | 'manat' | 'mauritius_rupee' | 'mexican_peso' | 'moldova_leu' | 'moroccan_dirham'
    | 'mozambican_metical' | 'naira' | 'nakfa' | 'namibian_dollar' | 'nepalese_rupee' | 'new_dobra' | 'new_manat' | 'new_ouguiya' | 'new_sheqel' | 'new_zealand_dollar' | 'ngultrum' | 'nicaraguan_cordoba_oro' | 'north_korean_won' | 'norway_krone' | 'nuevo_sol' | 'omani_rial' | 'paanga'
    | 'pakistani_rupee' | 'philippines_peso' | 'pound_sterling' | 'qatar_rial' | 'rand' | 'riel' | 'ringgit' | 'romania_leu' | 'rouble' | 'rufiyaa' | 'rwandan_franc' | 'saudi_riyal' | 'serbian_dinar' | 'seychelles_rupee' | 'singapore_dollar' | 'solomon_dollar' | 'som' | 'somalian_shilling'
    | 'somoni' | 'south_sudanese_pound' | 'sri_lanka_rupee' | 'sudanese_pound' | 'sum' | 'surinamese_dollar' | 'swedish_krona' | 'swiss_franc' | 'syrian_pound' | 'taka' | 'tala' | 'tanzanian_shilling' | 'tenge' | 'trinidad_and_tobago_dollar' | 'tugrik' | 'tunisian_dinar' | 'turkish_lira'
    | 'uaemirates_dirham' | 'us_dollar' | 'ugandan_shilling' | 'uruguayan_peso' | 'vatu' | 'won' | 'yemeni_rial' | 'yuan_renminbi' | 'zloty';
type CURRENCY_CODE_TYPE = 'AFN' | 'ALL' | 'DZD' | 'AON' | 'ARS' | 'AUD' | 'BSD' | 'BHD' | 'PAB' | 'BBD' | 'BYN' | 'BZD' | 'THB' | 'VEF' | 'BOB' | 'BWP' | 'BRL' | 'BND' | 'BGL' | 'BIF' | 'XOF' | 'CAD' | 'CVE' | 'CLP' | 'COP' | 'KMF' | 'CDF' | 'BAM' | 'CRC' | 'CUP' | 'DKK' | 'MKD' | 'DJF' | 'DOP'
    | 'VND' | 'AMD' | 'XCD' | 'EGP' | 'ETB' | 'EUR' | 'FJD' | 'GMD' | 'GHC' | 'PYG' | 'GTQ' | 'GNF' | 'GYD' | 'HTG' | 'HNL' | 'UAH' | 'HUF' | 'ISK' | 'INR' | 'IDR' | 'IRR' | 'IQD' | 'JMD' | 'JPY' | 'JOD' | 'KES' | 'PGK' | 'LAK' | 'HRK' | 'KWD' | 'ZMK' | 'MMK' | 'GEL' | 'LBP' | 'SLL' | 'LSL' | 'LRD'
    | 'LYD' | 'SZL' | 'MGA' | 'MWK' | 'AZN' | 'MUR' | 'MXN' | 'MDL' | 'MAD' | 'MZM' | 'NGN' | 'ERN' | 'NAD' | 'NPR' | 'STN' | 'TMT' | 'MRU' | 'ILS' | 'NZD' | 'BTN' | 'NIO' | 'KPW' | 'NOK' | 'PEN' | 'OMR' | 'TOP' | 'PKR' | 'PHP' | 'GBP' | 'QAR' | 'ZAR' | 'KHR' | 'MYR' | 'RON' | 'RUB' | 'MVR' | 'RWF'
    | 'SAR' | 'RSD' | 'SCR' | 'SGD' | 'SBD' | 'KGS' | 'SOS' | 'TJS' | 'SSP' | 'LRK' | 'SDG' | 'UZS' | 'SRD' | 'SEK' | 'CHF' | 'SYP' | 'BDT' | 'WST' | 'TZS' | 'KZT' | 'TTD' | 'MNT' | 'TND' | 'TRY' | 'AED' | 'USD' | 'UGS' | 'UYU' | 'VUV' | 'KRW' | 'YER' | 'CNY' | 'PLN'
    | 'afn' | 'all' | 'dzd' | 'aon' | 'ars' | 'aud' | 'bsd' | 'bhd' | 'pab' | 'bbd' | 'byn' | 'bzd' | 'thb' | 'vef' | 'bob' | 'bwp' | 'brl' | 'bnd' | 'bgl' | 'bif' | 'xof' | 'cad' | 'cve' | 'clp' | 'cop' | 'kmf' | 'cdf' | 'bam' | 'crc' | 'cup' | 'dkk' | 'mkd' | 'djf' | 'dop'
    | 'vnd' | 'amd' | 'xcd' | 'egp' | 'etb' | 'eur' | 'fjd' | 'gmd' | 'ghc' | 'pyg' | 'gtq' | 'gnf' | 'gyd' | 'htg' | 'hnl' | 'uah' | 'huf' | 'isk' | 'inr' | 'idr' | 'irr' | 'iqd' | 'jmd' | 'jpy' | 'jod' | 'kes' | 'pgk' | 'lak' | 'hrk' | 'kwd' | 'zmk' | 'mmk' | 'gel' | 'lbp' | 'sll' | 'lsl' | 'lrd'
    | 'lyd' | 'szl' | 'mga' | 'mwk' | 'azn' | 'mur' | 'mxn' | 'mdl' | 'mad' | 'mzm' | 'ngn' | 'ern' | 'nad' | 'npr' | 'stn' | 'tmt' | 'mru' | 'ils' | 'nzd' | 'btn' | 'nio' | 'kpw' | 'nok' | 'pen' | 'omr' | 'top' | 'pkr' | 'php' | 'gbp' | 'qar' | 'zar' | 'khr' | 'myr' | 'ron' | 'rub' | 'mvr' | 'rwf'
    | 'sar' | 'rsd' | 'scr' | 'sgd' | 'sbd' | 'kgs' | 'sos' | 'tjs' | 'ssp' | 'lrk' | 'sdg' | 'uzs' | 'srd' | 'sek' | 'chf' | 'syp' | 'bdt' | 'wst' | 'tzs' | 'kzt' | 'ttd' | 'mnt' | 'tnd' | 'try' | 'aed' | 'usd' | 'ugs' | 'uyu' | 'vuv' | 'krw' | 'yer' | 'cny' | 'pln';
type CURRENCY_ID_CODE_TYPE = CURRENCY_ID_TYPE | CURRENCY_ID_TYPE[] | CURRENCY_CODE_TYPE | CURRENCY_CODE_TYPE[] | (CURRENCY_ID_TYPE | CURRENCY_CODE_TYPE)[];
type GET_CURRENCY_PROPS_ARG_TYPE = CURRENCY_FULL_PROPS_LIST_TYPE | CURRENCY_FULL_PROPS_LIST_TYPE[] | undefined;
type GET_CURRENCY_RETURN_TYPE = {
    all: () => GET_CURRENCY_FINAL_RETURN_TYPE,
    of: (x: CURRENCY_OF_ARG_TYPE) => GET_CURRENCY_FINAL_RETURN_TYPE
};
type GET_CURRENCY_FINAL_RETURN_TYPE = { ok: boolean, log: string, data: CURRENCY_PROPS_TYPE | CURRENCY_PROPS_TYPE[] | undefined };


type GET_PROPERTIES_FULL_ARG_TYPE<T> = T extends 'city' ? { targetType: T, props?: GET_PROPERTIES_Y_ARG_TYPE<T>, countryId: COUNTRIES_ID_TYPE | COUNTRIES_ISO_TYPE } : { targetType: T, props?: GET_PROPERTIES_Y_ARG_TYPE<T> };
type GET_PROPERTIES_Y_ARG_TYPE<T> = T extends 'city' ? '*' | CITY_FULL_PROPS_LIST_TYPE | CITY_FULL_PROPS_LIST_TYPE[]
    : T extends 'country' ? '*' | COUNTRY_FULL_PROPS_LIST_TYPE | COUNTRY_FULL_PROPS_LIST_TYPE[]
    : T extends 'continent' ? '*' | CONTINENT_FULL_PROPS_LIST_TYPE | CONTINENT_FULL_PROPS_LIST_TYPE[]
    : T extends 'currency' ? '*' | CURRENCY_FULL_PROPS_LIST_TYPE | CURRENCY_FULL_PROPS_LIST_TYPE[] : any;
type GET_PROPERTIES_RETURN_TYPE<T> = { of: (x: GET_PROPERTIES_OF_ARG_TYPE<T>) => GET_PROPERTIES_FINAL_RETURN_TYPE<T> };
type GET_PROPERTIES_OF_RETURN_TYPE<T> = T extends 'city' ? { ok: boolean, log: string, data: Partial<CITY_PROPS_TYPE> | Partial<CITY_PROPS_TYPE>[] | undefined }
    : T extends 'country' ? { ok: boolean, log: string, data: Partial<COUNTRY_PROPS_TYPE> | Partial<COUNTRY_PROPS_TYPE>[] | undefined }
    : T extends 'continent' ? { ok: boolean, log: string, data: Partial<CONTINENT_PROPS_TYPE> | Partial<CONTINENT_PROPS_TYPE>[] | undefined }
    : T extends 'currency' ? { ok: boolean, log: string, data: Partial<CURRENCY_PROPS_TYPE> | Partial<CURRENCY_PROPS_TYPE>[] | undefined } : any;
type GET_PROPERTIES_FINAL_RETURN_TYPE<T> = { ok: boolean, log: string, data: { [key: string]: GET_PROPERTIES_OF_RETURN_TYPE<T> | undefined } };
type GET_PROPERTIES_OF_ARG_TYPE<T> = T extends 'city' ? string | string[]
    : T extends 'country' ? COUNTRIES_ID_ISO_TYPE
    : T extends 'continent' ? CONTINENTS_NAME_TYPE | CONTINENTS_NAME_TYPE[]
    : T extends 'currency' ? CURRENCY_ID_CODE_TYPE : any;


type FILTER_FULL_ARG_TYPE<T> = T extends 'city' ? { targetType: T, searchValue: SEARCH_VALUE_TYPE, fromStart?: boolean, countryId: string } : { targetType: T, searchValue: SEARCH_VALUE_TYPE, fromStart?: boolean };
type FILTER_BY_ARG_TYPE<T> = T extends 'city' ? CITY_PROPS_LIST_TYPE | CITY_PROPS_LIST_TYPE[]
    : T extends 'country' ? COUNTRY_PROPS_LIST_TYPE | COUNTRY_PROPS_LIST_TYPE[]
    : T extends 'continent' ? CONTINENT_PROPS_LIST_TYPE | CONTINENT_PROPS_LIST_TYPE[]
    : T extends 'currency' ? CURRENCY_PROPS_LIST_TYPE | CURRENCY_PROPS_LIST_TYPE[] : any;
type FILTER_RETURN_TYPE<T> = {
    byDefault: () => FILTER_FINAL_RETURN_TYPE<T>,
    by: (x: FILTER_BY_ARG_TYPE<T>) => FILTER_FINAL_RETURN_TYPE<T>
};
type FILTER_FINAL_RETURN_TYPE<T> = { ok: boolean, log: string, data: FILTER_FINAL_DATA_TYPE<T> | undefined };
type FILTER_FINAL_DATA_TYPE<T> = T extends 'city' ? Partial<CITY_PROPS_TYPE>[]
    : T extends 'country' ? Partial<COUNTRY_PROPS_TYPE>[]
    : T extends 'continent' ? Partial<CONTINENT_PROPS_TYPE>[]
    : T extends 'currency' ? Partial<CURRENCY_PROPS_TYPE>[] : any;


type SEARCH_VALUE_TYPE = string | number | boolean;

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

type RUNTIME_TYPE = 'node' | 'deno' | 'bun' | 'browser' | 'react_native' | 'unknown';

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

/* ------------------------------------------------ DATA logistic ------------------------------------------------ */

const cityDATA: any[] = (city_data as any).default;
const countryDATA: any[] = (country_data as any).default;
const continentDATA: any[] = (continent_data as any).default;
const currencyDATA: any[] = (currency_data as any).default;
const countryLanguageDATA: any[] = (country_language_data as any).default;
const countryNativeNameDATA: any[] = (country_native_name_data as any).default;
const flagsDATA: any = (flags_data as any).default;
const languageDATA: any[] = (language_data as any).default;
const mergedCityDATA: any[] = [];

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

/** Detect runtime */
const detectRuntime = (): RUNTIME_TYPE => {
    const g = globalThis as any;
    if (typeof g.Bun !== 'undefined') return 'bun';
    else if (typeof g.Deno !== 'undefined') return 'deno';
    else if (typeof g.window !== 'undefined' && typeof g.document !== 'undefined') return 'browser';
    else if (g.navigator?.product === "ReactNative") return 'react_native';
    else if (typeof g.process.versions?.node) return 'node';
    return 'unknown';
}

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
        fulldata['distanceFromCapital'] = getDistanceFunc(userCoords, cdata).data;
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
const filterFunc = <T extends T4>(targetType: T, value: SEARCH_VALUE_TYPE, fromStart: boolean, countryId: string | undefined, filterProps: FILTER_BY_ARG_TYPE<T>[] | undefined): FILTER_FINAL_RETURN_TYPE<T> => {
    let res: FILTER_FINAL_RETURN_TYPE<T> = { ok: true, log: '', data: undefined };
    try {
        switch (targetType) {
            case 'city': {
                const clonedData = cloneObjFunc({ obj: cityDATA });
                let cid = countryId!.toLowerCase(); /* Can be country "id" or "iso" */
                let cdata: any = clonedData.filter((e: any) => [e.countryId, (e.countryIsoId).toLowerCase()].includes(cid));

                /* If country not found */
                if (cdata.length === 0) {
                    res.ok = false;
                    res.log = res.log + `\nNo country found for "${countryId}"`;
                    return res;
                }

                /* - */
                const cities: any[] = cdata[0].cities;
                let val = String(value).toLowerCase();
                let fprops = filterProps || ['id', 'fullName'];
                const fdata: any = cities.filter((e: any) => {
                    for (let f = 0; f < fprops.length; f++) {
                        const cprop = fprops[f];
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
                let fprops = filterProps || ['id', 'fullName', 'dialCode'];
                const fdata: any = clonedData.filter((e: any) => {
                    for (let f = 0; f < fprops.length; f++) {
                        const cprop = fprops[f];
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
                let fprops = filterProps || ['id', 'fullName', 'code'];
                const fdata: any = clonedData.filter((e: any) => {
                    for (let f = 0; f < fprops.length; f++) {
                        const cprop = fprops[f];
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
                let fprops = filterProps || ['id', 'fullName', 'code'];
                const fdata: any = clonedData.filter((e: any) => {
                    for (let f = 0; f < fprops.length; f++) {
                        const cprop = fprops[f];
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

                const names = countryNativeNameDATA.filter((e: any) => e.alpha2 === iso)[0] || undefined;
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
const getPropertiesFunc = <T extends T4>(targetType: T, props: GET_PROPERTIES_Y_ARG_TYPE<T>, countryId: string | undefined, targets: string[]): GET_PROPERTIES_FINAL_RETURN_TYPE<T> => {
    let res: GET_PROPERTIES_FINAL_RETURN_TYPE<T> = { ok: true, log: '', data: {} };
    try {
        let collector: any = {};
        switch (targetType) {
            case 'city': {
                const clonedData = cloneObjFunc({ obj: cityDATA });
                let cid = countryId!.toLowerCase(); /* Can be country "id" or "iso" */
                let cdata: any = clonedData.filter((e: any) => [e.countryId, (e.countryIsoId).toLowerCase()].includes(cid));

                /* If country not found */
                if (cdata.length === 0) {
                    res.ok = false;
                    res.log = res.log + `\nNo country found for "${countryId}"`;
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
                    let countryId = targets[i];
                    let cid = countryId.toLowerCase(); /* Can be country "id", "fullName", "dialCode" or "iso" */
                    let cdata: any[] = clonedData.filter((e: any) => [e.id, e.fullName, String(e.dialCode), (e.iso[0]).toLowerCase(), (e.iso[1]).toLowerCase()].includes(cid));

                    /* If country not found */
                    if (cdata.length === 0) {
                        collector[countryId] = undefined;
                        res.log = res.log + `\nNo country found for "${countryId}".`;
                        continue;
                    }

                    /* - */
                    const clen = cdata.length;
                    collector[countryId] = [];
                    for (let d = 0; d < clen; d++) {
                        let edata = cdata[d];
                        let fdata = (props === '*') ? [edata] : extractPropsFunc(edata, props);
                        clen > 1 ? collector[countryId].push(...fdata) : collector[countryId] = fdata[0];
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
const getDistanceFunc = (x: COORDS_TYPE, y: COORDS_TYPE): FUNCTION_BASIC_RETURN_TYPE => {
    let res: FUNCTION_BASIC_RETURN_TYPE = { ok: true, log: '', data: undefined };

    const dlat = getRadiusFunc(y.latitude - x.latitude);
    const dlon = getRadiusFunc(y.longitude - x.longitude);

    const latrx = getRadiusFunc(x.latitude);
    const latry = getRadiusFunc(y.latitude);

    const a = (Math.sin(dlat / 2) ** 2) + (Math.cos(latrx) * Math.cos(latry) * (Math.sin(dlon / 2) ** 2));
    const b = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const c = _earth_radius_ * b;

    res.data = [c, `${Number(c.toFixed(2)).toLocaleString('en-US')}Km`, `${Number((c * 1000).toFixed(0)).toLocaleString('en-US')}m`];
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

    /* - */
    mergeCitiesFunc();
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

const mergeCitiesFunc = () => {
    if (mergedCityDATA.length > 0) return;
    const clonedData = structuredClone(cityDATA);
    for (let i = 0; i < clonedData.length; i++) {
        const ccity: JSON_BASIC_TYPE[] = clonedData[i].cities;
        mergedCityDATA.push(...ccity);
    };
};

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
                const next = { of(x: CITY_OF_ARG_TYPE) { countriesID = Array.isArray(x) ? x : [x]; return getCitiesFunc(props, countriesID!) } };
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
                    of(x: CURRENCY_OF_ARG_TYPE) { countriesID = Array.isArray(x) ? x : [x]; return getCurrenciesFunc(props, countriesID!) }
                };
                return next;
            },

            /* Get properties */
            getProperties<T extends T4>(x: GET_PROPERTIES_FULL_ARG_TYPE<T>): GET_PROPERTIES_RETURN_TYPE<T> {
                let targetType = x.targetType;
                let props = x.props || '*';
                let countryId = (x as any).countryId ?? undefined;
                let targets: string[] = [];
                const next = {
                    of(x: GET_PROPERTIES_OF_ARG_TYPE<T>) {
                        targets = Array.isArray(x) ? x : [x];
                        const final = getPropertiesFunc(targetType, props, countryId, targets);
                        return final;
                    }
                };
                return next;
            },

            /* Filter */
            filter<T extends T4>(x: FILTER_FULL_ARG_TYPE<T>): FILTER_RETURN_TYPE<T> {
                let targetType = x.targetType;
                let value = x.searchValue; /* The value to search */
                let fromStart = x.fromStart || false;
                let countryId = (x as any).countryId ?? undefined;
                let filterProps: any[] | undefined = undefined;
                const next = {
                    byDefault() {
                        const final = filterFunc(targetType, value, fromStart, countryId, filterProps);
                        return final;
                    },
                    by(x: FILTER_BY_ARG_TYPE<T>) {
                        filterProps = Array.isArray(x) ? x : [x];
                        const final = filterFunc(targetType, value, fromStart, countryId, filterProps);
                        return final;
                    }
                };
                return next;
            },

            /* Localize */
            async localize(x?: { fromCoords?: COORDS_TYPE, maxDistance?: number }): Promise<FUNCTION_BASIC_RETURN_TYPE> { return await localizeFunc(x) },

            /* Get distance */
            getDistance(x: COORDS_TYPE, y: COORDS_TYPE): FUNCTION_BASIC_RETURN_TYPE { return getDistanceFunc(x, y) },

            /* LANG */
            LANG: _lang_data_
        };
        return next;
    }
};

/* Export default "cococity" */
const cococity: MAIN_TYPE = main;
export default cococity;