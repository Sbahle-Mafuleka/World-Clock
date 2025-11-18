function updateTime() {
  // Tokyo
  let tokyoDate = document.querySelector("#Tokyo .Date");
  let tokyoTime = document.querySelector("#Tokyo .Time");

  tokyoDate.innerHTML = moment().tz("Asia/Tokyo").format("dddd DD MMMM YYYY");
  tokyoTime.innerHTML =
    moment().tz("Asia/Tokyo").format("hh:mm:ss") +
    " <small>" +
    moment().tz("Asia/Tokyo").format("A") +
    "</small>";

  // Paris
  let parisDate = document.querySelector("#Paris .Date");
  let parisTime = document.querySelector("#Paris .Time");

  parisDate.innerHTML = moment().tz("Europe/Paris").format("dddd DD MMMM YYYY");
  parisTime.innerHTML =
    moment().tz("Europe/Paris").format("hh:mm:ss") +
    " <small>" +
    moment().tz("Europe/Paris").format("A") +
    "</small>";

  // Los Angeles
  let laDate = document.querySelector("#Los\\ Angeles .Date");
  let laTime = document.querySelector("#Los\\ Angeles .Time");

  laDate.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("dddd DD MMMM YYYY");
  laTime.innerHTML =
    moment().tz("America/Los_Angeles").format("hh:mm:ss") +
    " <small>" +
    moment().tz("America/Los_Angeles").format("A") +
    "</small>";
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  if (!cityTimeZone) return; // if user selects "Select a city..", do nothing

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];

  let cityElement = document.querySelector(".City");

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
