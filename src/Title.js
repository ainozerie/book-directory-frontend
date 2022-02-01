import React from 'react';

export default function Title(props) {
  return <p className={props.class}><span>{props.id}</span> {props.content}</p>;
}
