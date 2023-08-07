import React from 'react';
import Contactform from './components/contactForm/contactForm';
import Contactslist from './components/contactList/contactList';
import ContactFilter from './components/contactFilter/contactFilter';
import { nanoid } from 'nanoid';

function filterByString(field, filterValue) {
  return field.toLowerCase().trim().includes(filterValue.toLowerCase().trim());
}

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'John Smith', number: '123-456-1234' },
      { id: 'id-2', name: 'Jesica Born', number: '4566-5454-343' },
      { id: 'id-3', name: 'Robert Daun', number: '878-453-678' },
    ],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('did update');
    if (this.state.contacts !== prevState.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      console.log('обновился стейт');
    }
    console.log(prevState);
    console.log(this.state);
  }
  componentDidMount(){
    console.log('did mount');
    const contact = localStorage.getItem('contacts');
    const contactSave = JSON.parse(contact)
    if (contact){
      this.setState({contacts: contactSave})
    }
    
    console.log(contactSave);
  }



  onChangeFilter = ({ target: { value } }) => {
    this.setState({
      filter: value,
    });
  };
  deleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  onAddContact = ({ name, number }) => {
    if (
      this.state.contacts.some(
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
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  render() {
    console.log('app render');
    const filteredContacts = this.state.contacts.filter(
      contact =>
        filterByString(contact.name, this.state.filter) ||
        filterByString(contact.number, this.state.filter)
    );
    return (
      <>
        <h1 style={{ fontSize: '24px', color: 'blue', textAlign: 'center' }}>
          Phonebook
        </h1>
        <Contactform onAddContact={this.onAddContact} />
        <h2>Contacts</h2>
        <ContactFilter
          filter={this.state.filter}
          onChangeFilter={this.onChangeFilter}
        />
        <Contactslist
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
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
