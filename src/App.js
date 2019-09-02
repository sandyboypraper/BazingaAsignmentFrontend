import React from 'react';

import './App.css';

import { Row , Col } from 'react-bootstrap'

import Nav from './Components/nav';
import Product from './Components/product';
import Edit from './Components/edit';

import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route'; 

function App() {
  return (
    <Router>


      <Route path = "/" exact strict render = {(props) => {
        return (

 <div>
 <Nav name = "orders"></Nav>
 <Row className = "margmoretop">
   <Col xs = {12} sm = {12} md = {{span : 10 , offset : 1}}>

   {props.location.state ? (<Product blushsid = {props.location.state.id}></Product>) : (<Product blushsid = "0"></Product>)}
   

   </Col>
 
 
 </Row>
 </div>
        )
      }} />


      <Route path = "/edit/:id" exact strict component = {Edit} />

   </Router>
  );
}

export default App;
