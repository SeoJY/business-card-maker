import { React, useState } from 'react';
import Button from './inputs/button';
import ImgFileInput from './inputs/imgFileInput';
import InputText from './inputs/inputText';
import Option from './inputs/option';
import Textarea from './inputs/textarea';



const CardEditForm = ({ card }) => {
  const options = ['Light', 'Dark', 'Jordi'];
  const {name, company, title, email, message, theme} = card; 
  const onSubmit = () => {

  }
  return (
    <li className="card-editor-form">
      <form action="">
        <InputText name="name" value={name} />
        <InputText name="company" value={company} />
        <select name="theme" value={theme} className="inp-select">
          {
            options.map((option) => (
              <Option option={option} />
            ))
          }
        </select>
        <InputText name="title" value={title} />
        <InputText name="email" value={email} />
        <Textarea name="message" value={message} />
        <div className="card-editor-btn-area">
          <ImgFileInput />
          <Button content="Delete" size="medium" color="blue" onClick={onSubmit} isfull />
        </div>
      </form>
    </li>
  )
};

export default CardEditForm;