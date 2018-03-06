import React, { Component } from 'react';
   import axios from 'axios';
   import Pusher from 'pusher-js';
   import ChatList from './ChatDisplayList';
   import ChatBox from './ChatInput';
   import logo from './logo.svg';
   import sendIcon from './ic_send_white_24px.svg';
   import './App.css';
   import 'onsenui/css/onsenui.css';
   import 'onsenui/css/onsen-css-components.css';
   var ons = require('onsenui');
   var Ons = require('react-onsenui');
class Blocks extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

      }


      render() {

        const mobile = window.innerWidth <= 500;

        if(mobile===true){
          return (
            <div className="App" style={{background:'blue'}}>

            </div>
          );
        }else{
            return (
              <div className="App" style={{background:'blue'}}>

              </div>
            );
          }
        }
}

export default Blocks;
