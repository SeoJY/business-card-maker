import React from 'react';

const Textarea = ({ name, value, placeholder }) => {
  return (
    <textarea name={name} defaultValue={value} placeholder={placeholder} className="inp-textarea" />
  )
}

export default Textarea;