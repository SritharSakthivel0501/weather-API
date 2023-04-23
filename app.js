let  search = document.querySelector(".search")
let sendbtn = document.querySelector("#sends")
let main = document.querySelector(".main")
let names = document.querySelector(".names")
let weather = document.querySelector(".weather")
let temp_max = document.querySelector(".temp_max")
let temp_min = document.querySelector(".temp_min")
let wind = document.querySelector(".wind")
let sunset = document.querySelector(".sunset")

window.addEventListener("DOMContentLoaded",()=>{

sendbtn.addEventListener("click",()=>{
    let intvalue = search.value

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${intvalue}&appid=816366c90cdddb7e620a6932c7df52ff`)
    .then(data => data.json())
    .then(values=> {
        console.log(values);

        names.innerText = values.name
        weather.innerHTML = `${Math.floor(values.main.temp-273)}°C|°F <span> <i class="fa-solid fa-cloud-bolt"></i> </span>`
        temp_max.innerText = `max ${Math.floor(values.main.temp_max-273)}%`
        temp_min.innerText = `min ${Math.floor(values.main.temp_min-273)}%`
        wind.innerText = `wind ${values.wind.speed}km/h`
        sunset.innerHTML = `sunset ${values.sys.sunset} <img src="partly_cloudy.png" alt="">`  



        search.value = ""
    })
})


})