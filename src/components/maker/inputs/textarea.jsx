import React from 'react';

const Textarea = ({ name, value }) => {
  return (
    <textarea name={name} value={value} className="inp-textarea" />
  )
}

export default Textarea;