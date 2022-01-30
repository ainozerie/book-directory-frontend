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
        <div className='line'>
            <Link to='/results'><Button name='show all' class='submit'/></Link>
            <Title content='or' />
            <Input name='search' placeholder='enter a name or an author' changehandler={this.props.searchhandler} />
            <Link to='/results'><Button name='search' class='submit' /></Link>
        </div>
        <Back />
        
    </main>;
  }
}
