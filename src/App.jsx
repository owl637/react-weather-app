import React from 'react';
import { useState } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';

const App = () => {
  // 環境変数を取得
  const VITE_WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const VITE_WEATHER_API_URL = import.meta.env.VITE_WEATHER_API_URL;

  // useStateを使って、都市名を管理する
  const [city, setCity] = useState('');

  // useStateを使って、天気データを管理する
  const [weatherData, setWeatherData] = useState({
    contry: '',
    cityName: '',
    temperature: '',
    conditionText: '',
    icon: ''
  })

  // フォームの送信を処理する関数
  const getWeather = async (e) => {
    e.preventDefault();
    if (!city) return;

    try {
      const response = await fetch(`${VITE_WEATHER_API_URL}?key=${VITE_WEATHER_API_KEY}&q=${city}&api=no`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      if (data.error) throw new Error(data.error.message);
      const contry = data.location.country;
      const name = data.location.name;
      const temp_c = data.current.temp_c;
      const text = data.current.condition.text;
      const icon = data.current.condition.icon;
      // 天気データを更新
      setWeatherData({
        country: contry,
        cityName: name,
        temperature: temp_c,
        conditionText: text,
        icon: icon
      });
      setCity('');
    }
    catch (error) {
      console.error('Error fetching weather data:', error);
      alert('天気データの取得に失敗しました。');
    }
  }
  
  return (
    <div className="wrapper">
      <div className='container'>
        <Title text="React Weather App" />
        <Form setCity={setCity} city={city} getWeather={getWeather} />
        <Results results ={weatherData} />
      </div>
    </div>
  );
}
export default App;