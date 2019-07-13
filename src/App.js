import React, { Component } from 'react';
import ContactList from './ContactList.js';

class App extends Component {

    state = {
        contacts: [
            {
                   "id": "karen",
                   "name": "Karen Isgrigg",
                   "handle": "karen_isgrigg",
                   "avatarURL": "http://localhost:5001/karen.jpg"
                 
            },
            {
                   "id": "richard",
                   "name": "Richard Kalehoff",
                   "handle": "richardkalehoff",
                   "avatarURL": "http://localhost:5001/richard.jpg"
                 
            },
            {
                   "id": "tyler",
                   "name": "Tyler McGinnis",
                   "handle": "tylermcginnis",
                   "avatarURL": "http://localhost:5001/tyler.jpg"
                 
            }
        ]
    }
  render() {
    return (
      <div>
        <ContactList contacts={this.state.contacts} />
        Hello World
      </div>
    );
  }
}

export default App;
