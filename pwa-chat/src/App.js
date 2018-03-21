import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';
import {Route, NavLink, HashRouter} from "react-router-dom";
import Chat from "./chat";
import Blocks from "./blocks";
import chatIcon from "./ic_chat.svg";
import blocksIcon from "./ic_picture.svg";
var Ons = require('react-onsenui');


class App extends Component {
  componentDidMount(){
    $('#draggable').draggable();

  }

  render() {
    function detectmob() {
           if(window.innerWidth <= 800) {
             return true;
           } else {
             return false;
           }
        }
        if(detectmob()===true){
          return (<div style={{height:"100%"}}>
            <HashRouter>
                <div className="content" style={{height:"100%"}}>
                  <Ons.Toolbar className="main-toolbar">
                    <div className='center'>PWA Chat</div>
                    <div className='right'>
                    <NavLink to="/">
                    <Ons.ToolbarButton style={{'vertical-align': 'middle'}}>
                      <img src={chatIcon} alt="chatIcon"/>
                    </Ons.ToolbarButton>
                    </NavLink>
                    <NavLink to="/blocks">
                    <Ons.ToolbarButton style={{'vertical-align': 'middle'}}>
                      <img src={blocksIcon} alt="blocksIcon"/>
                      {/*<Ons.Icon icon='ion-navicon, material:md-menu'></Ons.Icon>*/}
                    </Ons.ToolbarButton>
                    </NavLink>
                    </div>
                  </Ons.Toolbar>
                  <Route exact path="/" component={Chat}/>
                  <Route path="/blocks" component={Blocks}/>
                </div>
            </HashRouter>
            </div>
        );
      }else{
          return (

            <div className="App">
              <content>
              <HashRouter>
                        <div>
                          <ul className="header">
                            <li><NavLink exact to="/">Home</NavLink></li>
                            <li><NavLink to="/blocks">Stuff</NavLink></li>
                          </ul>
                          <div className="content">
                            <Route exact path="/" component={Chat}/>
                            <Route path="/blocks" component={Blocks}/>
                          </div>
                        </div>
              </HashRouter>
              </content>
            </div>
    );
  }
}
}

export default App;
