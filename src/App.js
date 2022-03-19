import './App.css';
import Home from './Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Add from './Add'
import Results from './Results'
import Edit from './Edit';
import Delete from './Delete';

import React, { Component } from 'react';

export default class App extends Component {
  state = {
    // url: 'http://localhost:8080/' // when backend launched locally
    url: 'https://book-directory-backend.ainozerie1.repl.co/'
  }
  render() {
    return <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='delete' element={<Delete url={this.state.url}/>} />
        <Route path='edit' element={<Edit url={this.state.url}/>} />
        <Route path='results' element={<Results url={this.state.url}/>} />
        <Route path='add' element={<Add url={this.state.url} />} />
      </Routes>
    </BrowserRouter>
  }
}
