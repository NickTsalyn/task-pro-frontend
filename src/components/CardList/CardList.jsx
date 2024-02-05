import { CardListItem } from "components/CardListItem/CardListItem";
import { ButtonAddCard, CardListStyled, CardListWrapper } from "./CardList.styled";

export const CardList = () => {
    return(
        <CardListWrapper>
        <CardListStyled>
            <CardListItem/>
            {/* <CardListItem/>
            <CardListItem/>
            <CardListItem/>             */}
        </CardListStyled>
        <ButtonAddCard type="button">AddAnotherCard</ButtonAddCard>
        </CardListWrapper>
    )
};
