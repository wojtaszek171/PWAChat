import React, { Component } from 'react';
   import axios from 'axios';
   import Pusher from 'pusher-js';
   import ChatList from './ChatList';
   import ChatBox from './ChatBox';
   import logo from './logo.svg';
   import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      username: '',
      chats: []
    };
  }
  componentDidMount() {
        //this.setState({username: "pawel"});
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
      }

      handleTextChange(e) {
        if (e.keyCode === 13) {
          const payload = {
            username: this.state.username,
            message: this.state.text
          };
          this.setState({ text: ""})
          axios.post('http://localhost:5000/message', payload);
        } else {
          this.setState({ text: e.target.value });
        }
      }
      handleTextChange1(e) {
          this.setState({ username: e.target.value });
      }

      render() {
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
                </section>
              </div>
            );
          }
}

export default App;
