import React from 'react'

import background from "assets/img/h.jpg"
import TextField from '@material-ui/core/TextField';
import { Button, Grid, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, ButtonBase, Tooltip} from '@material-ui/core';
import axios from 'axios';


import { useHistory } from 'react-router-dom';

// react-bootstrap components
import {
  Badge,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  CardDeck,
  Alert
} from "react-bootstrap";
import { CardHeader, responsiveFontSizes } from "@material-ui/core";
import { Link } from "react-router-dom";
import { data } from 'jquery';
import Admin from 'layouts/Admin';
import config from 'config';


const Welcome = () => {


    const [nameError, setNameError] = React.useState(false);
    const [name, setName] = React.useState('');

    const [passwordError, setPasswordError] = React.useState(false);
    const [password, setPassword] = React.useState('');

    const history = useHistory();



    const handleChange = (e, func, errorFunc) => {
        func(e.target.value);
        console.log(e.target.name,e.target.value)
          errorFunc(false)
      }


      //Validation Check After Button Click
      const handleClickOpen = () => {
        // Check if any field of Form is Empty
          if(name === '' || password=== ''){
              if(name == ''){
                  setNameError(true)
              }
              if(password === '')
              {
                setPasswordError(true)
              }
            
      }
      else{
        
        userLogin();

        
      }
      };
  



      const userLogin= async()=>{

         var adminData = {};

         adminData.username = name;
         adminData.password = password;


    await axios.post(config.base_url+"/admin/login",adminData)
      .then(res =>{
          console.log(res);
          if(res.data.code === 0 ){
            //  alert("login Successful")
              localStorage.setItem("login", true);
              localStorage.setItem('userName',res.data.data.userName)
              console.log("#########", localStorage.getItem("login"));
                history.push('/admin/dashboard');
            
          }
          else if(res.data.code === 1){
            alert("Admin account not found")
            console.log("#########", localStorage.getItem("login"));
          }
       
      }).catch(err =>{
          console.log(err)
      });


      }





    function signup(){

        history.push("/signup")

    }


    return (

   <>
    <Container fluid style={{ backgroundImage: `url(${background})`, backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"100vh",width:"100vw"}}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    <Row className="justify-content-md-center">

    <Card className="card text-center " style={{minHeight:"360px",minWidth:"320px"}}  >
    <Card.Header  className="productsgallerybar" style={{backgroundColor:"#C0392B",color:"white"}}>
                <Card.Title  style={{marginBottom:"14px", textAlign:"center" ,fontSize:"25px",fontFamily:"Baufra",color:"white"}}  > ADMIN LOGIN   </Card.Title>
                </Card.Header>
   
    <Card.Body>

        <Row style={{backgroundColor:"white",justifyContent:"center",marginTop:"25px"}}>

        <TextField
          error= {nameError}
          id="name"
          label="User Name"
          placeholder="Enter User Name" 
          autoComplete="off"
          helperText={nameError === true ? "Enter UserName" : ''}
          value={name} 
          onChange={(e)=> handleChange(e, setName, setNameError)}
          variant="outlined"
  
   
        />


        </Row>

         <Row style={{backgroundColor:"white",justifyContent:"center",marginTop:"25px"}}>

        <TextField
          error= {passwordError}
          id="name"
          type="password"
          label="Password"
          placeholder="Enter Password" 
          autoComplete="off"
          helperText={passwordError === true ? "Enter Password" : ''}
          value={password} 
          onChange={(e)=> handleChange(e, setPassword, setPasswordError)}
          variant="outlined"
  
   
        />


        </Row>

       

        <Row style={{justifyContent:"center",marginTop:"40px"}}>

        <Button variant="contained" style={{backgroundColor:"#C0392B",color:"white"}} size ="large"onClick={handleClickOpen}> Login</Button>
        </Row>

    
     
     
          
    </Card.Body>
    </Card> 
    

     </Row>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>

    </Container> 
  
         
    </>
    
    )
}

export default Welcome
