var cityEl = document.querySelector("#user-city");
var cityInputEl = document.querySelector("#city");
const currentPicEl = document.getElementById("img");
const currentTempEl = document.getElementById("temp");
const currentHumidityEl = document.getElementById("humidity");
const currentWindEl = document.getElementById("wind-speed");
const currentUVEl = document.getElementById("UV-index");
const APIKey = "84b79da5e5d7c92085660485702f4ce8";


var formSubmitHandler = function(event) {
    // prevent page from refreshing
    event.preventDefault();
  
    // get value from input element
    var city = cityInputEl.value.trim();
  
    if (city) {
      getCity(city);
    } 
  };


var getCity = function(city) {
   
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}" + city ;
  
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

 // Get 5 day forecast  //

  // Get history from local storage //

