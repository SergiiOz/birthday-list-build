import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectEmployee, unSelectEmployee } from './../actions/actionCreators';

const EmployeeCard = ({ employee }) => {
  const [isActive, setIsActive] = useState('false');
  const dispatch = useDispatch();

  //get change from radio buttons
  const onChangeStatus = (event) => {
    setIsActive(event.target.value);

    //add employee in Birthday list
    if (event.target.value === 'true') {
      dispatch(selectEmployee(employee));
    }
    //remove employee from Birthday list
    if (event.target.value === 'false') {
      dispatch(unSelectEmployee(employee));
    }
  };

  return (
    <div className="employee-card">
      <h4 className={isActive === 'true' ? 'active' : ''}>
        {employee.firstName} {employee.lastName}
      </h4>
      {/* RADIO BUTTONS */}
      {/* doesn't work ui checked radio button- need press doubleClick */}
      <div>
        <form>
          <div>
            <label>
              <input
                type="radio"
                value="false"
                name="status"
                checked={isActive === 'false'}
                onChange={onChangeStatus}
              />{' '}
              Not Active
            </label>
          </div>

          <div>
            <label>
              <input
                type="radio"
                value="true"
                name="status"
                checked={isActive === 'true'}
                onChange={onChangeStatus}
              />{' '}
              Active
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

EmployeeCard.propTypes = {
  employee: PropTypes.object,
};

export default EmployeeCard;
