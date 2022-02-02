import axios from 'axios';
import React, { Component } from 'react';
import Back from './Back';
import Button from './Button';
import Input from './Input';
import Title from './Title';
import { Link } from 'react-router-dom';


export default class Add extends Component {
  state = {};
  
  changehandler = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
  clickhandler = () => {
    axios.delete(this.props.url + this.state.bookId)
    .then(response => {
      this.setState({request: response.data})
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  render() {
    if (this.state.request === 'Successfully deleted!') {
      return <main>
        <div className='container'>
          <Title class='title delete' content={this.state.request}/><Back />
        </div>
      </main>
    } else if (this.state.request === 'Not found') {
        return (
            <main>
              <Title class='title delete' content={this.state.request} />
              <div className='container buttons'>
                <Link to='/add'><Button name='add' class='add'/></Link>
                <Back />
              </div>
            </main>
          )
    } else {
      return <main>
        <Title class='title heading' content='Fill in the fields:' />
        <Input name='bookId' placeholder='book ID' changehandler={this.changehandler}/>
          <div className='container buttons'>
              <Button class='delete' name='delete' clickhandler={this.clickhandler}/><Back />
          </div>
      </main>;
    }
  }
}
