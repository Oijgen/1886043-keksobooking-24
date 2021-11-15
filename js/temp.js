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

const CHECK_INS_OUTS = [
  '12:00',
  '13:00',
  '14:00',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

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

const arrayOfNotRealInformation = Array.from({ length: NUMBER_OF_APARTMENTS }, objectFactory);

const typeParallel = {
  flat:'Квартира',
  bungalow:'Бунгало',
  house:'Дом',
  palace:'Дворец',
  hotel:'Отель',
  '':'',
};
const cardFromTemplate = document.querySelector('#card').content;

function getCardClone(funcParam = 0) {
  const cloneCard = cardFromTemplate.cloneNode(true);

  const ccOfferTitle = cloneCard.querySelector('.popup__title');
  const ccOfferAddress = cloneCard.querySelector('.popup__text--address');
  const ccOfferPrice = cloneCard.querySelector('.popup__text--price');
  const ccOfferType = cloneCard.querySelector('.popup__type');
  const ccOfferCapacity = cloneCard.querySelector('.popup__text--capacity');
  const ccOfferCheckTime = cloneCard.querySelector('.popup__text--time');
  const ccOfferDescription = cloneCard.querySelector('.popup__description');
  const ccAuthorAvatar = cloneCard.querySelector('.popup__avatar');
  const ccOfferPhotos = cloneCard.querySelector('.popup__photos');
  const ccOfferPhoto = cloneCard.querySelector('.popup__photo');
  const extArrOfferPhotos = arrayOfNotRealInformation[funcParam].offer.photos;
  if (!(extArrOfferPhotos[0]==='')) {
    ccOfferPhoto.src=extArrOfferPhotos[0];

    if (extArrOfferPhotos.length>1) {
      for (let iVar=1; iVar<extArrOfferPhotos.length;iVar++) {
        const ccOfferPhotoNext = ccOfferPhoto.cloneNode(true);
        ccOfferPhotoNext.src = extArrOfferPhotos[iVar];
        ccOfferPhotos.appendChild(ccOfferPhotoNext);
      }
    }
  } else {
    extArrOfferPhotos.innerHTML='';}

  const ccOfferFeatures = cloneCard.querySelectorAll('.popup__feature');
  const extArrOfferFeatures = arrayOfNotRealInformation[funcParam].offer.features;

  for (let iVar=0; iVar<extArrOfferFeatures.length;iVar++) {
    const feature = extArrOfferFeatures[iVar];
    const featureClass = `.popup__feature--${feature}`;
    const featureListPoint = cloneCard.querySelector(featureClass);
    featureListPoint.textContent = extArrOfferFeatures[iVar];
  }

  for (let iVar=0; iVar<ccOfferFeatures.length;iVar++) {
    if (ccOfferFeatures[iVar].textContent ==='') {
      ccOfferFeatures[iVar].remove();
    }
  }

  const title=arrayOfNotRealInformation[funcParam].offer.title;
  if (!(title==='')) {ccOfferTitle.textContent = `${title}`;} else {ccOfferTitle.innerHTML='';}
  const description = arrayOfNotRealInformation[funcParam].offer.description;
  if (!(description==='')) {ccOfferDescription.textContent = `${description}`;} else {ccOfferDescription.innerHTML='';}
  const type = arrayOfNotRealInformation[funcParam].offer.type;
  if (!(type==='')) {ccOfferType.textContent = `${typeParallel[(type)]}`;} else {ccOfferType.innerHTML='';}
  const address = arrayOfNotRealInformation[funcParam].offer.address;
  if (!(address==='')) {ccOfferAddress.textContent = `${address}`;} else {ccOfferAddress.innerHTML='';}
  const price = arrayOfNotRealInformation[funcParam].offer.price;
  if (!(price==='')) {ccOfferPrice.textContent = `${price} ₽/ночь`;} else {ccOfferPrice.innerHTML='';}
  const rooms = arrayOfNotRealInformation[funcParam].offer.rooms;
  const guests = arrayOfNotRealInformation[funcParam].offer.guests;
  if ((!(rooms===''))&&(!(guests===''))) {ccOfferCapacity.textContent = `${rooms} комнаты для ${guests} гостей`;} else {ccOfferCapacity.innerHTML='';}
  const checkin = arrayOfNotRealInformation[funcParam].offer.checkin;
  const checkout = arrayOfNotRealInformation[funcParam].offer.checkout;
  if ((!(checkin===''))&&(!(checkout===''))) {ccOfferCheckTime.textContent = `Заезд после ${checkin}, выезд до ${checkout}`;} else {ccOfferCheckTime.innerHTML='';}
  const avatar = arrayOfNotRealInformation[funcParam].author.avatar;
  if (!(avatar==='')) {ccAuthorAvatar.src = avatar;} else {ccAuthorAvatar.innerHTML = '';}

  return cloneCard;
}

const cardPool = document.querySelector('#map-canvas');
cardPool.appendChild(getCardClone());
