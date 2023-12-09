const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apiKey = "4cf0f80a4888d6841c569b291036daed"

var input = document.getElementById("input")
var deg = document.getElementById("deg")
var place = document.getElementById("place")
var humid = document.getElementById("humid")
var speed = document.getElementById("speed")
var button = document.getElementById("button")
var weatherimg = document.getElementById("weatherimg")

async function weather(city) {
    const responce = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await responce.json()
    console.log(data);

    if (responce.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".full").style.display = "none"
    }
    else {
        deg.innerHTML = Math.round(data.main.temp) + `<sup>o</sup>c`
        place.innerHTML = data.name
        humid.innerHTML = data.main.humidity + ' %'
        speed.innerHTML = data.wind.speed + " km/h"

        if (data.weather[0].main == 'Clouds') {
            weatherimg.src = "img/clouds.png"
        }
        else if (data.weather[0].main == 'Rain') {
            weatherimg.src = "img/rain.png"
        }
        else if (data.weather[0].main == 'Drizzle') {
            weatherimg.src = "img/drizzle.png"
        }
        else if (data.weather[0].main == 'Clear') {
            weatherimg.src = "img/clear.png"
        }
        else if (data.weather[0].main == 'Mist') {
            weatherimg.src = "img/mist.png"
        }
        document.querySelector(".error").style.display = "none"
        document.querySelector(".full").style.display = "block"

    }


}
button.addEventListener("click", () => {
    weather(input.value)
})


