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

  // Los Angeles (ID fixed)
  let laDate = document.querySelector("#LosAngeles .Date");
  let laTime = document.querySelector("#LosAngeles .Time");

  laDate.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("dddd DD MMMM YYYY");
  laTime.innerHTML =
    moment().tz("America/Los_Angeles").format("hh:mm:ss") +
    " <small>" +
    moment().tz("America/Los_Angeles").format("A") +
    "</small>";

  // Durban ✅ (NOW updates every second)
  let durbanDate = document.querySelector("#Durban .Date");
  let durbanTime = document.querySelector("#Durban .Time");

  durbanDate.innerHTML = moment()
    .tz("Africa/Johannesburg")
    .format("dddd DD MMMM YYYY");

  durbanTime.innerHTML =
    moment().tz("Africa/Johannesburg").format("hh:mm:ss") +
    " <small>" +
    moment().tz("Africa/Johannesburg").format("A") +
    "</small>";
}

// run immediately
updateTime();

// update every second
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (!cityTimeZone) return;

  let cityName = cityTimeZone.split("/")[1].replace("_", " ");
  let cityTime = moment().tz(cityTimeZone).format("hh:mm:ss A");
  let cityDate = moment().tz(cityTimeZone).format("dddd DD MMMM YYYY");

  let cityElement = document.querySelector("#city-display");
  cityElement.innerHTML = `
    <div class="City">
      <h2>${cityName}</h2>
      <div class="Date">${cityDate}</div>
      <div class="Time">${cityTime}</div>
    </div>
    <a href="/">Back to all cities</a>
  `;
}

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
