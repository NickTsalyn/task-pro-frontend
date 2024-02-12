import { Formik } from 'formik';
import { CheckboxContainer, RadioBtnWrapper } from '../HeaderDashboard.styled';
import { useDispatch } from 'react-redux';
import { togglePriority } from 'redux/filters/filtersSlice';
const options = ['without', 'low', 'medium', 'high'];

const PriorityCheckboxForm = ({ filtersPriority }) => {
  console.log(filtersPriority, filtersPriority);
  const dispatch = useDispatch();
  const initialValues = {
    label: filtersPriority,
  };
  const isCheked = value => {
    return filtersPriority.includes(value);
  };
  return (
    <Formik initialValues={initialValues}>
      <RadioBtnWrapper>
        {options.map(el => (
          <CheckboxContainer
            priority={el}
            onChange={e => {
              dispatch(togglePriority(e.target.id));
            }}
          >
            <input
              id={el}
              name="radio"
              defaultChecked={isCheked(el)}
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
  );
};

export default PriorityCheckboxForm;
