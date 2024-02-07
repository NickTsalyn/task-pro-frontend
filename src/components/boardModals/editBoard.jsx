import React, { useState } from 'react';
import { BoardModalBase } from './ModalsBase/BoardModalBase';

export const EditBoard = () => {
  const [isModalOpen, setOpenModal] = useState(false);
  const info = { title: 'alala', icon: 'icon-lightning-02', background: '11' };

  function CloseModal() {
    setOpenModal(false);
  }

  function OpenModal() {
    setOpenModal(true);
  }

  function SubmitForm(info) {
    console.log(info);
    setOpenModal(false);
  }

  return (
    <>
      <button onClick={OpenModal}>Edit</button>
      <BoardModalBase
        isModalOpen={isModalOpen}
        info={info}
        onCloseModal={CloseModal}
        action={'edit'}
        SubmitForm={SubmitForm}
      />
    </>
  );
};
