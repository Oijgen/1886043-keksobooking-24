const NUMBER_OF_APARTMENTS = 10;

const LOCATION_START_LAT = 35.65;
const LOCATION_END_LAT = 35.7;
const LOCATION_START_LNG = 139.7;
const LOCATION_END_LNG = 139.8;

const NUMB_OF_ROOMS = 4;
const NUMB_OF_GUESTS = 5;
const START_PRICE = 2000;

const VAR_IMG = 'img/avatars/user';
const VAR_PNG = '.png';

import {TITLES} from './titles.js';
import {DESCRIPTIONS} from './descriptions.js';
import {CHECK_INS_OUTS} from './check_ins_outs.js';
import {TYPES} from './types.js';
import {FEATURES} from './features.js';
import {PHOTOS} from './photos.js';

let counter = 0;
let stringFirstNumber = 0;

const avatarFunction = function () {
  counter++;
  if (counter > 9) {
    stringFirstNumber++;
    counter = 0;
  }
  return {
    avatar: `${VAR_IMG}${stringFirstNumber}${counter}${VAR_PNG}`,
  };
};

function getRandomInt(StartVar, EndVar) {
  const lower = Math.ceil(Math.min(Math.abs(StartVar), Math.abs(EndVar)));
  const upper = Math.floor(Math.max(Math.abs(StartVar), Math.abs(EndVar)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomFloat(StartVar, EndVar, digits = 1) {
  const lower = Math.min(Math.abs(StartVar), Math.abs(EndVar));
  const upper = Math.max(Math.abs(StartVar), Math.abs(EndVar));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

function getRandomArrayElement(array, numberOfElements) {
  return array[getRandomInt(0, numberOfElements - 1)];
}

function getRandomArray(sourseArray) {
  const arrayLength = sourseArray.length - 1;
  const maxI = getRandomInt(1, arrayLength);
  const tempArray = [];
  for (let varI = 0; varI < maxI; varI++) {
    const tempIndex = getRandomInt(1, arrayLength);
    const tempVar = sourseArray[tempIndex];
    if (!tempArray.includes(tempVar)) {
      tempArray.push(tempVar);
    }
  }
  return tempArray;
}

function getLocation() {
  return {
    lat: getRandomFloat(LOCATION_START_LAT, LOCATION_END_LAT, 5),
    lng: getRandomFloat(LOCATION_START_LNG, LOCATION_END_LNG, 5),
  };
}

const objectFactory = function () {
  const getLocationLocal = getLocation();
  return {
    author: avatarFunction(),
    offer: {
      title: getRandomArrayElement(TITLES, NUMBER_OF_APARTMENTS),
      address: `${getLocationLocal.lat}, ${getLocationLocal.lng}`,
      price: getRandomInt(START_PRICE, START_PRICE * 3),
      type: getRandomArrayElement(TYPES, TYPES.length),
      rooms: getRandomInt(1, NUMB_OF_ROOMS),
      guests: getRandomInt(1, NUMB_OF_GUESTS),
      checkin: getRandomArrayElement(CHECK_INS_OUTS, CHECK_INS_OUTS.length),
      checkout: getRandomArrayElement(CHECK_INS_OUTS, CHECK_INS_OUTS.length),
      features: getRandomArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS, DESCRIPTIONS.length),
      photos: getRandomArray(PHOTOS),
    },
    location: getLocationLocal,
  };
};

Array.from({ length: NUMBER_OF_APARTMENTS }, objectFactory);
