import {
  StyledUserInfo,
  StyledUserName,
  StyledUserPhoto,
  StyledUserBtn,
} from './UserInfo.styled';
import photo from '../../../img/welcome.png';
import { useSelector } from 'react-redux';

import Modal from 'react-modal';
import { useState } from 'react';
import { EditProfileModal } from 'components/EditProfileModal/EditProfileModal';
import '../../EditProfileModal/EditModal.css';

Modal.setAppElement('#root');

export const UserInfo = () => {
// const dispatch = useDispatch();

const userName = useSelector(state => state.auth.user);


const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = () => {
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
};
  return (
    <StyledUserInfo>
      <StyledUserName>{userName.name}</StyledUserName>
      <StyledUserBtn type="button" onClick={openModal}>
        <StyledUserPhoto src={photo} alt="user_photo" width={32} height={32} />
      </StyledUserBtn>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName={'modal-overlay'}
        className={'modal-content'}
        closeTimeoutMS={300}
      >
        <EditProfileModal onCloseModal={closeModal} />
      </Modal>
    </StyledUserInfo>
  );
};
