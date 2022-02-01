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
    console.log(this.state.bookId)
  }
  clickhandler = () => {
    let data = {
      bookId: this.state.bookId
    }
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }
    };
    console.log(this.state.bookId)
    axios.delete('http://localhost:8080/' + this.state.bookId)
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
          <Title class='title delete' content='Successfully deleted!'/><Back />
        </div>
      </main>
    } else {
      return <main>
        <Title class='title heading' content='Fill in the fields:' />
        <Input name='bookId' placeholder='book ID' changehandler={this.changehandler}/>
          <div className='container'>
              <Button class='delete' name='delete' clickhandler={this.clickhandler}/><Back />
          </div>
      </main>;
    }
  }
}
