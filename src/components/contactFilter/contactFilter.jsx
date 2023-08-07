import React from 'react';
import PropTypes from 'prop-types';
const ContactFilter = ({filter, onChangeFilter}) => {
    return (
        <div>
      <input
        type="text"
        placeholder="filter"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        
        id="filter"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
        required
      />
      <label
        htmlFor="filter"
        
      >
        Filter:
      </label>
    </div>
    )
}

export default ContactFilter;
ContactFilter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired,
  };
