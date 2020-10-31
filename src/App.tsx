import React from 'react';
import { useStyles } from "./styles";
import './App.css';
import {SimpleList} from "./List";

function App() {
  const classes = useStyles();

  const repos = [
    'https://github.com/stdAlexTikhonov/dash_game',
    'https://github.com/stdAlexTikhonov/contour_components',
    'https://github.com/stdAlexTikhonov/game1',
  ]
  return (
    <div className="App">
      <header className="App-header">
        <div className={classes.img} ></div>
        <p>
          Alexander Tikhonov<br />
          stdAlexTikhonov@hotmail.com <br />
          +7-977-449-03-75
        </p>
        <a
          className="App-link"
          href="Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </header>
      <h2>Latest Repos</h2>
      <SimpleList links={repos} />
    </div>
  );
}

export default App;
