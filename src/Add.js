import axios from 'axios';
import React, { Component } from 'react';
import Back from './Back';
import Button from './Button';
import Input from './Input';
import Title from './Title';


export default class Add extends Component {
  state = {};
  
  changehandler = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
  clickhandler = () => {
    if (this.state.name !== '' && this.state.author !== '') {
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
      axios.post(this.props.url, data, axiosConfig)
      .then(response => {
        this.setState({request: response.data})
        console.log(this.state.request);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
  
  render() {
    if (this.state.request === 'successfully added') {
      return <main>
        <div className='container'>
          <Title class='title submit' content={this.state.request}/><Back />
        </div>
      </main>
    } else {
      return <main>
        <Title class='title heading' content='Fill in the fields:' />
        <Input name='name' placeholder='name of the book' changehandler={this.changehandler}/>
        <Input name='author' placeholder='book author' changehandler={this.changehandler}/>
          <div className='container buttons'>
              <Button class='submit' name='add' clickhandler={this.clickhandler}/><Back />
          </div>
      </main>;
    }
  }
}
