class ImageUploader {
  async upload(file) {
    const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
    const cloutPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", cloutPreset);

    const res = await fetch(url, {
      method: "POST",
      body: formData
    })
    return await res.json();
  }
}

export default ImageUploader;