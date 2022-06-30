import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Los Angeles"/>
        <footer>
          This project was coded by Faranak Sabet and is{" "}
          <a
            href="https://github.com/FaranakSabet/react-weather-app"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}


