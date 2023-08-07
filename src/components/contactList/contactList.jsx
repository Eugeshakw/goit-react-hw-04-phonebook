import React from 'react';
import PropTypes from 'prop-types';
const Contactslist = ({ contacts, deleteContact }) => {
  return (
    <>
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </li>
            
          );
        })}
      </ul>
    </>
  );
};

export default Contactslist;

Contactslist.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};