import axios from 'axios';
import React, { Component } from 'react';
import Back from './Back';
import Button from './Button';
import Input from './Input';
import Title from './Title';
import { Link, useNavigate } from 'react-router-dom';


export default class Add extends Component {
  state = {
    isLoaded: false,
    disabled: false,
    name: '',
    author: ''
  };
  

  changehandler = (event) => {
    this.setState({[event.target.name]: event.target.value});
    
  }
  loadhandler = () => {
    axios.get('http://localhost:8080/' + this.state.bookId)
    .then(response => {
      console.log(response.data);
      this.setState({name: response.data.name, author: response.data.author, isLoaded: true, disabled: true});
    })
    .catch(function (error) {
      console.log(error);
    });

    // this.setState({request: 'success'})
  }
  clickhandler = () => {
    let data = {
      bookId: this.state.bookId,
      name: this.state.name,
      author: this.state.author
    }
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }
    };
    axios.put('http://localhost:8080/', data, axiosConfig)
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
          <Title class='title edit' content='Successfully edited!'/><Back />
        </div>
      </main>
    } else {
      return <main>
        <Title class='title heading' content='Fill in the fields:' />
        <div className='container sholders'>
          <Input disabled={(this.state.disabled)? 'disabled' : '' } class='short' name='bookId' placeholder='book ID' changehandler={this.changehandler}/>
          <Button class='submit' name='load' clickhandler={this.loadhandler} />
        </div>
        <Input name='name' placeholder='name of the book' value={this.state.name} changehandler={this.changehandler}/>
        <Input name='author' placeholder='book author' value={this.state.author} changehandler={this.changehandler}/>
          <div className='container'>
              <Button class='edit' name='edit' clickhandler={this.clickhandler}/><Back />
          </div>
      </main>;
    }
  }
}
