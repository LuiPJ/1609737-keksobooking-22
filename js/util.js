const getRandomNumber = (min, max) => {
  if (min >= max || min < 0 || max < 0) {
    return -1
  }
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

const getRandomNumberComma = (min, max, comma) => {
  if (min >= max || min < 0 || max < 0) {
    return -1
  }
  return Number((Math.random() * (max - min) + min).toFixed(comma));
}

const getRandomValues = (arr) => {
  return arr.slice(getRandomNumber(1, arr.length - 1));
}

const getRandomItem = (item) => {
  const randomItem = item[Math.floor(Math.random() * item.length)];

  return randomItem
}

export {getRandomNumber, getRandomNumberComma, getRandomValues, getRandomItem};
