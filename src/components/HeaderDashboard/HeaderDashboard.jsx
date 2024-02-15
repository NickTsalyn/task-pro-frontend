import sprite from '../../images/icons.svg';
import { useState } from 'react';
import {
  Button,
  CloseModal,
  FormTitle,
  FormWraper,
  HdWrapper,
  Icon,
  IconTextContainer,
  Line,
  Section,
  SectionTitle,
  ShowAllLabel,
  Text,
} from './HeaderDashboard.styled';
import Modal from 'react-modal';
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

  const customStyles = {
    overlay: {
      backgroundColor: 'transparent',
    },
    content: {
      width: '300px',
      height: '234px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: `${p => p.currentTheme.screensBgn}`,
    },
  };

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
        <Modal
          isOpen={open}
          onRequestClose={handleClose}
          style={customStyles}
          appElement={document.getElementById('root')}
        >
          <CloseModal onClick={handleClose} type="button">
            <use xlinkHref={`${sprite}#icon-x-close`}></use>
          </CloseModal>
          <Section>
            <div>
              <SectionTitle>Filters</SectionTitle>
              <Line />
              <FormWraper>
                <FormTitle>Label color</FormTitle>
                <ShowAllLabel
                  onClick={() => {
                    dispatch(showAll());
                  }}
                >
                  Show all
                </ShowAllLabel>
              </FormWraper>
              <PriorityCheckboxForm filtersPriority={filtersPriority} />
            </div>
          </Section>
        </Modal>
      </StyledComponentsWrapper>
    </div>
  );
};

export default HeaderDashboard;
