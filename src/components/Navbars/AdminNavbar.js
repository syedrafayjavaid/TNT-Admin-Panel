
import React, { Component } from "react";
import { Navbar} from "react-bootstrap";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {
  Badge,
  Card,
  Form,

  Nav,
  Container,
  Row,
  Col,
  CardDeck,
  Alert
} from "react-bootstrap";



function Header() {


  const history = useHistory(); 



  function onClickLogout(){

    localStorage.setItem("login",false)
    history.push('/')

  }


  
  return (

    <>
  
    <Navbar expand="lg" variant="light" style={{backgroundColor:"white",height:"60px",fontFamily:"Baufra"}}className='m-auto'>
    <Navbar.Brand  className='m-auto' style={{color:"#C0392B"}} ><span>TNT ADMIN PANEL</span></Navbar.Brand>

      
      <Button variant="contained" style={{backgroundColor:"#C0392B",color:"white"}} onClick={onClickLogout}>logout</Button>
    
  
  

  </Navbar>
 
  </>
  
      
  );
}

export default Header;
