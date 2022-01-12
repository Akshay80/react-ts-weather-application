import React, { FC } from 'react';
import { WeatherData } from '../store/types';

interface WeatherProps {
  data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {
  // const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
  const celsius = (data.main.temp - 273.15).toFixed(2);

  return(
    <><section className="section">
      <div className="container">
        <h1 className="title has-text-centered has-text-white" style={{ marginBottom: 50 }}>{data.name} - {data.sys.country}</h1>
        <div className="level" style={{ alignItems: 'flex-start' }}>
          <div className="level-item has-text-centered">
            <div>
              <p className="title has-text-white" style={{textTransform: 'uppercase'}}>{data.weather[0].description}</p>
              <p className="title has-text-white"><img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="" /></p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="title has-text-white">TEMP</p>
              <div className="title has-text-white  has-text-light mt-3">
                <p style={{fontWeight:300}}>{celsius} °C</p>
              </div>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div >
              <p className="title has-text-white">HUMIDITY</p>
              <p className="title has-text-white mt-3" style={{fontWeight:300}}>{data.main.humidity}%</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="title has-text-white">PRESSURE</p>
              <p className="title has-text-white mt-3" style={{fontWeight:300}}>{data.main.pressure}mb</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="title has-text-white">WIND</p>
              <p className="title has-text-white mt-3" style={{fontWeight:300}}>{data.wind.speed} m/s</p>
            </div>
          </div>
        </div>
      </div>
    </section></>
  );
}

export default Weather;