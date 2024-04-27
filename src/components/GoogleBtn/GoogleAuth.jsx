import { BtnContainer, GoogleBtn, GoogleIcon } from './GoogleAuth.styled';

export const GoogleAuth = () => {
  return (
    <div>
      <BtnContainer>
        <GoogleIcon />
        <GoogleBtn>Continue with Google</GoogleBtn>
      </BtnContainer>
    </div>
  );
};
