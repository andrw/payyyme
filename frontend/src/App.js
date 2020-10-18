/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
*/


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import SimpleCard from './SimpleCard';
import MediaCard from './MediaCard';
import {
  Route,
  NavLink,
  Link,
  BrowserRouter
} from "react-router-dom";

export default function App() {
  return (
    // Anything in the UI here is rendered for ALL pages.
    <React.StrictMode>
    <BrowserRouter>
    {/* This creates the server connection. */}
    <Route path="/SimpleCard" component={SimpleCard}/> 
    </BrowserRouter>
    <CssBaseline />
    <Container maxWidth="lg">
      <MediaCard />
    </Container>
    </React.StrictMode>
  );
}

