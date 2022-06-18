import React from 'react';

const Button = ({ content, size, color, isfull }) => {
  const className = `btn btn-${size} btn-${color}`;

  return (
    <button
      type="button"
      className={isfull ? `${className} btn-full` : className}
    >
      {content}
    </button>
  )
}

export default Button;