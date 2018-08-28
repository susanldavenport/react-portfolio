import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'typeface-roboto';
import './App.css';
import Button from '@material-ui/core/Button';
import Header from "./components/Header"; 
import Navbar from "./components/Nav";

class App extends Component {
  
  render() {
    return (
        <Router>
        <div className="app">
        <Header />
        <Navbar />
          {/* <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user/study" render={(props) => this.props.auth.isAuthenticated() ? <FlashCard {...this.props}/> : <Home/>} />
            <Route exact path="/user/create" render={(props) => this.props.auth.isAuthenticated() ? <CustomCard {...this.props}/> : <Home/>} />
            <Route exact path="/user/chat" render={(props) => this.props.auth.isAuthenticated() ? <ChatRoom {...this.props}/> : <Home/>} />
            <Route exact path="/callback" component={Callback} />
            <Route exact path="/unsuccessful" component={Login404} />
            <Route component={Home}/>
          </Switch> */}
          {/* <SocMed /> */}
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
