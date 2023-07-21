const genRandomName = (type) => {
  const randomNumber = genRandomNumber(10000);
  return `${Date.now()}-${randomNumber}-${type}`;
};
const genRandomNumber = (digit) => {
  const randomNumber = Math.floor(Math.random() * 10 ** digit);
  return randomNumber;
};

module.exports = {
  genRandomName,
  genRandomNumber,
};
