const container = document.querySelector('.wrapper')
const searchBtn = document.querySelector('.top-search button')
const weatherBox = document.querySelector('.weather-box')
const weatherDetails = document.querySelector('.weather-details')
const errorBox = document.querySelector('.not-found')


searchBtn.addEventListener('click',()=>{
    const APIKey = 'e67fe62b2bf71ba2abcbd83ad4707dee'
    const city = document.querySelector('.top-search input').value;

    if(city === "") 
        return;
    else{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`).then(response => response.json()).then(json =>{
        if(json.cod === '404'){
            container.style.height = '400px';
            weatherBox.style.display = 'none'
            weatherDetails.style.display = 'none';
            errorBox.style.display = 'block';
            errorBox.classList.add('fadeIn');
            return ;
        }
        errorBox.style.display = 'none';
        errorBox.classList.remove('fadeIn');

        const weatherImg = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity .text span');
        const wind= document.querySelector('.weather-details .wind .text span');
        switch(json.weather[0].main){
            case 'Clear' :
                weatherImg.src = 'Images/clear.png';
                break;
            case 'Clouds' :
                weatherImg.src = 'Images/cloud(1).png';
                break;
            case 'Mist' :
                weatherImg.src = 'Images/mist.png';
                break;
            case 'Snow' :
                weatherImg.src = 'Images/snow.png';
                break;
            
            case 'Rain' :
                weatherImg.src = 'Images/rain.png';
                break;
            case 'Haze' :
                weatherImg.src = 'Images/haze.png';
                break;
            case 'Dust' :
                weatherImg.src = 'Images/dust.png';
                break;
            default : 
            weatherImg.src = ''
        }
        temperature.innerHTML = `${parseInt(json.main.temp)}<span> &deg; C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)} Km/hr`;
        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        weatherBox.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');
        container.style.height = '480px';
        wind.style.fontsize = '18px'

    });
}
});