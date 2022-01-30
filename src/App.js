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

import React, { Component } from 'react';

export default class App extends Component {
  state = {
    search: ''
  }

  searchhandler = (event) => {
    event.preventDefault();
    this.setState({search: event.target.value});
    console.log(event.target.value);
  }

  render() {
    return <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='search' element={<Search searchhandler={this.searchhandler}/>} />
        <Route path='results' element={<Results search={this.state.search}/>} />
        <Route path='add' element={<Add/>} />
      </Routes>
    </BrowserRouter>
  }
}
