import React, { Component } from "react";

import M from 'materialize-css';

class Nav extends Component {


 componentDidMount(){
    M.Sidenav.init(this.sidenav);
  }

  render() {
    return (
      <div className = "nav">
        <span className = "title">Lallantop /</span>
        <span className = "navtitle">{this.props.name}</span>

        <a href = "https://lallantopsandy.myshopify.com/" className = "marginleftless marglesstop">go for orders</a>
      </div>
    );
  }
}
export default Nav;