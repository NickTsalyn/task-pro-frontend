import styled from 'styled-components'
import Modal from 'react-modal'

export const StyledModal = styled(Modal)`
    position: relative;
    width: 100%;
    height: fit-content;
    max-height: 433px;
    max-width: 350px;
    background-color: rgba(21, 21, 21, 1);
    border-radius: 8px;
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
    transform: translateY(50px);
    transition: transform 0.3s;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 24px;
`

export const CloseButton = styled.button`
    position: absolute;
    background-color: transparent;
    top: 14px;
    right: 14px;
    width: 20px;
    height: 20px;
    border: none;
`

export const CloseSVG = styled.svg`
    width: 18px;
    height: 18px;
    stroke: white;
`

export const BigHeader = styled.p`
    color: white;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.02em;
`

export const TitleInput = styled.input`
    margin: 24px 0;
    height: 49px;
    max-width: 302px;
    background-color: transparent;
    border: 1px rgba(190, 219, 176, 0.4) solid;
    border-radius: 8px;
    padding: 0 18px;
    color: rgba(255, 255, 255, 1);
    font-family: inherit;
    line-height: 21px;
    letter-spacing: 0.02em;
    outline: none;

    &::placeholder {
        color: rgba(255, 255, 255, 0.4);
        font-family: inherit;
        line-height: 21px;
        letter-spacing: 0.02em;
    }

    &:hover, &:focus {
        border-color: rgba(190, 219, 176, 1);
    }
`

export const SmallHeader = styled.p`
    color: white;
    line-height: 21px;
    letter-spacing: 0.02em;
    letter-spacing: -2%;
    padding-bottom: 14px;
`

export const List = styled.label`
    width: 270px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    column-gap: 4px;
    row-gap: 4px;
    margin-bottom: 24px;
`

export const Radio = styled.input`
    display: none;

    &:checked + svg {
        stroke: white;
        cursor: default;
    }

    &:checked + span {
        border-color: white;
        cursor: default;
    }
`

export const IconSVG = styled.svg`
    display: inline-block;
    vertical-align: middle;
    stroke: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    fill: transparent;
    width: 18px;
    height: 18px;
`

export const FuturePic = styled.span`
    display: inline-block;
    vertical-align: middle;
    background-color: rgba(255, 255, 255, 0.5);
    border: 1px transparent solid;
    cursor: pointer;
    border-radius: 8px;
    width: 28px;
    height: 28px;
`

export const SubmitButton = styled.button`
    display: flex;
    max-width: 100%;
    height: 49px;
    border-radius: 8px;
    font-weight: 500;
    background-color: rgba(190, 219, 176, 1);
    font-family: inherit;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.02em;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 9px;
    margin-top: 16px;

    &:hover {
        background-color: rgba(157, 200, 136, 1);
    }

    & > span {
        display: flex;
        width: 28px;
        height: 28px;
        background-color: rgba(22, 22, 22, 1);
        border-radius: 8px;
        justify-content: center;
        align-items: center;
    }

    & > span > svg {
        width: 14px;
        height: 14px;
        stroke: white;
    }
`