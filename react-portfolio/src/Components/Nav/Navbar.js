import React, { Component, PureComponent } from "react"; 
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import './navbar.css';


export default class Navbar extends PureComponent {
  render() {
    return (
      <AppBar className= "navBtns" position="static">
        <div>
          <Button>
            <div>Home</div>
          </Button>
          <Button>
            <div>Work</div>
          </Button>
          <Button>
            <div>Words</div>
          </Button>
          <Button>
            <div>Contact</div>
          </Button>
        </div>
      </AppBar>
    );
  }
}

// export default Navbar; 