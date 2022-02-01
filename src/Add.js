import axios from 'axios';
import React, { Component } from 'react';
import Back from './Back';
import Button from './Button';
import Input from './Input';
import Title from './Title';
import { Link, useNavigate } from 'react-router-dom';


export default class Add extends Component {
  state = {};
  

  changehandler = (event) => {
    this.setState({[event.target.name]: event.target.value});
    console.log(this.state);
  }
  clickhandler = () => {
    let data = {
      name: this.state.name,
      author: this.state.author
    }
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }
    };
    axios.post('http://localhost:8080/', data, axiosConfig)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    this.setState({request: 'success'})
  }
  
  render() {
    if (this.state.request === 'success') {
      return <main>
        <div className='container'>
          <Title class='title submit' content='Successfully added!'/><Back />
        </div>
      </main>
    } else {
      return <main>
        <Title class='title heading' content='Fill in the fields:' />
        <Input name='name' placeholder='name of the book' changehandler={this.changehandler}/>
        <Input name='author' placeholder='book author' changehandler={this.changehandler}/>
          <div className='container'>
              <Button class='submit' name='add' clickhandler={this.clickhandler}/><Back />
          </div>
      </main>;
    }
  }
}
