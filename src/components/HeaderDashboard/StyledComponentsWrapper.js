import { StyleSheetManager } from 'styled-components';

export const StyledComponentsWrapper = ({ children }) => (
  <StyleSheetManager shouldForwardProp={prop => prop !== 'priority'}>
    {children}
  </StyleSheetManager>
);
