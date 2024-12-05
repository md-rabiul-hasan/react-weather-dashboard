import { useState } from 'react';
import './App.css';
import Page from './Page';
import { FavouriteProvider, LocationProvider, WeatherProvider } from './provider';

function App() {
  const [count, setCount] = useState(0);

  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <Page />
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>    
  );
}

export default App;
