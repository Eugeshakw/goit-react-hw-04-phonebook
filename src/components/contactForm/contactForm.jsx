import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './contactform.module.scss';
const Contactform = ({onAddContact}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    // console.log(event.target.name);
    const { name, value } = event.target;
    switch (name) {
      case 'number':
        setNumber(value);
        break;
      case 'name':
        setName(value);
        break;

      default:
        alert('Please enter number');
        return;
    }
  };

  const onSubmitForm = event => {
    event.preventDefault();

    // if (number === '') {
    //   alert('Please enter number');
    //   return ;

    // }
    onAddContact({name, number});
    setName('');
    setNumber('');


    // this.props.onAddContact(name, number);
  };

  return (
    <>
      <form className={style.formContainer} onSubmit={onSubmitForm}>
        <label className={style.labName} htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          className={style.inpName}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id="name"
          value={name}
          onChange={handleChange}
        />

        <label className={style.labNumber} htmlFor="number">
          Number
        </label>
        <input
          type="tel"
          name="number"
          placeholder="Number"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={style.inpNumber}
          id="number"
          value={number}
          onChange={handleChange}
        />

        <button type="submit" className={style.btnSubmit}>
          add contact
        </button>
      </form>
    </>
  );
};
export default Contactform;

Contactform.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
