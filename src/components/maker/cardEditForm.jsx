import { React, useRef } from 'react';
import Button from './inputs/button';
import Option from './inputs/option';

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
  const options = ['Light', 'Dark', 'Jordi'];
  const {name, company, title, email, message, theme, fileName} = card; 

  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const formRef = useRef();

  const onChange = event => {
    if(event.currentTarget == null) return;
    event.preventDefault();

    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const onSubmitDelete = () => {
    deleteCard(card);
  }

  const onFileChange = file => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url
    })
  }

  return (
    <li className="card-editor-form">
      <form ref={formRef} action="">
        <input ref={nameRef} type="text" name="name" defaultValue={name} placeholder="Name" className="inp-text" onChange={onChange} />
        <input ref={companyRef} type="text" name="company" defaultValue={company} placeholder="Company" className="inp-text" onChange={onChange} />
        <select ref={themeRef} name="theme" defaultValue={theme} className="inp-select"onChange={onChange} >
          <option defaultValue="">--Please choose an option--</option>
          {
            options.map((option, index) => (
              <Option option={option} key={index} />
            ))
          }
        </select>
        <input ref={titleRef} type="text" name="title" defaultValue={title} placeholder="Title" className="inp-text" onChange={onChange} />
        <input ref={emailRef} type="text" name="email" defaultValue={email} placeholder="Email Address" className="inp-text" onChange={onChange} />
        <textarea ref={messageRef} name="message" defaultValue={message} placeholder="Input message" className="inp-textarea" onChange={onChange} />
        <div className="card-editor-btn-area">
          <FileInput name={fileName} onFileChange={onFileChange} />
          <Button content="Delete" size="medium" color="blue" onClickFunc={onSubmitDelete} isfull />
        </div>
      </form>
    </li>
  )
};

export default CardEditForm;