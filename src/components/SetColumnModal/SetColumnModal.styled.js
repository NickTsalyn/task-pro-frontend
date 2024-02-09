import styled from "styled-components";

export const PopUpContainer = styled.div`
    width: 135px;
    height: 86px;
    padding: 18px;
    border-radius: ${p => p.theme.radius.m}; 

`;

export const Item = styled.li`
    width: 100%;
    height: 21px;

`;

export const BtnSet = styled.button`
    background-color: transparent;
    border-color:transparent;
    width: 100%;
    height: 21px;
`;

export const ItemTitle = styled.p`
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: ${p => p.theme.colors.darkTextColor};

    :hover, :focus {
        color: ${p => p.theme.colors.lightGreen};
    } 
`;

export const Svg = styled`
    fill:${p => p.theme.colors.white};
    stroke: ${p => p.theme.colors.darkTextColor};
    width: 16px;
    height: 16px;

    :hover, :focus {
     stroke: ${p => p.theme.colors.lightGreen};
    } 
`;

export const ModalWrap = styled.div`
  box-sizing: border-box;
  border-radius: ${props => props.theme.radius.m};

  width: 335px;
  padding: ${p => p.theme.spacing(6)};

  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.05);
  background-color: #fcfcfc;

  position: relative;

  @media only screen and (min-width: 768px) {
    width: 400px;
  }
`;