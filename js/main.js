import {createAdvert} from './popup.js'
import {createAd} from './data.js'

const TYPE = ['palace', 'flat', 'house', 'bungalow'];

const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const CHEKOUT = ['12:00', '13:00', '14:00'];

const CHECKIN = ['12:00', '13:00', '14:00'];

const TITLE = ['Маленькая студия', 'Большая студия', 'Аппартаменты', 'Комната', 'Бунгало', 'Уютный домик', 'Домик у побережья'];

const DESCRIPTION= ['Цена - качество', 'Красивый вид', 'Рядом магазины', 'Близко к остановке'];

const mapCanvas = document.querySelector('#map-canvas');

const advert = createAdvert(createAd(TITLE, TYPE, CHECKIN, CHEKOUT, FEATURES, DESCRIPTION, PHOTOS));

mapCanvas.append(advert);

export { TITLE, TYPE, CHECKIN, CHEKOUT, FEATURES, DESCRIPTION, PHOTOS };
