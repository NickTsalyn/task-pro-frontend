import sprite from '../../../src/images/icons.svg';
import { useState } from 'react';
import {
  DefaultRadioBtn,
  Icon,
  Label,
  LabelItem,
  LabetlText,
  RadioBtnWrapper,
  Wrapper,
} from './HeaderDashboard.styled';
import { Formik } from 'formik';

const options = ['without', 'low', 'medium', 'high'];

export const HeaderDashboard = () => {
  const [open, setOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialValues = {
    label: selectedLabel,
  };

  return (
    <div>
      <button onClick={handleOpen}>
        {' '}
        <Icon>
          <use href={sprite + '#icon-filter'} />
        </Icon>
        <span>Filter</span>
      </button>

      <Formik initialValues={initialValues}>
        <RadioBtnWrapper>
          {options.map((el, idx) => (
            <Wrapper
              key={idx}
              onClick={() => {
                // handleLabelSelection(el);
                // dispatch(selectPriority(el));
              }}
            >
              <Label
                value={el}
                className={selectedLabel === el ? 'active' : ''}
              >
                <LabelItem
                  value={el}
                  className={selectedLabel === el ? 'active' : ''}
                />
                <DefaultRadioBtn type="radio" value={el} name="label" />
              </Label>

              <LabetlText className={selectedLabel === el ? 'active' : ''}>
                {el === 'without'
                  ? `${el[0].toUpperCase() + el.slice(1)} priority`
                  : el[0].toUpperCase() + el.slice(1)}
              </LabetlText>
            </Wrapper>
          ))}
        </RadioBtnWrapper>
      </Formik>
    </div>
  );
};

export default HeaderDashboard;
