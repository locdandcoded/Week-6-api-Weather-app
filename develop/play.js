//when page loads, user sees a search area, an area where previous searches are displayed, if they have a search history, the results of their last search automatically display. There is an area for current weather and 5 day forecast
//when the user searches for a city, that city is added to the list and the weather for that city is displayed
//when the user clicks on a city, that city's weather info is displayed (current and 5 day)
//retrieve search history from localstorage and display if there is any
  //retreive the item from local localstorage
  //if there is no data, create an empty array
  //add each item to the display area
//click function for the search
//   //get the user's input
//   var userInput = $("#city-name").val().trim()
//   //validate the user's input
//   if (!userInput) {
//     return false
//   }
  //display weather data for that city
  //add city to search history
  //add city to display list
//click listener for the cities
  //retreive the value of the city that was clicked
  //display that city's weather data
//function to display weather (takes city as argument)
  //make api call for the current weather
    //update the current weather area with the result
  //make api call for 5 day forecast
    //update the 5 day forecast area with the result
      //research the results to get more info
//function to add to city display (takes city as argument)
  //cerate a link for that city and add it to the city display
  
  

$(document).ready(function(){

    $("#search").click(function(){

        var city = $("#city-name").val().trim();
        var urlForcast = "http://api.openweathermap.org/data/2.5/forecast?q="
        var imperial = "&units=imperial";
        var appID = "&APPID=7cb3430e6541ef0dad49a08bbfdee96c";    
        var queryURL = urlForcast + city + imperial + appID;
    
        if(city != ""){

            $.ajax({

                    url: urlForcast + city + imperial + appID,
                    method: "GET",
                    success: function(data){
                        console.log(data);
                        //information for current day weather
                        $("#city").text(data.city.name);
                        $("#temperature").text(data.list[1].main.temp + "°F");
                        $("#humidity").text(data.list[1].main.humidity + "%");
                        $("#wind_speed").text(data.list[1].wind.speed + "mph");
                        $("#description_weather").text(data.list[1].weather[0].description);
                        $("#weather_image").attr("src", "http://openweathermap.org/img/w/" + data.list[1].weather[0].icon + ".png");
                        
                        //card 1
                        $("#date_1").text(data.list[6].dt_txt);
                        $("#temperature1").text(data.list[6].main.temp + "°F");
                        $("#humidity1").text(data.list[6].main.humidity + "%");
                        $("#weather_image1").attr("src", "http://openweathermap.org/img/w/" + data.list[6].weather[0].icon + ".png");
                        
                        //card 2
                        $("#date_2").text(data.list[14].dt_txt);
                        $("#temperature2").text(data.list[14].main.temp + "°F");
                        $("#humidity2").text(data.list[14].main.humidity + "%");
                        $("#weather_image2").attr("src", "http://openweathermap.org/img/w/" + data.list[14].weather[0].icon + ".png");
                        
                       
                        //card 3
                        $("#date_3").text(data.list[22].dt_txt);
                        $("#temperature3").text(data.list[22].main.temp + "°F");
                        $("#humidity3").text(data.list[22].main.humidity + "%");
                        $("#weather_image3").attr("src", "http://openweathermap.org/img/w/" + data.list[22].weather[0].icon + ".png");
                        
                        //card 4
                        $("#date_4").text(data.list[30].dt_txt);                       
                        $("#temperature4").text(data.list[30].main.temp + "°F");
                        $("#humidity4").text(data.list[30].main.humidity + "%");
                        $("#weather_image4").attr("src", "http://openweathermap.org/img/w/" + data.list[30].weather[0].icon + ".png"); 
                        
                        //card 5
                        $("#date_5").text(data.list[38].dt_txt);
                        $("#temperature5").text(data.list[38].main.temp + "°F");                       
                        $("#humidity5").text(data.list[38].main.humidity + "%"); 
                        $("#weather_image5").attr("src", "http://openweathermap.org/img/w/" + data.list[38].weather[0].icon + ".png");
                    }
            
            });

        }else{
            console.log("field can not be empty");
        }

    });

});
