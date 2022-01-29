import React, { Component } from 'react';
import Title from './Title'
import Button from './Button'
import { Link } from 'react-router-dom';


export default class Home extends Component {
  render() {
    return <main>
        <div className='line'>
        <Link to='/search'><Button name='find an existing book' class='submit'/></Link>
        <Title content='or' />
        <Link to='/add'><Button name='add a new one' class='delete' /></Link>

        </div>
    </main>;
  }
}
