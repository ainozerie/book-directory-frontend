import React, { Component } from 'react';
import Button from './Button';
import Title from './Title';

export default class Book extends Component {
  render() {
    return <>
        <div className='book line toLeft'>
            <Button class='edit' name='edit' />
            <Button class='remove' name='remove' />
            <Title content={this.props.name + ' by ' + this.props.author} />
        </div>
    </>;
  }
}
