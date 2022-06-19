import React, { memo, useRef, useState } from 'react';
import Button from './button';

const ImgFileInput = memo(({ imageUploader, name, onFileChange }) => {
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();
  const onFileUpload = event => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async event => {

    setLoading(true);
    const uploadedFile = event.target.files[0];
    const uploaded = await imageUploader.upload(uploadedFile);
    const fileName = uploadedFile['name'];
    
    
    onFileChange({
      name: fileName,
      url: uploaded.url,
    })
    
    setLoading(false);
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
      {!loading && <Button content={name || 'Photo Upload'} size="medium" color={name ? 'pink' : 'grey'} isfull onClickFunc={onFileUpload} />}
      {loading && <div className="loader"></div> }
    </div>
  );
});

export default ImgFileInput;