// Donot show API KEY on your JS file 
const API_KEY = `7fa8578349902098143e10fcc99d135d`

const loadTemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch (url)
    .then( res => res.json())
    .then( data => displayTemperature(data) )
}

const displayTemperature = data =>{
    const temperature = document.getElementById('temperature');
    console.log(data.main.temp);
    temperature.innerText = data.main.temp;
}

document.getElementById('btn-search').addEventListener('click',function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    loadTemperature(city);
})

loadTemperature('dhaka')