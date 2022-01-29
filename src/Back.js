import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';



export default function Back() {
  const navigate = useNavigate();
  return <>
    <Button class='back' clickhandler={()=> navigate(-1)} name='back' />
  </>;
}
