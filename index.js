function updateTime() {
  // Tokyo
  const tokyoDate = document.querySelector("#Tokyo .Date");
  const tokyoTime = document.querySelector("#Tokyo .Time");

  tokyoDate.innerHTML = moment().tz("Asia/Tokyo").format("dddd DD MMMM YYYY");
  tokyoTime.innerHTML = moment()
    .tz("Asia/Tokyo")
    .format("hh:mm:ss <small>A</small>");

  // Paris
  const parisDate = document.querySelector("#Paris .Date");
  const parisTime = document.querySelector("#Paris .Time");

  parisDate.innerHTML = moment().tz("Europe/Paris").format("dddd DD MMMM YYYY");
  parisTime.innerHTML = moment()
    .tz("Europe/Paris")
    .format("hh:mm:ss <small>A</small>");

  // Los Angeles
  // (Space must be escaped with \\ )
  const laDate = document.querySelector("#Los\\ Angeles .Date");
  const laTime = document.querySelector("#Los\\ Angeles .Time");

  laDate.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("dddd DD MMMM YYYY");
  laTime.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("hh:mm:ss <small>A</small>");
}
function updateCity(event) {
  const cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  if (!cityTimeZone) return; // if user selects "Select a city..", do nothing

  const cityName = cityTimeZone.replace("_", " ").split("/")[1];

  const cityElement = document.querySelector(".City");

  cityElement.innerHTML = `
    <div>
      <h2>${cityName}</h2>
      <div class="Date">${moment()
        .tz(cityTimeZone)
        .format("dddd DD MMMM YYYY")}</div>
    </div>
    <div class="Time">${moment()
      .tz(cityTimeZone)
      .format("hh:mm:ss")} <small>${moment()
    .tz(cityTimeZone)
    .format("A")}</small></div>
  `;
}

// run immediately
updateTime();

// update every second
setInterval(updateTime, 1000);
