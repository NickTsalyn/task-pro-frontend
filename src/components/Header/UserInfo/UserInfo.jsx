import {
  StyledUserInfo,
  StyledUserName,
  StyledUserPhoto,
  StyledUserBtn,
} from './UserInfo.styled';
import photo from '../../../img/welcome.png';

export const UserInfo = () => {
  return (
    <StyledUserInfo>
      <StyledUserName>Ivetta</StyledUserName>
      <StyledUserBtn type="button">
        <StyledUserPhoto src={photo} alt="user_photo" width={32} height={32} />
      </StyledUserBtn>
    </StyledUserInfo>
  );
};
