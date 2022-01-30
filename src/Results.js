import axios from 'axios';
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Back from './Back';
import Book from './Book';
import Title from './Title';



export default class Results extends Component {
  state = {
    isLoaded: false
  };
  
  componentDidMount() {
    axios.get('http://localhost:8080/all')
    .then((response) => {
      this.setState({data: response.data, isLoaded: true});
      console.log(this.state.data);
    })
    .catch(function (err) {
      console.log(err);
    })
  }
  
  
  
  render() {
    if (this.state.isLoaded) {
      const results = this.state.data.map((item, key) => {
        console.log(item, key);
        return <Book name={item.name} author={item.author} />
      });
      return <main>
        <div>
          <div className='line toCenter'>
            <Title content='Current books:' />
          </div>
          <div className='line toCenter'>
          </div>
          {results}
          <Back />
        </div>;
      </main>
      
    } else {
      return <p>Nothing</p>
    }
  }
}
