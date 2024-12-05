import { useState } from 'react';
import './App.css';
import Page from './Page';
import { WeatherProvider } from './provider';

function App() {
  const [count, setCount] = useState(0);

  return (
    <WeatherProvider>
      <Page />
    </WeatherProvider>
    
  );
}

export default App;
