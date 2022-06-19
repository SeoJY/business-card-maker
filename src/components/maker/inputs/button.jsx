import React from 'react';

const Button = ({ content, size, color, isfull, onClickFunc }) => {
  const className = `btn btn-${size} btn-${color}`;

  return (
    <button
      type="button"
      className={isfull ? `${className} btn-full` : className}
      onClick={onClickFunc}
    >
      {content}
    </button>
  )
}

export default Button;