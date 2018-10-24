import React, { Component } from 'react';
import friendster from '../Images/friendsterLogo.png'
import './Auth.css'
import { withRouter } from 'react-router'

// import logo from './logo.svg';
// import './App.css';

class Auth extends Component {
    constructor(props){
        super(props)

        this.login=this.login.bind(this)
    }   
 
    login(){
     let {REACT_APP_DOMAIN, REACT_APP_CLIENT_ID} = process.env
     //url = 'http://localhost:3000/auth/callback'
     let url = `${encodeURIComponent(window.location.origin)}/auth/callback`
     window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
 }


  render() {
    return (
    <div className="App1">
      <div className="loginbox">
       <img src={friendster} alt="" width="20%" height="30%"/>
       <div><h1>Helo</h1></div>
       <button onClick={this.login}>Login/Register</button>

      </div>
    </div>  
    );
  }
}

export default withRouter(Auth);