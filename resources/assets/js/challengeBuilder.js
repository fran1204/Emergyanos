var challengeBuilder = {
  key: "challenge",
  index: 0,
  challenge: "",
  get: function () {
    challenges.forEach(function(element, index) {
      var today = moment().format("YYYY-MM-DD");
      var element_date = moment(element.date, "DD/MM/YYYY").format("YYYY-MM-DD");

      if (moment(today).isSame(element_date)) {
        this.index = index;
      }
    }, this);

    this.challenge = challenges[this.index];
    return this;
  },
  builder: function () {
    var title = document.getElementById("challenge").innerHTML = this.challenge.challenge;
  }
};