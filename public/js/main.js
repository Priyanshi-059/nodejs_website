const submitbutton = document.getElementById('submitbutton');

const cityName = document.getElementById("cityName");

const city_name = document.getElementById("city_name");

const getinfo =async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal ===""){
        city_name.innerText = `plz write the name before search`
    }else{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=92912d567301065d17a7b5cba7e7043a`
            const response = await fetch(url);   
            console.log(response);        
        } catch (error) {
            city_name.innerText = `plz enter teh city name properly`
        }
    }
}


submitbutton.addEventListener('click',getinfo);