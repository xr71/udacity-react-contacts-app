import React from "react";

function ContactList(props) {
    
    return (
        <ol className="contact-list">
        {
            props.contacts.map((contact) => (
                <li key={contact.id}>
                    <div
                        className="contact-avatar"
                        style = {
                            {
                                backgroundImage: `url(${contact.avatarURL})`
                            }
                        }
                    >
                        
                    </div>

                    <div className="contact-details">
                        {contact.name}
                        {contact.handle}
                    </div>

                    <button 
                        onClick={() => props.onDeleteContact(contact)}     
                        className="contact-remove"
                    >
                        Remove
                    </button>
                </li>
            ))
        }
        </ol>
    )
};


export default ContactList;
