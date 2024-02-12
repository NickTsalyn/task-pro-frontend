import sprite from '../../images/icons.svg';
import { useState } from 'react';
import {
  Button,
  CloseModal,
  FormTitle,
  FormWraper,
  Icon,
  IconTextContainer,
  Line,
  ProjectName,
  Section,
  SectionTitle,
  ShowAllLabel,
  Text,
} from './HeaderDashboard.styled';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { showAll } from 'redux/filters/filtersSlice';
import { getTheme } from '../../components/themes';
import PriorityCheckboxForm from './ui/PriorityCheckboxForm';

export const HeaderDashboard = ({ project }) => {
  console.log('project', project);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const filtersPriority = useSelector(state => state.filters.filtersPriority);

  const customStyles = {
    content: {
      width: '300px',
      heihght: '234px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: `${getTheme().headerBgn}`,
    },
  };

  return (
    <>
      <ProjectName>{project?.title}</ProjectName>
      <Button onClick={handleOpen}>
        <IconTextContainer>
          <Icon>
            <use xlinkHref={`${sprite}#icon-filter`}></use>
          </Icon>
          <Text>Filters</Text>
        </IconTextContainer>
      </Button>
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
                  console.log('Click');
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
    </>
  );
};

export default HeaderDashboard;
