import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
   import axios from 'axios';
   import Pusher from 'pusher-js';
   import ChatList from './ChatDisplayList';
   import ChatBox from './ChatInput';
   import logo from './logo.svg';
   import sendIcon from './ic_send_white_24px.svg';
   import 'jquery';
   import 'jquery-ui-dist/jquery-ui';
   import 'jquery-ui-touch-punch';
   import './App.css';
   import 'onsenui/css/onsenui.css';
   import 'onsenui/css/onsen-css-components.css';
   import $ from'jquery';
   import 'jquery-ui';
   require('jquery-ui-touch-punch');
   var ons = require('onsenui');
   var Ons = require('react-onsenui');
class Blocks extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const node = findDOMNode(this.refs.toggle);
    $(node).draggable();
    //$( "#draggable" ).draggable();
  }

      render() {

        const mobile = window.innerWidth <= 500;

        if(mobile===true){
          return (
            <div id="draggable" ref="toggle" style={{width:'50px',height:'50px', background:'#000000', cursor:'pointer'}}></div>


          );
        }else{
            return (

              <div className="App">

              <div data-role="content">

              <div id="draggable" ref="toggle" style={{width:'50px',height:'50px', background:'#000000', left:'0', top:'0', 'color':'white'}}>gdsfds</div>



              </div>
              </div>

            );

          }
        }


}

export default Blocks;
