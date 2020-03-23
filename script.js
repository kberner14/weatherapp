// have the browser connect with the weather API
var apiKey = "98c8d6587120aac4b2819891e6ac8be1"
var search = "Philadelphia"
var currentWeatherView = $("#current-weather-view")
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Philadelphia&appid="+apiKey;
console.log(queryURL)



// Dump JSON for current weather in Philadelphia
// Icon, temperature, humidity, wind speed, and UV index
function yourWeather() {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        // currentWeatherView.text(JSON.stringify(response, null, 2));
        // console.log(JSON.stringify(response, null, 2))
        
        var currentWeatherData = {
            cityName: response.name,
            date: response.dt,
            icon: response.weather[0].icon,
            humidityPercent: response.main.humidity,
            windMS: response.wind.speed,
            coordinates: response.coord
        }
        // console.log(currentWeatherData)
    });
}
yourWeather();

// UV is a separate API. Need Lat/Long from initial query as coordinates for new query
function yourUV() {
    var uvLocation = { lon: -75.16, lat: 39.95 };
    var queryURL = "https://api.openweathermap.org/data/2.5/uvi?appid="
    + apiKey
    + "&lat="
    + uvLocation.lat
    + "&lon="
    + uvLocation.lon;

    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
    currentWeatherView.text(JSON.stringify(response, null, 2));
    var cityUV = response.value;
    console.log("UV Index: " + cityUV );
    });
}
yourUV();
  // Dump JSON for five day forecast for Philadelphia
  
  // Log url for current weather icon to the console
  
  // Log URLs for 5-day forecast to the console


// when a user enters a city
// create a div to enter the elements of the city into
// create variables for city name, and other elements that the API gives you
// place the variables into the div