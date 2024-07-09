import { useState , useEffect ,useRef} from 'react';
import './form.css'

const Form  = (props)=>{
const cityValue = useRef();
const countryValue = useRef();
const handleEvent =(e)=>{
e.preventDefault();
}
  return (
    <div className="main-container">
      <form  name='forming' onSubmit={props.getWeather} >
        <div className="row g-3 align-items-center">
          <input
            type="text"
            placeholder="City..."
            name='city'
            ref={cityValue}
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
          <input
            type="text"
            placeholder="Country..."
            name='country'
            ref={countryValue}
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
          <button type="" className="btn btn-info" >
            Get Weather
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;

