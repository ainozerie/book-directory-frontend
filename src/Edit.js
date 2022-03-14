import axios from 'axios';
import React, { Component } from 'react';
import Back from './Back';
import Button from './Button';
import Input from './Input';
import Title from './Title';


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
    axios.get(this.props.url + this.state.bookId)
    .then(response => {
      if (response.data === 'Not found') {
        this.setState({request: response.data});
      } else {
        this.setState({name: response.data.name, author: response.data.author, isLoaded: true, disabled: true});
      }
    })
    .catch(function (error) {
      console.log(error);
    });
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
    axios.put(this.props.url, data, axiosConfig)
    .then(response => {
      this.setState({request: response.data})
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  render() {
    if (this.state.request === 'Not found') {
      return <main>
          <Title class='title delete' content={this.state.request}/><Back />
      </main>
    } else if (this.state.request === 'successfully updated') {
      return <main>
        <div className='container'>
          <Title class='title edit' content={this.state.request}/><Back />
        </div>
      </main>
    } else {
      return <main>
        <Title class='title heading' content='Fill in the fields:' />
        <div className='container sholders'>
          <Input disabled={(this.state.disabled)? 'disabled' : '' } class='' name='bookId' placeholder='book ID' changehandler={this.changehandler}/>
        </div>
        <Input name='name' placeholder='name of the book' value={this.state.name} changehandler={this.changehandler}/>
        <Input name='author' placeholder='book author' value={this.state.author} changehandler={this.changehandler}/>
          <div className='container buttons'>
              <Button class='submit' name='get' clickhandler={this.loadhandler} />
              <Button class='edit' name='edit' clickhandler={this.clickhandler}/><Back />
          </div>
      </main>;
    }
  }
}
