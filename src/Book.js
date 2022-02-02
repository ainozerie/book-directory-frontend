import React, { Component } from 'react';
import Title from './Title';

export default class Book extends Component {
  render() {
    return <>
        <div className='book'>
          <Title id={this.props.id} content={this.props.name + ' by ' + this.props.author} />
        </div>
    </>;
  }
}
