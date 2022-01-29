import React from 'react';

export default function Input(props) {
  return <>
    <input name={props.name} onChange={props.changehandler} placeholder={props.placeholder}/>
  </>;
}
