import { useState } from 'react';
import PropTypes from 'prop-types';

const SimpleInput = ({ setTitle }) => {
  const [value, setValue] = useState('');

  return (
    <>
      <input
        type="text"
        placeholder="Enter Text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />

      <p>{value}</p>

      <button disabled={!value} onClick={() => setTitle('Child Updates Title')}>
        Disabled
      </button>
    </>
  );
};

SimpleInput.propTypes = {
  setTitle: PropTypes.func.isRequired
};

export default SimpleInput;
