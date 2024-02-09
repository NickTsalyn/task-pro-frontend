import { Loader } from 'components/Loader/Loader';
import React, { useState } from 'react';

export const PreviewAvatar = ({ file }) => {
  const [preview, setPreview] = useState(null);
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result);
  };
  return (
    <div>{preview ? <img src={preview} alt="user-avatar" /> : Loader}</div>
  );
};
