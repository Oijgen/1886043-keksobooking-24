import {arrayOfNotRealInformation} from './dataGenerator.js';
arrayOfNotRealInformation;

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
