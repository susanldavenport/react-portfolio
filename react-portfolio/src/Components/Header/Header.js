import React, { Component } from "react"; 
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="responsive-img" 
        src="https://mackenzienz.com/wp-content/uploads/2017/07/Starlight-Festival-Header-Background-1024x337.jpg"
        alt="main-header"
        width="100%" height="auto" />
      </div>
    );
  }
}

export default Header; 