
const TITLES = [
  '1-комнатная',
  '2-комнатная',
  '3-комнатная',
  '4-комнатная',
  'студия',
  'кавалерка',
  'хостел',
  'VIP',
  'люкс',
  'президентский номер',
];

const DESCRIPTIONS = [
  'большая',
  'чистая',
  'светлая',
  'просторная',
  'пентхауз',
  'ремонт',
  'прекрасный вид',
  'нет соседей',
  'возле метро',
  'возле парка',
];

const CHECKIN_CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const numberOfApartments = 10;
let registerOfApartment = [];

function getRandomInt (min,max) {
  min = Math.abs(min);
  max = Math.abs(max);
  if (min>max) {
    const temp = min;
    min = max;
    max = temp;
  }
  return min + Math.floor(Math.random()*(max-min));
}

/*function getRandomFloat (min, max) {
  min = Math.abs(min);
  max = Math.abs(max);
  if (min>max) {
    const temp = min;
    min = max;
    max = temp;
  }
  return min + Math.random()*(max-min);
}*/

function getRandomArrayElement (array, numberOfElements) {
  return array[getRandomInt (0,numberOfElements-1)];
}

function getRandomArray (sourseArray) {
  const arrayLength = sourseArray.length;
  const maxI = getRandomInt (1,arrayLength);
  const tempArray = [];
  for (let i=0; i < maxI; i++) {
    const tempIndex = getRandomInt (1,arrayLength);
    const tempVar = sourseArray [tempIndex];
    if (!tempArray.includes(tempVar)) {
      tempArray.push(tempVar);
    }
  }
  return tempArray;
}

function getRandomLocation () {
  return {
    lat: getRandomInt(1,5)/100 + 35.65,
    lng: getRandomInt(1,9)/100 + 139.7,
  };
}

const avatarFunction = (_elem, id) => ({
  author: {
    avatar: `img/avatars/user${String(++id).padStart(2, '0')}.png`,
  },
});


const objectFactory = function() {
  return {
    author:{
      avatar: avatarFunction,
    },
    offer: {
      title: getRandomArrayElement(TITLES,numberOfApartments),
      address: {
        location:getRandomLocation(),
      },
      price: getRandomInt (3,7)*100,
      type:getRandomArrayElement(TYPE,TYPE.length),
      rooms: getRandomInt(1,4),
      guests: getRandomInt(1,5),
      checkin: getRandomArrayElement(CHECKIN_CHECKOUT,CHECKIN_CHECKOUT.length),
      checkout:getRandomArrayElement(CHECKIN_CHECKOUT,CHECKIN_CHECKOUT.length),
      features:getRandomArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS, DESCRIPTIONS.length),
      photos:getRandomArray(PHOTOS),
    },
    location: getRandomLocation(),
  };
};


registerOfApartment = Array.from({length: numberOfApartments}, objectFactory);

//console.log(registerOfApartment);
