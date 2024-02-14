import React, { useState } from 'react';

export const PreviewUploadAvatar = ({ file }) => {
  const [preview, setPreview] = useState(null);
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result);
  };
  return (
    <>{preview && <img src={preview} alt="user-avatar" />}</>
  );
};