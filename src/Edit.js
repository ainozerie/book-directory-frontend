import React, { Component } from 'react';
import Back from './Back';
import Button from './Button';
import Input from './Input';
import Title from './Title';


export default class Edit extends Component {
  state = {};

  changehandler = (event) => {
    this.setState({[event.target.name]: event.target.value});
    console.log(this.state);
  }

  render() {
    return <main>
        <Title content='edit the fields' />
        <Input name='name' placeholder='name of the book' changehandler={this.changehandler}/>
        <Input name='author' placeholder='book author' changehandler={this.changehandler}/>
        <div className='line'>
            <Button class='submit' name='edit' /><Back />
        </div>
    </main>;
  }
}
