//const typeOfHousing = {'flat': 'Квартира', 'house': 'Дом', 'bungalow': 'Бунгало', 'palace': 'Дворец'};
const createAdvert = (ad) => {
  const adFacts = document.querySelector('#card').content.querySelector('.popup');

  const adCase = adFacts.cloneNode(true);

  adCase.querySelector('.popup__title').textContent = ad.offer.title;
  adCase.querySelector('.popup__text--address').textContent = ad.offer.address;
  adCase.querySelector('.popup__text--price').textContent = `${ad.offer.price}₽/ночь`;
  adCase.querySelector('.popup__type').textContent = (ad.offer.type);
  adCase.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`;
  adCase.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin} выезд до ${ad.offer.checkout}`;
  adCase.querySelector('.popup__features').textContent = ad.offer.features;
  adCase.querySelector('.popup__description').textContent = ad.offer.description;
  adCase.querySelector('.popup__photos').src = ad.offer.photos;
  adCase.querySelector('.popup__avatar').src = ad.author.avatar;
  adCase.querySelector('.popup__avatar').src = ad.author.avatar;

  return adCase;
}


export { createAdvert };

