import React, { useState } from 'react';
import axios from 'axios';
import { Photo } from './component';
import { baseUrl, config } from './utils';
import { themes, ThemeContext, Theme } from './theme';
import './App.css';

axios.defaults.baseURL = baseUrl;

axios.defaults.headers = {
  Authorization: `Client-ID ${config.accessKey}`,
};

const App = () => {
  const [theme = themes.light, setTheme] = useState<Theme>();

  const toggleTheme = () => {
    setTheme(themes.light === theme ? themes.black : themes.light);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Photo />
    </ThemeContext.Provider>
  );
};

export default App;
