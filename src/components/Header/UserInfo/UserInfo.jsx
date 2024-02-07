import {
  StyledUserInfo,
  StyledUserName,
  StyledUserPhoto,
  StyledUserBtn,
} from './UserInfo.styled';
import photo from '../../../img/welcome.png';
import {  useDispatch, useSelector } from 'react-redux';

export const UserInfo = () => {

const dispatch = useDispatch();

const userName = useSelector(state => state.auth.user);

  return (
    <StyledUserInfo>
      <StyledUserName>{userName.name}</StyledUserName>
      <StyledUserBtn type="button">
        <StyledUserPhoto src={photo} alt="user_photo" width={32} height={32} />
      </StyledUserBtn>
    </StyledUserInfo>
  );
};
