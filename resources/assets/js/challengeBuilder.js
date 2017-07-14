var challengeBuilder = {
  index: 0,
  challenge: 0,
  init: function () {
    var today = moment().format("YYYY-MM-DD");

    challenges.some(function(element, index) {
      var task_date = moment(element.date, "DD/MM/YYYY").format("YYYY-MM-DD");

      if (moment(today).isSame(task_date)) {
        this.challenge = challenges[index];
        return true;
      }
    }, this);

    var title = (this.challenge !== 0) ? this.challenge.challenge : "Hoy toca descansar";
    this.build(title);
  },
  build: function (title) {
    document.getElementById("challenge").innerHTML = title;
  }
};