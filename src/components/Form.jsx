import React from 'react';

const Form = (props) => {
  return (
    <div className="form">
      <form>
        <input type="text" 
          name="city" 
          placeholder="都市名"
          value={props.city}
          onChange={(e) => props.setCity(e.target.value)}
          className="city-input"
          required
        />
        <button type="submit" className='get-weather' onClick={props.getWeather}>
          天気を取得
        </button>
      </form>
    </div>
  );
}
export default Form;