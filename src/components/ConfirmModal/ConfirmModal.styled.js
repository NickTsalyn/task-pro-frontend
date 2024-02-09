import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100%;
  height: 100%;

  backdrop-filter: blur(2px);
`;

export const Container = styled.div`
  z-index: 2;

  max-width: 250px;
  max-height: 90vh;


  padding: 20px;

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  background-color: ${p => p.theme.colors.white};

  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: ${p => p.theme.radius.l};

  backdrop-filter: blur(0.5px);
  overflow-y: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.);
`;

export const Msg = styled.p`
  margin-bottom: 20px;
  line-height: 1.6;
  font-size: 14px;
  text-align: center;
  color: ${p => p.theme.colors.darkTextColor};
`;

export const Name = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: ${p => p.theme.colors.darkTextColor};
`;

export const Btn = styled.button`
  padding: 8px 18px;

  font-size: 14px;
  font-weight: 500;
  color: rgba(9, 42, 61, 0.7);

  background-color: transparent;

  border: 1px solid rgba(9, 42, 61, 0.7);
  border-radius: ${p => p.theme.radius.s};

  transition: all 250ms ease-in-out;

  cursor: pointer;

  :hover {
    color: ${p => p.theme.colors.darkTextColor};
    border: 1px solid rgba(9, 42, 61, 1);
    background-color: rgba(9, 42, 61, 0.09);
  }
`;

export const BtnDelete = styled.button`
  padding: 8px 18px;

  font-size: 14px;
  font-weight: 500;
  color: rgba(227, 67, 67, 0.7);

  background-color: transparent;

  border: 1px solid rgba(227, 67, 67, 0.7);
  border-radius: ${p => p.theme.radius.s};

  transition: all 250ms ease-in-out;

  cursor: pointer;

  :hover {
    color: rgba(227, 67, 67, 1);
    border: 1px solid rgba(227, 67, 67, 1);
    background-color: rgba(227, 67, 67, 0.1);
  }
`;



// border-radius: 8px;
// width: 300px;
// height: 234px;

// box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.05);
// background: #fcfcfc;