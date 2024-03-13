import React from 'react';
import ReactDOM from 'react-dom/client'
//import Movies from './Movies.js' // if default exported means
// import {Movies} from './Movies.js' //if normally imported
import MovieList from './MovieList';
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MovieList />)