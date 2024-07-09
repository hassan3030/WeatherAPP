import './weather.css'
// import { useState , useRef , useEffect} from 'react'
const Weather =(props)=>{
  const {temp ,  city , country , humidity , description , error , handle ,children } = props
    return(
    <div className='main-weather'>
      <h4>Weather Information </h4>
      <hr />
       {temp && ( <p>Tempreture :{temp}</p>) }
       <hr />
      {temp && <p>City : {city}</p>}
      <hr />
      {temp && <p>Country : {country}</p>}
      <hr />
      {temp &&<p>Humidity : {humidity}</p>}
      <hr />
      {/* { temp &&<p>Description : {description}</p>} */}
      <hr />
      {temp && <p>{error}</p>}
    </div>    
    )
}
export default Weather;
 