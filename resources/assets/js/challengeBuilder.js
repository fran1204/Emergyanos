var challengeBuilder = {
  key: "challenge",
  index: 0,
  expires: (24 * 60 * 60),
  challenge: "",
  store: function () {
    var now = Date.now();
    var schedule = now + this.expires * 1000;
    var data = { value: this.index, expires: schedule };
    localStorage.setItem(this.key, JSON.stringify(data));
  },
  check: function () {
    var now = Date.now();
    var data = localStorage.getItem(this.key);
    data = JSON.parse(data);

    if (data !== null) {
      var expires = data.expires;
      this.index = data.value;
      if (data.expires <= now) {
        return this.removeStorage();
      }
    }
    else {
      return this.store();
    }
  },
  removeStorage: function () {
    localStorage.removeItem(this.key);
    this.index++;
    return this.store();
  },
  get: function () {
    this.check();
    this.challenge = challenges[this.index];
    return this;
  },
  builder: function () {
    var title = document.getElementById("challenge").innerHTML = this.challenge.challenge;
  }
};