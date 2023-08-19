import { fetchPhoto } from "./method";
/* Global Variables */
const apiKey = '2aabe57eb5e5845f7d24cb9add6b42ce&units=imperial';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();




document.querySelector("#generate").addEventListener("click", (e) => {
    showPhoto();
    getWeather();

})

document.querySelector("#date").addEventListener("change", (e) => {
    let date = new Date();
    let todayDay = date.getDate();
    //console.log("check", todayDay)
    let calenderDay = e.target.value.split("-")[2];
    //console.log(calenderDay)

    let countdown = Number(calenderDay) - todayDay

    document.getElementById('countdown').innerHTML = countdown + " days left";
})


const showPhoto = async() => {
    const city = document.querySelector('#city').value;
    //const imgEL = document.createElement('img');
    const pixabayData = await fetchPhoto(city);
    const imgEl = document.querySelector("#photo img");
    console.log(pixabayData.hits[0].previewURL);

    console.log("??", imgEl);
    imgEl.src = pixabayData.hits[0].previewURL;
    //imgEL.setAttributes("src", pixabayData.hits[0].previewURL);

    document.querySelector("#photo").appendChild(imgEl);


    return true;

}

const getWeather = async() => {

    //const zipcode = document.querySelector('#zip').value;
    const city = document.querySelector('#city').value;

    console.log(city)

    //const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${zipcode}&appid=${apiKey}`);
    const response = await fetch(`http://api.geonames.org/postalCodeSearchJSON?placename=${city}k&maxRows=10&username=zeley26`);
    const data = await response.json();
    // const { lat, lon } = data[0];
    console.log("check", data);
    // latitude, longitude, country,


    const response2 = await fetch(`https://api.weatherbit.io/v2.0/current?key=9c707abf75144e3e996063de8d4e3559&city=${city}`);
    const currentWeather = await response2.json();


    const response3 = await fetch(`    https://api.weatherbit.io/v2.0/forecast/daily?key=9c707abf75144e3e996063de8d4e3559&city=${city}
    `);
    const data3 = await response3.json();


    const cel = currentWeather.data[0].temp;
    const F = (cel * 9 / 5) + 32;

    document.querySelector("#weather").innerHTML = F + "°F";


    //

    console.log("weather", F);

    //fetch(url);
    /*
        const response2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
        const data2 = await response2.json();
        console.log("check", data2);

        //const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        //fetch(url);
        return data2.main.temp;
        */
}




module.exports = { showPhoto }