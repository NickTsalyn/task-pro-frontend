import sprite from '../../images/icons.svg';
import { useState } from 'react';
import {
  // DefaultRadioBtn,
  FilterSVG,
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
import { showAll, togglePriority } from 'redux/project/projectSlice';
const options = ['without', 'low', 'medium', 'high'];

export const HeaderDashboard = () => {
  const dispatch = useDispatch();
  const projectName = useSelector(state => state.project.projectName);
  const filtersPriority = useSelector(state => state.project.filtersPriority);
  // togglePriority;
  const [open, setOpen] = useState(false);
  // const [selectedLabel, setSelectedLabel] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // імпортувати назву проекта
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
      backgroundColor: '#121212',
    },
  };

  const initialValues = {
    label: filtersPriority,
  };

  const isCheked = value => {
    return filtersPriority.includes(value);
  };

  return (
    <div style={{ position: 'relative' }}>
      <h3>{projectName}</h3>
      <button
        onClick={handleOpen}
        style={{
          position: 'absolute',
          top: '14px',
          right: '24px',
          display: 'flex',
          gap: '8px',
          background: 'none',
          border: 'none',
        }}
      >
        <FilterSVG>
          <use xlinkHref={`${sprite}#icon-filter`}></use>
        </FilterSVG>
        <span>Filter</span>
      </button>
      <Modal
        isOpen={open}
        onRequestClose={handleClose}
        style={customStyles}
        appElement={document.getElementById('root')}
      >
        <div
          style={{
            position: 'relative',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <button
            onClick={handleClose}
            style={{ position: 'absolute', top: '14px', right: '14px' }}
          >
            X
          </button>
          <div style={{ color: 'white' }}>
            <h4
              style={{ borderBottom: '1px solid white', paddingBottom: '14px' }}
            >
              Filters
            </h4>
            <div
              style={{
                margin: '14px 0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>Label color</span>
              <button onClick={() => dispatch(showAll())}>Show all</button>
            </div>
            <Formik initialValues={initialValues}>
              <Form>
                {options.map((el, idx) => (
                  <div key={idx}>
                    <label>
                      <Field
                        type="checkbox"
                        checked={isCheked(el)}
                        name="options"
                        onChange={e => dispatch(togglePriority(e.target.value))}
                        value={el}
                      />
                      {el}
                    </label>
                  </div>
                ))}
              </Form>
            </Formik>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default HeaderDashboard;
