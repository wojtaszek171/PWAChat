import React, { Component } from 'react';
   import axios from 'axios';
   import Pusher from 'pusher-js';
   import './App.css';
   import 'onsenui/css/onsenui.css';
   import 'onsenui/css/onsen-css-components.css';
   import {Route, NavLink, HashRouter} from "react-router-dom";
   import Chat from "./chat";
   import Blocks from "./blocks";
   import chatIcon from "./ic_chat.svg";
   import blocksIcon from "./ic_picture.svg";
   var ons = require('onsenui');
   var Ons = require('react-onsenui');
class App extends Component {
  constructor(props) {
    super(props);

  }
      componentDidMount() {

      }


      render() {

        const mobile = window.innerWidth <= 500;

        if(mobile===true){
          return (
            <div>
            <HashRouter>
                <div className="content">
                  <Ons.Toolbar className="main-toolbar">
                    <div className='center'>PWA Chat</div>
                    <div className='right'>
                    <NavLink to="/">
                    <Ons.ToolbarButton style={{'vertical-align': 'middle'}}>
                      <img src={chatIcon} />
                    </Ons.ToolbarButton>
                    </NavLink>
                    <NavLink to="/blocks">
                    <Ons.ToolbarButton style={{'vertical-align': 'middle'}}>
                      <img src={blocksIcon} />
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
            );
          }
        }
}

export default App;
