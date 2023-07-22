import axios from "axios"
import { useState } from "react"


const Api = {
  key: 'f969575c3c4713fefcb76e92d1db849e',
  base: 'https://api.openweathermap.org/data/2.5/',
}

function Main() {
  const [search, setSearch] = useState('')
  const [weather, setWeather] = useState({})
  // const [condition,setCondition]=useState=('')
  let condition = document.getElementById('txt')


  const clicked = () => {
    fetch(`${Api.base}weather?q=${search}&units=metric&appid=${Api.key}`)
      .then(res => res.json())
      .then((result) => {
        console.log(result)
        setWeather(result)
      })
    // if (condition == 'rain') {
    //   document.getElementById('rain').style.display = 'flex'
    // } else if (condition == 'thunderstorm') {
    //   document.getElementById('thunderstorm').style.display = 'flex'

    // }
  }
  return (
    <main className="w-full h-[100vh]">
      <section className="w-[70%] m-auto pt-[20px] flex flex-wrap justify-center">
        {/* header */}
        <h1 className="w-full text-center text-[40px] font-semibold text-[whitesmoke]">Weather Forcast</h1>
        {/* searchbox */}
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="mt-8 w-[40%] rounded-xl bg-[gainsboro] h-[40px] focus:shadow-[-4px_4px_35px_rgba(0,0,0,0.64)] duration-300 outline-none pl-4" type="text" name="search" id="search" placeholder="🔎 Serach for a city or airport..." />
        <button onClick={clicked} className="bg-[gainsboro] h-[40px] w-[100px] rounded-xl mt-8 ml-2 hover:bg-[black] hover:text-[white] duration-300">Search</button>
      </section>
      {
        typeof weather.main != 'undefined' ?

          <div className="w-[45%]  flex flex-wrap justify-center m-auto mt-[80px] rounded-[20px] bg-[#d8d3d394]">

            {/* location */}
            <section className="w-full flex justify-between">
              <div className="w-[57%] ">
                <p className="text-end text-[35px] font-normal mt-1 text-[white]">{weather.name}</p>
              </div>
              <span className="w-[43%]  flex items-center justify-center">
                {/* <i id="rain" className="hidden text-[white] text-[60px] bi bi-cloud-rain pl-[60px]"></i>
                <i id="cloud" className="hidden text-[white] text-[60px] pl-[60px] bi bi-cloud"></i>
                <i id="sunny" className="hidden text-[white] text-[60px] pl-[60px] bi bi-brightness-high-fill"></i>
                <i id="fog" className="hidden text-[white] text-[60px] pl-[60px] bi bi-cloud-fog"></i>
                <i id="haze" className="hidden text-[white] text-[60px] pl-[60px] bi bi-cloud-haze"></i>
                <i id="snow" className="hidden text-[white] text-[60px] pl-[60px] bi bi-cloud-snow"></i>
                <i id="thunderstorm" className="hidden text-[white] text-[60px] pl-[60px] bi bi-lightning"></i>
                <i id="moon" className="hidden text-[white] text-[60px] pl-[60px] bi bi-moon"></i> */}
                {/* {weather.weather[0].icon} */}
              </span>
            </section>
            {/* temperature */}
            <p className="w-full text-center text-[65px] font-normal text-[white] ">{weather.main.temp}°C</p>

            {/* condition(sunny...) */}
            <p id="txt" className="w-full text-center text-[35px] font-normal text-[white]">{weather.weather[0].main}</p>
            <div className=" w-full flex justify-evenly p-2 my-1">
              <p className="w-full text-center text-[20px] font-normal ">Pressure: {weather.main.pressure}</p>
              <p className="w-full text-center text-[20px] font-normal ">High: {weather.main.temp_max}</p>
              <p className="w-full text-center text-[20px] font-normal ">Low: {weather.main.temp_min}</p>
              <p className="w-full text-center text-[20px] font-normal ">Humidity: {weather.main.humidity}</p>
            </div>
            <div className=" w-full flex p-2 my-1">
              <p className="w-full text-center text-[20px] font-normal">Visibility: {weather.visibility}</p>
              <p className="w-full text-center text-[20px] font-normal">Wind speed: {weather.wind.speed}</p>
              <p className="w-full text-center text-[20px] font-normal">wind degree: {weather.wind.deg}</p>
            </div>
            <div className=" w-full flex justify-evenly p-2 my-1">
              <p className="text-[20px] font-normal">Sunrise: {weather.sys.sunrise}</p>
              <p className="text-[20px] font-normal">Sunset: {weather.sys.sunset}</p>
            </div>
            <p className="w-full text-center text-[20px] font-normal my-2">Feels like: {weather.main.feels_like}°C</p>

            <p className="w-full text-center text-[25px] font-normal my-1">{weather.weather[0].description}</p>
          </div>

          :
          ""
      }


    </main>
  )
}

export default Main













