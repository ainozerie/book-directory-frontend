import React, { Component } from 'react';
import Button from './Button';
import Input from './Input'
import Back from './Back'
import { Link } from 'react-router-dom';
import Title from './Title';
import axios from 'axios';



export default class Search extends Component {
  state = {};


  changehandler = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
  clickhandler = () => {
    
  }
  
  

  render() {
    return <main>
    </main>;
  }
}
