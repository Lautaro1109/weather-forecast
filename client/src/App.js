import WeatherForecast from './components/WeatherForecast'
import WeatherData from './components/WeatherData';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/weather" element={<WeatherForecast />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
