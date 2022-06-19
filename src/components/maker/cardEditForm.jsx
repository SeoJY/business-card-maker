import { React, useRef } from 'react';
import Button from './inputs/button';
import ImgFileInput from './inputs/imgFileInput';
import Option from './inputs/option';

const CardEditForm = ({ card }) => {
  const options = ['Light', 'Dark', 'Jordi'];
  const {name, company, title, email, message, theme} = card; 

  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const formRef = useRef();

  const onSubmit = () => {

  }
  return (
    <li className="card-editor-form">
      <form ref={formRef} action="">
        <input ref={nameRef} type="text" name="name" defaultValue={name} placeholder="Name" className="inp-text" />
        <input ref={companyRef} type="text" name="company" defaultValue={company} placeholder="Company" className="inp-text" />
        <select ref={themeRef} name="theme" defaultValue={theme} className="inp-select">
          <option defaultValue="">--Please choose an option--</option>
          {
            options.map((option, index) => (
              <Option option={option} key={index} />
            ))
          }
        </select>
        <input ref={titleRef} type="text" name="title" defaultValue={title} placeholder="Title" className="inp-text" />
        <input ref={emailRef} type="text" name="email" defaultValue={email} placeholder="Email Address" className="inp-text" />
        <textarea ref={messageRef} name="message" defaultValue={message} placeholder="Input message" className="inp-textarea" />
        <div className="card-editor-btn-area">
          <ImgFileInput />
          <Button content="Delete" size="medium" color="blue" onClick={onSubmit} isfull />
        </div>
      </form>
    </li>
  )
};

export default CardEditForm;