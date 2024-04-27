import { FcGoogle } from 'react-icons/fc';

import styled from 'styled-components';

export const GoogleIcon = styled(FcGoogle)`
  width: 26px;
  height: 26px;
  position: absolute;
  top: 12px;
  left: 10px;
`;

export const GoogleBtn = styled.button`
  width: 100%;
  padding-top: ${p => p.theme.spacing(3.5)};
  padding-bottom: ${p => p.theme.spacing(3.5)};

  border: none;
  border-radius: ${p => p.theme.radius.m};
  color: #1f1f1f;
  background-color: #f2f2f2;

  line-height: 21px;
  letter-spacing: -0.02em;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus {
    background-color: #c8c8c8;
  }
`;
export const BtnContainer = styled.div`
  position: relative;
`;
