import React, { Component } from "react";


import Table from 'react-bootstrap/Table'   

import axios from 'axios';

import Spinner from 'react-bootstrap/Spinner';
import { Row , Col } from 'react-bootstrap';
import {Link} from "react-router-dom";

class Product extends Component {

  state = {
    isLoading : true,
    data : null,
  };

 componentDidMount(){

    console.log(this.props.blushsid); 

      axios.get('https://apilallantop.herokuapp.com/orders/')
      .then(res => {
        console.log(res.data);

        this.setState({
          isLoading : false,
          data : res.data
        })

      })
  }

  render() {

    if(this.state.isLoading)
    {
       return (
        <Row className="justify-content-sm-center">
          <Spinner animation="grow" />
        </Row>
       )
    }

    const blushid = this.props.blushsid;

    const listi = this.state.data.map(temp => {
       return(

        <tr key = {temp.id} >
          {console.log(blushid + "  " + temp.id)}
          <td>
            {temp.customername}
        </td>
        <td className = {"animated " + (blushid == temp.id ? 'flash' : '')}>{temp.contact}</td>
        <td>{temp.itemname}</td>
        <td>{temp.quantity}</td>
        <td>{temp.price}</td>
         <td><Link to = {{
          pathname : "/edit/" + temp.id,
          state : {
            contact : temp.contact,
          }
          }} >edit</Link></td>
       
      </tr>
   
       )
    })

    return (

     

      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Customer</th>
          <th>Contacts</th>
          <th>Item Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      
        {listi}

      </tbody>
    </Table>
    );
  }
}
export default Product;