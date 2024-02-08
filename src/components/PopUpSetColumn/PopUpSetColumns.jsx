import * as React from "react";
import { BtnSet, Item, ModalWrap, PopUpContainer, ItemTitle } from "./PopUpSetColumns.styled";
import sprite from "../../images/icons.svg";
import { ColumnListItem } from "components/ColumnListItem/ColumnListItem";



export const PopUpSetColumn =({ onCloseModal }) => {

    return (
    <ModalWrap>
        <PopUpContainer>
            <ul>
                <Item>
                    <BtnSet type="button" onClick={onCloseModal}> 
                    <ItemTitle> { ColumnListItem.props.title }</ItemTitle>
                
                    <svg>
                        <use xlinkHref={`${sprite}#icon-active`}></use>
                    </svg>
                     
                    </BtnSet>
                </Item>
                
                {/* <li>
                    <button>
                        <p>Done</p>
                        <svg>
                        <use xlinkHref={`${sprite}#icon-active`}></use>
                        </svg>
                    </button>
                    
                </li> */}
            </ul>
        </PopUpContainer>
        </ModalWrap>
    )


}