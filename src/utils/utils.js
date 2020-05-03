const Utils = {
  isNumber(n) {
    return !Number.isNaN(parseFloat(n)) && !Number.isNaN(n - 0);
  },
};

export default Utils;
