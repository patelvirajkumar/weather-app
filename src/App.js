import React, { useState} from 'react'
import './App.css';


const API = {
  key: "bf5315f28e2672a7126866be64f1d3ad",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery]=useState('');
  const[weather, setWeather] = useState({})

const search = (evt) =>{
  if(evt.key === "Enter"){
    fetch(`${API.base}weather?q=${query}&units=metric&APPID=${API.key}`)
    .then(res=> res.json())
    .then(result =>{ 
      setWeather(result)
     setQuery(''); 
     
    })
    .catch(error => {
     
      console.error('There was an error!', error);
  })
    

  }

 
}


const dateBuilder =(d)=>{
  let months = ["January","February","March","April","May","June","July",
  "August","September","October","November","December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear()

  return `${day} ${date} ${month} ${year}`
}

  return (
    <div className='app'>
     
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search...."
            onChange={e=>setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
           />
         </div>

{(typeof weather.main != "undefined") ? (
      <div>
        <div className="loacation-box">
           <div className="location">
              {weather.name},{weather.sys.country}
           </div>
           <div className="date">
                {dateBuilder(new Date())}
           </div>
         </div>


         <div className="weather-box">
           <div className="temp">
              {Math.round(weather.main.temp)}° C
           </div>
           <div className="weather">
               {weather.weather[0].main}
           </div>
         </div>
        </div>
       ): ('')}
   

    </div>
  );
}

export default App;
