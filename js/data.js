import { getRandomNumber, getRandomNumberComma, getRandomValues, getRandomItem} from './util.js'

const createAd = (TITLE, TYPE, CHECKIN, CHEKOUT, FEATURES, DESCRIPTION, PHOTOS) => {
  const locationX = getRandomNumberComma(35.65000, 35.70000, 5);
  const locationY = getRandomNumberComma(139.70000, 139.80000, 5);
  const type = getRandomItem(TYPE);

  const addItems = {
    author: {
      avatar: `img/avatars/user0${getRandomNumber(1, 8)}.png`,
    },
    offer: {
      title: getRandomValues(TITLE),
      address: locationX + ', ' + locationY,
      price: getRandomNumber(5000, 50000),
      type: type,
      rooms: getRandomNumber(1, 10),
      guests: getRandomNumber(1, 5),
      checkin: getRandomValues(CHECKIN),
      checkout: getRandomValues(CHEKOUT),
      features: getRandomValues(FEATURES),
      description: getRandomValues(DESCRIPTION),
      photos: getRandomValues(PHOTOS),
    },
    location: {
      x: locationX,
      y: locationY,
    },
  };
  return addItems;
}

//const ads = new Array(10).fill(null).map(() => createAd());

export { createAd };
