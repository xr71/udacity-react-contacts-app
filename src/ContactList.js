import React from "react";
import { Link } from "react-router-dom";

class ContactList extends React.Component {

    state = {
        query: ""
    };

    updateQuery = (q) => {
        this.setState(() => ({
            query: q
        }))
    };

    clearQuery = () => {
        this.updateQuery("");
    }

    render() {
        
        const { contacts } = this.props;
        const { query } = this.state;
        const { onDeleteContact } = this.props;
        const showingContacts = query === '' ? contacts : contacts.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()))

        return (
            <div className="list-contacts">
                {JSON.stringify(this.state)
                }
                <div className="list-contacts-top">
                    <input 
                        className="search-contacts"
                        type="text"
                        placeholder="Search Contacts"
                        value={ query }
                        onChange={ (event) => this.updateQuery(event.target.value)  }
                    />

                    <Link 
                        className="add-contact"
                        to="/create"
                    >
                    </Link>
                </div>
                
                { 
                    // the double ampersand will ensure the first expression is evaluated or exists and otherwise returns the subsequent expression
                    // this is also called the guard operator -- returns second expr based on the truthiness of the first one 
                    showingContacts.length !== contacts.length && (
                        <div>
                            <div>
                                the lenght in the query search field has caused contacts to be less than total contacts
                            </div>
                            <div className="showing-contacts">
                                <span>Now showing {showingContacts.length} of {contacts.length} contacts.</span>
                                <button onClick={ this.clearQuery }>Show All</button>
                            </div>
                        </div>
                    )
                }

                <ul className="contact-list">
                {
                    showingContacts.map((contact) => (
                        <li className="contact-list-item" key={contact.id}>
                            <div className="contact-avatar"
                                style = {{ backgroundImage: `url(${contact.avatarURL})`  }}
                            >
                            </div>
                            <div className="contact-details">
                                <p>{ contact.handle }</p>
                                <p>{ contact.name  }</p>
                            </div>
                            <button className="contact-remove"
                                onClick = { () => {onDeleteContact(contact)}  }
                            >
                                Remove
                            </button>
                        </li>
                    ))
                }
                </ul>
            </div>
        )
    }
}

export default ContactList;

