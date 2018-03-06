import React, { Component } from 'react';
   import axios from 'axios';
   import Pusher from 'pusher-js';
   import ChatList from './ChatDisplayList';
   import ChatBox from './ChatInput';
   import logo from './logo.svg';
   import sendIcon from './ic_send_white_24px.svg';
  import {Route, NavLink, HashRouter} from "react-router-dom";
   import './App.css';
   import 'onsenui/css/onsenui.css';
   import 'onsenui/css/onsen-css-components.css';
   var ons = require('onsenui');
   var Ons = require('react-onsenui');
   var injectTapEventPlugin = require("react-tap-event-plugin");
   injectTapEventPlugin();
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      username: '',
      chats: []
    };
  }
  componentDidMount() {
        this.setState({username: "Anonymous"})

        const pusher = new Pusher('279efa6b9df7260189b5', {
          cluster: 'eu',
          encrypted: true
        });
        const channel = pusher.subscribe('chat');
        channel.bind('message', data => {
          this.setState({ chats: [...this.state.chats, data], test: '' });
        });
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleTextChange1 = this.handleTextChange1.bind(this);
        this.sendMessageOnClick = this.sendMessageOnClick.bind(this);
      }

      sendMessageOnClick(e){
        var self = this;
        const payload = {
          username: this.state.username,
          message: this.state.text
        };
        this.setState({ text: ""})
        axios.post('http://'+window.location.hostname+':5000/message', payload);
        fetch('/message', {
           method: 'POST',
           data: {
             username: self.state.username,
             message: self.state.text,
           }
         })
         .then(function(response) {
           //return response.json()
         }).then(function(body) {
           console.log(body);
         });
      }
      handleTextChange(e) {
        if (e.keyCode === 13) {
          var self = this;
          const payload = {
            username: this.state.username,
            message: this.state.text
          };
          this.setState({ text: ""})
          axios.post('http://'+window.location.hostname+':5000/message', payload);
          fetch('/message', {
             method: 'POST',
             data: {
               username: self.state.username,
               message: self.state.text,
             }
           })
           .then(function(response) {
             //return response.json()
           }).then(function(body) {
             console.log(body);
           });


        } else {
          this.setState({ text: e.target.value });
        }
      }
      handleTextChange1(e) {
          this.setState({ username: e.target.value });
      }

      render() {

        const mobile = window.innerWidth <= 500;

        if(mobile===true){
          return (
            <div className="App">
              <header>
              </header>
              <section>
              <div className="inputTop">
              <Ons.Input

                value={this.state.username}
                onChange={this.handleTextChange1}
                //onChange={this.handleUsernameChange}
                modifier='underbar'
                float
                placeholder='Username' />
                </div>
                <div className="listBox">
              <Ons.List className="chatList"
                dataSource={this.state.chats}
                renderRow={(row) => <Ons.ListItem><strong>{row.username}: </strong> {row.message}</Ons.ListItem>}
                renderHeader={() => <Ons.ListHeader>Welcome to chat</Ons.ListHeader>}
                />
                </div>
                <div className="inputBottom">
              <Ons.Input
                value={this.state.text}
                onChange={this.handleTextChange}
                modifier='underbar'
                float
                placeholder='Message' />
                <Ons.Button className="sendButton"  onClick={this.sendMessageOnClick} style={{margin: '6px',cursor: 'pointer'}} modifier='large'><img src={sendIcon} /></Ons.Button>
                </div>
              </section>
            </div>
          );
        }else{
            return (
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Chat</h1>
                </header>
                <section>
                  <ChatList chats={this.state.chats} />
                  <ChatBox
                    text={this.state.text}
                    username={this.state.username}
                    handleTextChange={this.handleTextChange}
                    handleTextChange1={this.handleTextChange1}
                  />
                  <div></div>
                </section>
              </div>
            );
          }
        }
}

export default Chat;