import React, { Component } from "react";

import Spinner from 'react-bootstrap/Spinner';
import { Row , Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Nav from './nav'; 

import {withRouter , Redirect} from 'react-router-dom';

class Edit extends Component {

  state = {
    id : 2,
    contact : "444",
    isRedirect: false,
  };

 componentDidMount(){
  const {contact} = this.props.location.state;  
  const {id} = this.props.match.params;
  this.setState({
    id,
    contact
  })
  }

  handleChange = (event) => {

    this.setState({
      contact : event.target.value,
    })

    console.log(this.state.contact);
  }

  handleSubmit = (event) => {
    console.log(this.state.contact);
    console.log(this.state.id);

    axios.post('https://apilallantop.herokuapp.com/edit', {
      id : this.state.id,
      contact : this.state.contact
    })
    .then(
     () => this.setState({isRedirect : true})
    )
    .catch(function (error) {
      console.log(error);
    });
  }



  render() {

    

    if(this.state.isRedirect)
    {
      return(
          <Redirect to={{
            pathname: '/',
            state: { id: this.state.id }
        }}
          />
        )
    }


    return (
      <div className = "parent">
        <Nav name = "edit"></Nav>
    <div className = "child">
        <label className="animated bounceInLeft">
          Contact:
          <input type="text" className="Input-text animated bounceInLeft" value={this.state.contact} onChange={this.handleChange} />
        </label>
        <br/>
        <Button className = "animated bounceInLeft" variant="success" type="submit" onClick = {this.handleSubmit}>SUBMIT</Button>
     </div>
     </div>
    );
  }
}
export default withRouter(Edit);