import React, { FC, useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setAlert } from '../store/actions/alertActions';
import { getWeather, setLoading } from '../store/actions/weatherActions';
import Typist  from 'react-typist';

interface SearchProps {
  title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(city.trim() === '') {
      return dispatch(setAlert('City is required!'));
    }

    dispatch(setLoading());
    dispatch(getWeather(city));
    setCity('');
  }

  return(
    <><div className="hero has-text-centered">
      <div className="hero-body">
        <div className="container">
          <Typist className="title has-text-white-bis" avgTypingDelay={120}>
            React Feather
            <Typist.Backspace count={7} delay={500}/>
            <span> Weather By Akshay Bisht</span>
          </Typist>

          <h5 className="subtitle mt-4 has-text-bold" style={{ color: 'indigo' }}>{title}</h5>
          <form className="py-5" onSubmit={submitHandler}>
            <input
              type="text"
              className="input has-text-centered mb-2"
              placeholder="Enter city name"
              style={{ maxWidth: 300 }}
              value={city}
              onChange={changeHandler} />
            <button className="button is-primary is-fullwidth" style={{ maxWidth: 200, margin: '10px auto', borderRadius: 30 }}>&#128269;&nbsp;Search</button>
          </form>
        </div>
      </div>
    </div></>
  );  
}

export default Search;
