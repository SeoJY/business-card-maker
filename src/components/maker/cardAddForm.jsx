import { React, useRef, useState } from 'react';
import Button from './inputs/button';
import Option from './inputs/option';

const CardAddForm = ({ FileInput, onAdd }) => {
  const options = ['Light', 'Dark', 'Jordi'];

  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const formRef = useRef();
  const [file, setFile] = useState({
    fileName: null,
    fileURL: null
  })

  const onSubmitAdd = event => {
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value || 'Light',
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    }

    formRef.current.reset();
    setFile({
      fileName: null,
      fileURL: null
    })
    onAdd(card);
  }

  const onFileChange = file => {
    setFile({
      fileName: file.name,
      fileURL: file.url
    })
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
        <textarea ref={messageRef} name="message" placeholder="Input message" className="inp-textarea" />
        <div className="card-editor-btn-area">
          <FileInput name={file.fileName} onFileChange={onFileChange} />
          <Button content="Add" size="medium" color="blue" isfull onClickFunc={onSubmitAdd} />
        </div>
      </form>
    </li>
  )
};

export default CardAddForm;