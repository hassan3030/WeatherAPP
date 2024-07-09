import './App.css';
import Form from './components/Form';
import { useState } from 'react';
import Weather from './components/Weather'
import axios from 'axios';

function App() { 
  const APIURL = 'https://api.openweathermap.org/data/2.5/weather'
// 'https://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44'
// 'e36ed364400282e43250b6c4c0274d44'
const API_key ='e36ed364400282e43250b6c4c0274d44';
const [APIData , setAPIData] =useState({}) 
const [city , setCity] =useState("") 
const [country , setCountry] =useState("") 
const [error , setError] = useState('no fdata')
const fetchApiAlone = (e)=>{
  e?.preventDefault();
  setCity(e?.target.elements.city.value) 
  setCountry(e?.target.elements.country.value)
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`)
  .then((res)=>{console.log(res.data) ; setAPIData(res.data)})
  .catch(err=> setError(err));
  console.log('APIData' , APIData);
  }
  return (
    <div className = 'app-container' >
<Form getWeather={fetchApiAlone}/>
      <Weather
       temp = {APIData ?  APIData.main?.temp : 'No Data '}
       city ={APIData ? APIData?.name : 'No Data '}
       country = {APIData ? APIData?.sys?.country : 'No Data '}
       humidity = {APIData ? APIData?.main?.humidity :'No Data '}
      //  description = {APIData ? APIData?.weather[0]?.length :'qqq'}
       />            
      </div>
  );
}

export default App; 
