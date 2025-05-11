const Results = (props) => {
  return (
    <div>
      <div className="results">
        {props.results.country && (
          <p className="country">
            国: {props.results.country}
          </p>
        )}
        {props.results.cityName && (
          <p className="city-name">
            都市名: {props.results.cityName}
          </p>
        )}
        {props.results.temperature && (
          <p className="temperature">
            気温: {props.results.temperature} °C
          </p>
        )}
        <div className="condition">
          {props.results.conditionText && (
            <p className="condition-text">
              <span>天気: </span>
              {props.results.icon && (
                <img src={props.results.icon} alt="Weather Icon" />
              )}
              {props.results.conditionText}
            </p>
          )}
        </div>
        {props.results.error && (
          <p className="error">
            エラー: {props.results.error}
          </p>
        )}
      </div>
    </div>
  );
}
export default Results;