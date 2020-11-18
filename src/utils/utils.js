const Utils = {
  /**
   * Checks if value is a number.
   * @param n
   * @returns {boolean}
   */
  isNumber(n) {
    return !Number.isNaN(parseFloat(n)) && !Number.isNaN(n - 0);
  },
  /**
   * Returns the current url.
   * @returns {[]}
   */
  getCurrentUrl() {
    const { protocol } = window.location;
    const slashes = protocol.concat('//');
    return slashes.concat(window.location.host);
  },
  /**
   * Gets data after hash (#) value.
   * @returns {string}
   */
  getHashData() {
    return window.location.hash.substr(1);
  },
  /**
   * Creates a random game code.
   * @returns {string}
   */
  getRandomGameCode() {
    return this.generateRandomString(4).toUpperCase();
  },
  /**
   * Generates a random string with or without numbers.
   * @param length
   * @param includeNumber
   * @returns {string}
   */
  generateRandomString(length, includeNumber = false) {
    let charset = 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumber) {
      charset = `${charset}0123456789`;
    }
    charset = charset.match(/./g);
    let text = '';
    for (let i = 0; i < length; i += 1) {
      text += charset[Math.floor(Math.random() * charset.length)];
    }
    return text;
  },
};

export default Utils;
