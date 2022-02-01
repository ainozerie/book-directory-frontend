import './App.css';
import Home from './Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Search from './Search';
import Add from './Add'
import Results from './Results'
import Edit from './Edit';
import Delete from './Delete';

import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='delete' element={<Delete />} />
        <Route path='edit' element={<Edit />} />
        <Route path='search' element={<Search />} />
        <Route path='results' element={<Results />} />
        <Route path='add' element={<Add/>} />
      </Routes>
    </BrowserRouter>
  }
}
