const url = 'https://open-weather13.p.rapidapi.com/city/Delhi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5a0e7de777msh669231290ce300ep11f0c1jsn8de1f9e5bd04',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};
const getWeather=(city)=>{
	const url = 'https://open-weather13.p.rapidapi.com/city/'+city;
	fetch(url,options).then(processWeatherData);
// 	const mycity=document.getElementById("city")
// 	mycity.innerHTML=city
}
async function processWeatherData(response){
	const result = await response.json();
	console.log(result);
	const elem1=document.getElementById("temp");
	elem1.innerHTML=result.main.temp;
	const elem2=document.getElementById("feels_like");
	elem2.innerHTML=result.main.feels_like;
	const elem3=document.getElementById("min_temp");
	elem3.innerHTML=result.main.temp_min;
	const elem4=document.getElementById("max_temp");
	elem4.innerHTML=result.main.temp_max;
	const elem5=document.getElementById("city");
	elem5.innerHTML=result.name;
	const elem6=document.getElementById("icon");
	elem6.src="https://openweathermap.org/img/wn/"+result.weather[0].icon+".png";
	const elem7=document.getElementById("weather_description");
	elem7.innerHTML=result.weather[0].description;
}
fetch(url,options).then(processWeatherData);
const submit=document.getElementById("submit");
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	const mycity=document.getElementById("mycity")
	getWeather(mycity.value)
}) 