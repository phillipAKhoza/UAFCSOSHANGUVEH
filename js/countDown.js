(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let birthday = "jan 17, 2021 09:00:00",
    countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      let now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      //do something later when date is reached
      if (distance < 0) {
        let headline = document.getElementById("headline");

        headline.innerText =
          "The Service has Started. Do join Us or live stream Our Sermon on our facebook page";

        if (distance < -1000 * 60 * 60 * 24) {
          countDown += 1000 * 60 * 60 * 24 * 7;
          headline.innerText = "The next Service will be in:";
        }
      }
      //seconds
    }, 0);
})();
