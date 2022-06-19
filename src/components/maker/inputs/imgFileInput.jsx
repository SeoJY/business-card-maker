import React, { useRef } from 'react';
import Button from './button';

const ImgFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();

  const onFileUpload = event => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async event => {
    const uploadedFile = event.target.files[0];
    const uploaded = await imageUploader.upload(uploadedFile);
    const fileName = uploadedFile['name'];

    onFileChange({
      name: fileName,
      url: uploaded.url,
    })
  };

  return (
    <div className="inp-file">
      <input
        ref={inputRef} 
        type="file" 
        name="file" 
        accept="image/*" 
        className="blind"
        onChange={onChange}
      />
      <Button content={name || 'Photo Upload'} size="medium" color="grey" isfull onClickFunc={onFileUpload} />
    </div>
  );
};

export default ImgFileInput;