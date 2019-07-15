import React from "react";

class ContactList extends React.Component {

    state = {
        query: ""
    };

    updateQuery = (q) => {
        this.setState(() => ({
            query: q
        }))
    };

    render() {
        
        const { contacts } = this.props;
        const { query } = this.state;
        const { onDeleteContact } = this.props;

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
                </div>
                <ul className="contact-list">
                    Hello World
                {
                    contacts.map((contact) => (
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

