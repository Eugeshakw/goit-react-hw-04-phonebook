import React, {useState, useEffect} from 'react';
import Contactform from './components/contactForm/contactForm';
import Contactslist from './components/contactList/contactList';
import ContactFilter from './components/contactFilter/contactFilter';
import { nanoid } from 'nanoid';

export const App = () =>  {

  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts'))?? []
    )

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])
  const [filter, setFilter] = useState('');
  
  const onChangeFilter = event => {
    setFilter(event.target.value);
  };
  
  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const onAddContact = ({ name, number }) => {
    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number.toLowerCase() === number.toLowerCase()
      )
    ) {
      alert(`${name} or entered number is already in contacts.`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(prevContact => [...prevContact, newContact])
  };

  
    
    const filteredContacts = contacts.filter(
      contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
    );
    return (
      <>
        <h1 style={{ fontSize: '24px', color: 'blue', textAlign: 'center' }}>
          Phonebook
        </h1>
        <Contactform onAddContact={onAddContact} />
        <h2>Contacts</h2>
        <ContactFilter
          filter={filter}
          onChangeFilter={onChangeFilter}
        />
        <Contactslist
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />
      </>
    );
  
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
