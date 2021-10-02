import React from 'react';
import useFetch from 'react-fetch-hook';
import logo from './logo.svg';
import './App.css';
import { Data } from './types';

const API_URL = 'https://winged-odyssey-244910.ew.r.appspot.com/';

const App = (): React.ReactElement => {
  const { isLoading, data, error } = useFetch<Data[]>(API_URL);
  console.log(isLoading, data);
  if (error?.message) {
    return <div>{error?.message}</div>;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
