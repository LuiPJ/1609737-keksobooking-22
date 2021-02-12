'use strict';

const getRandomNumber = (min, max) => {
  if (min >= max || min < 0 || max < 0) {
    return -1
  }
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
// from
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const getRandomNumberComma = (min, max, comma) => {
  if (min >= max || min < 0 || max < 0) {
    return -1
  }
  return Number((Math.random() * (max - min) + min).toFixed(comma));
}
// from
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

export {getRandomNumber, getRandomNumberComma}

const randomValues = (arr) => {
  return arr.slice(getRandomNumber(1, arr.length - 1));
}

const TYPE = ['palace', 'flat', 'house', 'bungalow'];

const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg.'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const CHEKOUT = ['12:00', '13:00', '14:00'];

const CHECKIN = ['12:00','13:00','14:00'];

const TITLE = ['Маленькая студия','Большая студия','Аппартаменты','Комната','Бунгало','Уютный домик','Домик у побережья'];

const DESCRIPTION= ['Цена - качество','Красивый вид','Рядом магазины','Близко к остановке'];

const MakeRandomItems = () => {
  const LocationX = getRandomNumberComma(35.65000, 35.70000, 5);
  const LocationY = getRandomNumberComma(139.70000, 139.80000, 5);

  const addItems = {
    author: {
      avatar: `img/avatars/user0${getRandomNumber(1, 8)}.png`,
    },
    offer: {
      title: randomValues(TITLE),
      address: LocationX + ', ' + LocationY,
      price: getRandomNumber(5000, 50000),
      type: randomValues(TYPE),
      rooms: getRandomNumber(1, 10),
      guests: getRandomNumber(1, 5),
      checkin: randomValues(CHECKIN),
      checkout: randomValues(CHEKOUT),
      features: randomValues(FEATURES),
      description: randomValues(DESCRIPTION),
      photos: randomValues(PHOTOS),
    },
  };
  return addItems;
}

MakeRandomItems();
