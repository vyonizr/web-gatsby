const modulo = (dividend, divisor) => {
  return ((dividend % divisor) + divisor) % divisor
}

const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
}

export { modulo, getRandomArbitrary }
