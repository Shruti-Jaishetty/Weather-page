
$(document).ready(function () {
    $("#form-submit").submit(function(event) {
        performSearch(event);
    });
});

function performSearch(event) {
    var request;
    event.preventDefault();

    request = $.ajax({
        url:'https://api.openweathermap.org/data/2.5/weather',
        type:"GET",
        data:{
            q:$("#city").val(),
            appid:'2bc6423bfa732eda137409f4d8d0f853',
            units:'metric'
        }
    });

  request.done(function(response) {
    formatSearch(response);

  });
}

function formatSearch(jsonObject){
    var city_name = jsonObject.name;
    var city_weather = jsonObject.weather[0].main;
    var city_temp = jsonObject.main.temp;

    $("#city-name").text(city_name);
    $("#city-weather").text(city_weather);
    $("#city-temp").text(city_temp+ "Celcius");
}