import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';
import {Route, NavLink, HashRouter} from "react-router-dom";

class Blocks extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $.noConflict();
    $( "#draggable" ).draggable();
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
