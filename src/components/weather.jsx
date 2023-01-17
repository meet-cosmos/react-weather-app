import { useEffect, useState } from "react"
import axios from "axios";

const Weather = ()=>{
    const [city, updateCity] = useState("");
    const [data, updateData] = useState("");
    const WeatherApi = async ()=>{
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=50adc09477fc733df0250494c3278d16`).then((weatherdata)=>{
            updateData(weatherdata.data.main)
            console.log(weatherdata.data)
        }).catch((e)=>{
            console.log(e)
        }).finally(()=>{
            console.log("finally")
        })
    }
    WeatherApi()
    
    return(
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputFeild" placeholder="Enter City" onChange={(e)=>updateCity(e.target.value)}/>
                </div>
            </div>

            {!city ? <p>No Data found</p> : <div className="info">
                <h2 className="location">
                    <i class="fas fa-street-view"></i>{city}
                </h2>
                <h1 className="temp">
                {`${Math.round(data.temp - 273.15)} °Cel`}
                </h1>
                <h3 className="tempmin_max">Min : {`${Math.round(data.temp_min - 273.15)} °Cel`} | Max : {`${Math.round(data.temp_max - 273.15)} °Cel`}</h3>
            </div>
}
            
        </>
    )
}

export default Weather