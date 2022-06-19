import { React, useRef } from 'react';
import Button from './inputs/button';
import ImgFileInput from './inputs/imgFileInput';
import Option from './inputs/option';

const CardAddForm = ({ onAdd }) => {
  const options = ['Light', 'Dark', 'Jordi'];

  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const formRef = useRef();

  const onSubmit = event => {
    const card = {
      id: Date.now(),
      theme: themeRef.current.value,
      fileName: '',
      fileURL: '',
    }

    formRef.currunt.reset();
    onAdd(card);
  }

  return (
    <li className="card-editor-form">
      <form ref={formRef} action="">
        <input ref={nameRef} type="text" name="name" placeholder="Name" className="inp-text" />
        <input ref={companyRef} type="text" name="company" placeholder="Company" className="inp-text" />
        <select ref={themeRef} name="theme" className="inp-select">
        <option value="">--Please choose an option--</option>
          {
            options.map((option, index) => (
              <Option option={option} key={index} />
            ))
          }
        </select>
        <input ref={titleRef} type="text" name="title" placeholder="Title" className="inp-text" />
        <input ref={emailRef} type="text" name="email" placeholder="Email Address" className="inp-text" />
        <textarea name="message" placeholder="Input message" className="inp-textarea" />
        <div className="card-editor-btn-area">
          <ImgFileInput />
          <Button content="Add" size="medium" color="blue" onClick={onSubmit} isfull />
        </div>
      </form>
    </li>
  )
};

export default CardAddForm;