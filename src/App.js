import React, { Component } from 'react';
import ContactList from './ContactList.js';
import * as ContactsAPI from './utils/ContactsAPI.js';
import { Route } from "react-router-dom";
import CreateContact from "./CreateContact";

class App extends Component {

    state = {
        contacts: [],
        screen: "list"
    }
    componentDidMount() {
        ContactsAPI.getAll().then((contacts) => {
            this.setState(() => ({
                contacts: contacts
            }))
        })
    }

    DeleteContact = (contact) => {
        this.setState((currentState) => ({
            contacts: currentState.contacts.filter((c) => {
                return c.id !== contact.id
            })
        }));

        ContactsAPI.remove(contact);
    }

    createContact = (contact) => {
        ContactsAPI.create(contact).then((contact) => {
            this.setState((currentState) => ({
                contacts: currentState.contacts.concat([contact])
            }))
        })
    }

    render() {
        return (
          <div>
            <Route exact path="/" render={
                () => (
                    <ContactList 
                    onDeleteContact={this.DeleteContact}
                    contacts={this.state.contacts} />
                )
            } /> 
            <Route path="/create" render={({ history }) => (
                <CreateContact onCreateContact={(contact) => {
                    this.createContact(contact);
                    history.push("/");
                }} />
            )} />
          </div>
    );
  }
}

export default App;
