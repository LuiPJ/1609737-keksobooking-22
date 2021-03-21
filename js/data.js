import { getRandomNumber, getRandomNumberComma, getRandomValues, getRandomItem} from './util.js'

const createAd = (title, type, checkin, chekout, features, description, photos) => {
  const locationX = getRandomNumberComma(35.65000, 35.70000, 5);
  const locationY = getRandomNumberComma(139.70000, 139.80000, 5);

  const addItems = {
    author: {
      avatar: `img/avatars/user0${getRandomNumber(1, 8)}.png`,
    },
    offer: {
      title: getRandomItem(title),
      address: locationX + ', ' + locationY,
      price: getRandomNumber(5000, 50000),
      type: getRandomItem(type),
      rooms: getRandomNumber(1, 10),
      guests: getRandomNumber(1, 5),
      checkin: getRandomValues(checkin),
      checkout: getRandomValues(chekout),
      features: getRandomValues(features),
      description: getRandomValues(description),
      photos: getRandomItem(photos),
    },
    location: {
      x: locationX,
      y: locationY,
    },
  };
  return addItems;
}

export { createAd };
