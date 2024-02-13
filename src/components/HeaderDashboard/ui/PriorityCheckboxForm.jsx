import { Formik } from 'formik';
import { CheckboxContainer, RadioBtnWrapper } from '../HeaderDashboard.styled';
import { useDispatch } from 'react-redux';
import { togglePriority } from 'redux/filters/filtersSlice';
import { StyledComponentsWrapper } from '../StyledComponentsWrapper';

const options = ['without', 'low', 'medium', 'high'];

const PriorityCheckboxForm = ({ filtersPriority }) => {
  // console.log(filtersPriority, filtersPriority);
  const dispatch = useDispatch();
  const initialValues = {
    label: filtersPriority,
  };
  const isCheked = value => {
    return filtersPriority.includes(value);
  };

  const handleCheckboxChange = e => {
    dispatch(togglePriority(e.target.id));
  };

  return (
    <StyledComponentsWrapper>
      <Formik initialValues={initialValues}>
        <RadioBtnWrapper>
          {options.map(el => (
            <CheckboxContainer key={el} priority={el}>
              <input
                id={el}
                name="radio"
                onChange={handleCheckboxChange}
                // defaultChecked={isCheked(el)}
                type="checkbox"
                checked={isCheked(el)}
              />
              <label htmlFor={el} className="radio-label">
                {el}
              </label>
            </CheckboxContainer>
          ))}
        </RadioBtnWrapper>
      </Formik>
    </StyledComponentsWrapper>
  );
};

export default PriorityCheckboxForm;
