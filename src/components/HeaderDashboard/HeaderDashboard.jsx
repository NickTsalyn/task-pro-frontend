import sprite from '../../images/icons.svg';
import { useState } from 'react';
import {
  Button,
  CheckboxContainer,
  CloseModal,
  FieldCheckbox,
  // DefaultRadioBtn,
  FilterSVG,
  FormStyle,
  FormTitle,
  FormWraper,
  H4Text,
  Icon,
  // InputRadio,
  // LabelRadio,
  RadioBtnWrapper,
  Section,
  SectionTitle,
  ShowAllLabel,
  Text,
  // WraperInput,
  // Icon,
  // Label,
  // LabelItem,
  // LabetlText,
  // RadioBtnWrapper,
  // Wrapper,
} from './HeaderDashboard.styled';
import { Field, Form, Formik } from 'formik';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { showAll, togglePriority } from 'redux/filters/filtersSlice';
import { getTheme } from '../../components/themes';
const options = ['without', 'low', 'medium', 'high'];

export const HeaderDashboard = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = getTheme();
  const filtersPriority = useSelector(state => state.filters.filtersPriority);
  console.log(filtersPriority);

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
      backgroundColor: `${theme.headerBgn}`,
    },
  };

  const initialValues = {
    label: filtersPriority,
  };

  const isCheked = value => {
    return filtersPriority.includes(value);
  };

  return (
    <>
      <Button onClick={handleOpen}>
        <Icon>
          <use xlinkHref={`${sprite}#icon-filter`}></use>
        </Icon>
        <Text>Filters</Text>
      </Button>
      <Modal
        isOpen={open}
        onRequestClose={handleClose}
        style={customStyles}
        appElement={document.getElementById('root')}
      >
        <Section>
          <CloseModal onClick={handleClose} type="button">
            <use xlinkHref={`${sprite}#icon-x-close`}></use>
          </CloseModal>
          <div>
            <SectionTitle>Filters</SectionTitle>
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

            <Formik initialValues={initialValues}>
              <RadioBtnWrapper>
                {options.map(el => (
                  <CheckboxContainer
                    onChange={e => {
                      console.log(e.target.id);
                      dispatch(togglePriority(e.target.id));
                    }}
                  >
                    <input
                      id={el}
                      name="radio"
                      defaultChecked={isCheked(el)}
                      type="checkbox"
                    />
                    <label htmlFor={el} className="radio-label">
                      {el}
                    </label>
                  </CheckboxContainer>
                ))}
              </RadioBtnWrapper>
            </Formik>
          </div>
        </Section>
      </Modal>
    </>
  );
};

export default HeaderDashboard;
