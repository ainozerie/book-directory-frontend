import React, { Component } from 'react';
import Title from './Title'
import Button from './Button'
import { Link } from 'react-router-dom';


export default class Home extends Component {
  
  render() {
    return <main>
        <Link to='/results'><Button name='show books' class='submit'/></Link>
    </main>;
  }
}
