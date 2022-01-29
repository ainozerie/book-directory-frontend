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
    console.log(this.state);
  }
  
  

  render() {
    return <main>
        <div className='line'>
            <Input name='search' placeholder='enter a name or an author' changehandler={this.changehandler} />
            <Button name='search' class='submit' /><Back />
        </div>
        <Link to='/results'><Title content='results' /></Link>
        
    </main>;
  }
}
