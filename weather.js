const url = 'https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=0b53bd0d339f4b897687c5e8c15615f5&units=metric';
const url_template = 'https://api.openweathermap.org/data/2.5/weather?q={}&appid=0b53bd0d339f4b897687c5e8c15615f5&units=metric';
const options = {
	method: 'GET',
};
const getWeather=(city)=>{
	const url = url_template.replace("{}",city);
	fetch(url,options).then(processWeatherData);
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
	const elem8=document.getElementById("humidity");
	elem8.innerHTML=result.main.humidity;
	const elem9=document.getElementById("pressure");
	elem9.innerHTML=result.main.pressure;
	const elem10=document.getElementById("wind");
	elem10.innerHTML=result.wind.speed;
	const elem11=document.getElementById("degree");
	elem11.innerHTML=result.wind.deg;
	const elem12=document.getElementById("sunrise");
	elem12.innerHTML=new Date(result.sys.sunrise*1000).toLocaleTimeString();
	const elem13=document.getElementById("sunset");
	elem13.innerHTML=new Date(result.sys.sunset*1000).toLocaleTimeString();
}
fetch(url,options).then(processWeatherData);
const submit=document.getElementById("submit");
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	const mycity=document.getElementById("mycity")
	getWeather(mycity.value)
}) 

const url1 = url_template.replace("{}","Tokyo");
	fetch(url1,options).then(
		async function(response){
			const result = await response.json();
			console.log(result);
			const ele1=document.getElementById("temp3");
			ele1.innerHTML=result.main.temp;
		});
		const url2 = url_template.replace("{}","Chicago");
    fetch(url2,options).then(
		async function(response){
			const result = await response.json();
			console.log(result);
			const ele1=document.getElementById("temp1");
			ele1.innerHTML=result.main.temp;
		});
		const url3 = url_template.replace("{}","Shanghai");
	fetch(url3,options).then(
		async function(response){
			const result = await response.json();
			console.log(result);
			const ele1=document.getElementById("temp2");
			ele1.innerHTML=result.main.temp;
		});
		const url4 = url_template.replace("{}","Mumbai");
	fetch(url4,options).then(
		async function(response){
			const result = await response.json();
			console.log(result);
			const ele1=document.getElementById("temp4");
			ele1.innerHTML=result.main.temp;
		});