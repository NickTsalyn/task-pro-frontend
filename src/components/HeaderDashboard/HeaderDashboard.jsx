import sprite from '../../images/icons.svg';
import { useState } from 'react';
import {
  Button,
  CustomModal,
  FormTitle,
  FormWraper,
  HdWrapper,
  Icon,
  IconTextContainer,
  Line,
  ModalContainer,
  SectionTitle,
  ShowAllLabel,
  Text,
} from './HeaderDashboard.styled';
import { useDispatch, useSelector } from 'react-redux';
import { showAll } from 'redux/filters/filtersSlice';
import PriorityCheckboxForm from './ui/PriorityCheckboxForm';
import ProjectTitle from './ui/ProjectTitle';
import { useParams } from 'react-router-dom';
import { StyledComponentsWrapper } from './StyledComponentsWrapper';
import { useTranslation } from 'react-i18next';

export const HeaderDashboard = () => {
  const { t } = useTranslation('global');
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const filtersPriority = useSelector(state => state.filters.filtersPriority);
  const { boardId } = useParams();

  return (
    <div>
      <StyledComponentsWrapper>
        <HdWrapper>
          <ProjectTitle boardId={boardId} />
          <Button onClick={handleOpen}>
            <IconTextContainer>
              <Icon>
                <use xlinkHref={`${sprite}#icon-filter`}></use>
              </Icon>
              <Text>{t('screenPage.static.filters')}</Text>
            </IconTextContainer>
          </Button>
        </HdWrapper>
        <CustomModal open={open} onCancel={handleClose} footer={null}>
          <ModalContainer>
            <SectionTitle>
              {t('screenPage.render.modal.filter.title')}
            </SectionTitle>
            <Line />
            <FormWraper>
              <FormTitle>
                {t('screenPage.render.modal.filter.title2')}
              </FormTitle>
              <ShowAllLabel
                onClick={() => {
                  dispatch(showAll());
                }}
              >
                {t('screenPage.render.modal.filter.show')}
              </ShowAllLabel>
            </FormWraper>
            <PriorityCheckboxForm filtersPriority={filtersPriority} />
          </ModalContainer>
        </CustomModal>
      </StyledComponentsWrapper>
    </div>
  );
};

export default HeaderDashboard;
