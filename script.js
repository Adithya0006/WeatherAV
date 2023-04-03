const API_KEY='36a0bfb523msh24d4b7ab145e917p1fadbdjsnb71e18dad16'
//const API_KEY='7670a3b11449730f81b87d058022a220'
//const API_KEY='6f7ce3f9aac38160c1999b2407bbd1b3'





//start.............................................................................................
const options = {
	method: 'GET',
	headers: {

       
	
        'X-RapidAPI-Key': '36a0bfb523msh24d4b7ab145e917p1fadbdjsnb71e18dad168',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      
	}
};
const getWeather=(city)=>{

    cityName.innerHTML=city

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)

	.then(response => response.json())
	.then((response) =>{
        console.log(response)

        
         temp.innerHTML=response.temp
        temp2.innerHTML=response.temp
         feels_like.innerHTML=response.feels_like
        humidity.innerHTML=response.humidity
        humidity2.innerHTML=response.humidity
        
        wind_speed.innerHTML=response.wind_speed
        wind_speed2.innerHTML=response.wind_speed
        wind_degrees.innerHTML=response.wind_degrees
         //sunrise.innerHTML=response.sunrise
        // sunset.innerHTML=response.sunset
    })

.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
  getWeather(city.value)
})

getWeather("Hyderabad")