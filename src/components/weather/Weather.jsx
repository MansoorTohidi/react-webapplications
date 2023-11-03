import "./Weather.css"
import { useEffect, useState } from "react"
import Navbar from "../navbar/navbar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import search_icon from "../../Assets/search.png"
import humadity_icon from "../../Assets/humidity.png"
import cloud_icon from "../../Assets/cloud.png"
import clear_icon from "../../Assets/clear.png"
import drizzle_icon from "../../Assets/drizzle.png"
import rain_icon from "../../Assets/rain.png"
import snow_icon from "../../Assets/snow.png"


const API_KEY="321ddb6bc9d2bae47ad72dc728fd6223"

const Weather=()=>{
    const [inputValue,setInputValue]=useState("vancouver")
    const[info,setInfo]=useState([])
    const[isLoading,setIsLoading]=useState(true)
    const[wrongeData,setWrongData]=useState(false)
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=Metric&appid=${API_KEY}`
    const handleSubmit= async(e)=>{
    e.preventDefault()
    const response=await fetch(url)
    setWrongData(false)
    if(response.status==404){
        setWrongData(true)  
    }
    const data=await response.json()
    console.log(data)
    const cityname=data.name.toUpperCase()
    console.log(data.main.temp,data.name,data.sys.country,data.main.humidity)
    setInfo([])
    setInfo([data.main.temp,cityname,data.weather[0].main,data.main.humidity])
    setIsLoading(false)
   } 

   const handleChange=(e)=>{
    if(/\d/.test(e.target.value)==false){
    setInputValue(e.target.value)}
    else{
        console.log(e.target.value.length-1)
        const sliced=e.target.value.slice(0,(e.target.value.length)-1)
        setInputValue(sliced)
    }
   }

   

const classCustom="forOthers"
useEffect(()=>{
    async function fetchData (){
    const response=await fetch(url)
  
    const data=await response.json()
    
    console.log(data)
    const cityname=data.name.toUpperCase()
    console.log(data.main.temp,data.name,data.sys.country,data.main.humidity,data.weather[0].main)
    setInfo([])
    setInfo([data.main.temp,cityname,data.weather[0].main,data.main.humidity])
    setIsLoading(false)
   }
   fetchData()
   },[])

const handleWeather=()=>{
if(info[2]==="Clouds"){
    return (
        <img src={cloud_icon} alt=""  />
    )
}
else if(info[2]==="Clear"){
    return (
        <img src={clear_icon} alt=""          />
    )
}

else if(info[2]==="Fog"){
    return (
        <img src={drizzle_icon} alt="" />
    )
}
else if(info[2]==="Rain"){
    return (
        <img src={rain_icon} alt="" />
    )
}




}

   return(
    <>
    <Navbar classCustom={classCustom}/>
     <div className="container">
    <form className="form" onSubmit={handleSubmit} >
        <input type="text" placeholder="type here..." value={inputValue} onChange={handleChange} />
        <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        
        
     </form>
    
     {
        isLoading?(
            <div className="weatherInfo">
            loading...
    
            </div>)
        :wrongeData?(
            <div className="weatherInfo">
            There is no city...
    
            </div>)
        
        :(
            <div className="weatherInfo">
            <div className="iconweather">{handleWeather()}</div>
            <div className="citytemp">{Math.round(info[0])} ℃</div>
            <div className="cityname">{info[1]}</div>

            <div className="cityhumadity">
                <img src={humadity_icon} alt="" />
                {info[3]}%
                </div>
            </div>

            )
     }
   

    </div>
    </>
)
}
export default Weather