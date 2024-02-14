import styled from 'styled-components';
import '../../../index.css';

export const StyledBoardListWrapper = styled.ul`
  height: 126px;
  overflow-y: scroll;
  margin: 0 -14px;

  &::-webkit-scrollbar {
    width: 4px;
    height: 60px;
    border-radius: 4px 0 0 4px;
    margin-left: ${p => p.theme.spacing(3.5)};
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 4px 0 0 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  @media screen and (min-width: 768px) {
    margin: 0 -24px;
  }
 
`;
