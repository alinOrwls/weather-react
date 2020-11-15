
import React from "react";
import Axios from "axios";
 import Loader from 'react-loader-spinner';

export default function Weather (props) {
    function handleResponse(response){
        alert(`The weather in ${response.data.name} is ${ response.data.main.temp} °C `)
    }
    let  apiKey =  "b77a5166cc2c236ed02e7fcc7edcd78c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    Axios.get(apiUrl).then(handleResponse);
    return (
         <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} 
 
      />
    );
}