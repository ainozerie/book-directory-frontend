import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';



export default function Back(props) {
  const navigate = useNavigate();
  return <>
    <Link to=''><Button class='back' clickhandler={()=> { navigate(-1)}} name='back' /></Link>
  </>;
}
