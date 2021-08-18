
const search=document.getElementById('searchButton');
const city_name=document.getElementById('city_name');
const temparature=document.getElementById('temparature');
const weatherCondition=document.getElementById('weatherCondition');
search.addEventListener('click',()=>{
    const inputtext=document.getElementById('inputText');
    const inp=inputtext.value; 
    console.log('https://api.openweathermap.org/data/2.5/weather?q='+inp+'&appid=b316715c826577e74ed698187f7d3c9f');
       
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inp+'&appid=b316715c826577e74ed698187f7d3c9f')
    .then(res=>res.json())
    .then(data=>{
        console.log(data.name);
        console.log(data.weather[0].description);
        console.log(data.main.temp);

        document.getElementById('city_name').innerText=data.name;
        document.getElementById('temparature').innerText=data.main.temp;
        document.getElementById('weatherCondition').innerText=data.weather[0].description;
        console.log(data);

    
    })
    
    .catch(error=>alert('wrong city name'))
})

