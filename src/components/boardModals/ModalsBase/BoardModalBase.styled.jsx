import styled from 'styled-components'
import Modal from 'react-modal'

export const StyledModal = styled(Modal)`
    position: relative;
    width: 100%;
    height: fit-content;
    max-height: 433px;
    max-width: 350px;
    background-color: ${props => props.theme.colors.white};
    border-radius: 8px;
    box-shadow: 0px 4px 16px 0px ${props => props.theme.colors.greyIconColor};
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
    stroke: ${props => props.theme.colors.darkTextColor};
`

export const BigHeader = styled.p`
    color: ${props => props.theme.colors.darkTextColor};
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
    border: 1px ${props => props.theme.violetColors.accentColor} solid;
    border-radius: 8px;
    padding: 0 18px;
    color: ${props => props.theme.colors.darkTextColor};
    font-family: inherit;
    line-height: 21px;
    letter-spacing: 0.02em;
    outline: none;
    opacity: 0.4;

    &::placeholder {
        color: ${props => props.theme.colors.darkTextColor};
        font-family: inherit;
        line-height: 21px;
        letter-spacing: 0.02em;
    }

    &:hover, &:focus {
        opacity: 1;
    }
`

export const SmallHeader = styled.p`
    color: ${props => props.theme.colors.darkTextColor};
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
        stroke: ${props => props.theme.colors.darkTextColor};
        cursor: default;
    }

    &:checked + span {
        border-color: ${props => props.theme.colors.darkTextColor};
        cursor: default;
    }
`

export const IconSVG = styled.svg`
    display: inline-block;
    vertical-align: middle;
    stroke: ${props => props.theme.colors.greyIconColor};
    cursor: pointer;
    fill: transparent;
    width: 18px;
    height: 18px;
`

export const Pic = styled.span`
    display: inline-block;
    border: 1px transparent solid;
    cursor: pointer;
    border-radius: 8px;
    width: 28px;
    height: 28px;

    & + img {
        display: inline-block;
        width: 100%;
        height: 100%;
    }
`

export const SubmitButton = styled.button`
    display: flex;
    max-width: 100%;
    height: 49px;
    color: ${props => props.theme.colors.white};
    border-radius: 8px;
    border-color: transparent;
    font-weight: 500;
    background-color: ${props => props.theme.violetColors.accentColor};
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
        background-color: ${props => props.theme.violetColors.hoverViolet};
    }

    & > span {
        display: flex;
        width: 28px;
        height: 28px;
        background-color: ${props => props.theme.colors.white};
        border-radius: 8px;
        justify-content: center;
        align-items: center;
    }

    & > span > svg {
        width: 14px;
        height: 14px;
        stroke: ${props => props.theme.colors.darkTextColor};
    }
`