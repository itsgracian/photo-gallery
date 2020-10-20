import React from 'react';
import axios from 'axios';
import { Photo } from './component';
import { baseUrl, config } from './utils';
import './App.css';

axios.defaults.baseURL = baseUrl;

axios.defaults.headers = {
  Authorization: `Client-ID ${config.accessKey}`,
};

const App = () => {
  return (
    <div className='App'>
      <Photo />
    </div>
  );
};

export default App;
