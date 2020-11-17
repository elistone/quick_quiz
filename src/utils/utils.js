const Utils = {
  isNumber(n) {
    return !Number.isNaN(parseFloat(n)) && !Number.isNaN(n - 0);
  },
  getCurrentUrl() {
    const { protocol } = window.location;
    const slashes = protocol.concat('//');
    return slashes.concat(window.location.host);
  },
  getHashData() {
    return window.location.hash.substr(1);
  },
};

export default Utils;
