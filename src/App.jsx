import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import WeatherBoard from './components/weather/WeatherBoard';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid place-items-center h-screen">
      <Header />
      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </div>
  );
}

export default App;
