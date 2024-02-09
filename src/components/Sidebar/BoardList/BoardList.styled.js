import styled from "styled-components"
import '../../../index.css';

export const StyledBoardListWrapper = styled.ul`

height: 126px;
overflow-y: scroll;
margin: 0 -14px;
margin-bottom: 116px;

&::-webkit-scrollbar {
  width: 4px;
  height: 60px;
  border-radius: 4px 0 0 4px;
  margin-left: 14px;
}

&::-webkit-scrollbar-thumb {
  background-color: #fff; /* Колір елементу полоси прокрутки */
  border-radius: 4px 0 0 4px;
}

&::-webkit-scrollbar-track {
  background-color: transparent; /* Колір фону полоси прокрутки */
}
/* display: flex;
margin-top: auto; */
/* @media screen and (min-width: 1440px) {
   padding-bottom: 60px;
  } */

  @media screen and (min-width: 768px) {
    margin: 0 -24px;
    margin-bottom: 294px;
  }
  @media screen and (min-width: 1440px) {
  
    margin-bottom: 40px;
  }
`