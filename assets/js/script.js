var cityEl = document.querySelector("#user-city");
var cityInputEl = document.querySelector("#city");

const currentPicEl = document.getElementById("img");
const currentTempEl = document.getElementById("temp");
const currentHumidityEl = document.getElementById("humidity");
const currentmntWindEl = document.getElementById("wind-speed");
const currentUVEl = document.getElementById("UV-index");
var cityContainerEl = document.querySelector("#forcast-container");
var searchTerm = document.querySelector("#search");

const APIKey = "84b79da5e5d7c92085660485702f4ce8";


var formSubmitHandler = function(event) {
 
    event.preventDefault();
  
    // get value from input element
    var city = cityInputEl.value.trim();
  
    if (city) {
      getCity(city);
  
    repocContainerEl.textContent = "";
    nameInputEl.value = "";

  };

var getCity = function(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + APIKey;
    fetch(apiUrl)
      .then(function(response) {
        if (response.ok) {
          console.log(response);
          response.json().then(function(data) {
            console.log(data);
            displaycity(data, city);
          });
       
  };
}
      // Daily forcast//
      const currentDate = new Date(response.data.dt * 1000);
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
      nameEl.innerHTML = response.data.name + " (" + month + "/" + day + "/" + year + ") ";

 // Get 5 day forecast  //
 
 }
  // Get history from local storage //

  searchEl.addEventListener("click", function () {
    const searchTerm = cityEl.value;
    getWeather(searchTerm);
    searchHistory.push(searchTerm);
    localStorage.setItem("search", JSON.stringify(searchHistory));
    renderSearchHistory();
});


// add event listeners 
cityEl.addEventListener("search", formSubmitHandler);