// import { Bars } from "react-loader-spinner";
// import styled from "styled-components";

// export const Loader = () => {

    const LoaderWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;    
  `;

    return (
        <LoaderWrapper>
            <Bars
            height="60"
            width="60"
            color="#bedbb0"
            ariaLabel="bars-loading"                        
            />
        </LoaderWrapper>
    )
  
};
