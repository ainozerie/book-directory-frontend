import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Back from './Back';
import Book from './Book';
import Title from './Title';
import Button from './Button';


export default class Results extends Component {
  state = {
    isLoaded: false
  };
  
  componentDidMount() {
    axios.get(this.props.url + 'all')
    .then(response => {
      this.setState({data: response.data, isLoaded: true});
    })
    .catch(function (err) {
      console.log(err);
    })
  }
  
  render() {
    if (this.state.isLoaded && this.state.data !== 'Empty storage') {
      let results = Object.keys(this.state.data).map((item) => {
        return <Book id={item} name={this.state.data[item]['name']} author={this.state.data[item]['author']} />
      })
    return <main>
      <Title class='title heading' content='Avaliable books:' />
      <div className='container'>
        <div className='column toRight'>
          <Link to='/add'><Button name='add' class='add'/></Link>
          <Link to='/edit'><Button name='edit' class='edit'/></Link>
          <Link to='/delete'><Button name='delete' class='delete'/></Link>
          <Back />
        </div>
        <div className='column toLeft'>
          {results}
        </div>
      </div>
    </main>
    } else {
      return (
        <main>
          <Title class='title heading' content={this.state.data} />
          <div className='container buttons'>
            <Link to='/add'><Button name='add' class='add'/></Link>
            <Back />
          </div>
        </main>
      )
    }
  }
}
