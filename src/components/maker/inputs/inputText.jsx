import React from 'react';

const InputText = ({ name, value }) => {
  return (
    <input type={name === 'email' ? 'email' : 'text'} name={name} value={value} className="inp-text" />
  )
}

export default InputText;