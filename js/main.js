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


