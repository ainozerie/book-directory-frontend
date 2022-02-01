import React from 'react';

export default function Input(props) {
  return <>
    <input disabled={props.disabled} className={props.class} defaultValue={props.value} name={props.name} onChange={props.changehandler} placeholder={props.placeholder}/>
  </>;
}
