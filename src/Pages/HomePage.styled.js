// import styled from 'styled-components';

// export const HomeWrapper = styled.div`
//   min-height: 100vh;
//   width: 320px;
//   margin: 0 ;
//   display: flex;
//   justify-content: center;

//   @media screen and (min-width: 768px) {
//    width: 768px;

//   }

//   @media screen and (min-width: 1440px) {
//     width: 1180px;
//   }
// `;

// export const Text = styled.p`
//   margin: 258px 20px 0;
//   font-size: 12px;
//   line-height: 1.3;
//   letter-spacing: -0.02em;
//   text-align: center;
//   color: rgba(22, 22, 22, 0.7);

//   @media only screen and (min-width: 375px) and (max-width: 768px) {
//     margin: 258px auto 0;
//     max-width: 335px;
//   }
//   @media only screen and (min-width: 768px) {
//     margin: 368px auto 0;
//     max-width: 486px;
//     font-size: 14px;
//   }
//   @media only screen and (min-width: 1440px) {
//     margin: 247px auto 0;     
//   }
// `;

// export const ButtonText = styled.button`
//   padding: 0;
//   font-size: 12px;
//   border: none;
//   background-color: inherit;
//   color: ${p => p.theme.violetColors.accentColor};

//   @media only screen and (min-width: 768px) {
//     font-size: 14px;
//   }
// `;

// export const HeaderWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
import styled from 'styled-components';

export const HomeWrapper = styled.div`
  min-height: 100vh;
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
   width: 768px;

  }

  @media screen and (min-width: 1440px) {
 width: 1180px;
  }
`;

// export const Text = styled.p`
//   margin: 258px 20px 0;
//   font-size: 12px;
//   line-height: 1.3;
//   letter-spacing: -0.02em;
//   text-align: center;
//   color: rgba(22, 22, 22, 0.7);

//   @media only screen and (min-width: 375px) and (max-width: 768px) {
//     margin: 258px auto 0;
//     max-width: 335px;
//   }
//   @media only screen and (min-width: 768px) {
//     margin: 368px auto 0;
//     max-width: 486px;
//     font-size: 14px;
//   }
//   @media only screen and (min-width: 1440px) {
//     margin: 247px auto 0; 
//     /* margin-right: 347px;     */
//   }
// `;

// export const ButtonText = styled.button`
//   padding: 0;
//   font-size: 12px;
//   border: none;
//   background-color: inherit;
//   color: ${p => p.theme.violetColors.accentColor};

//   @media only screen and (min-width: 768px) {
//     font-size: 14px;
//   }
// `;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;