import PropTypes from "prop-types";
import EmployeeCard from "./EmployeeCard";

const CharList = ({ charWithListEmployees }) => {
  return (
    <div className="char-list">
      <h3 className="title">{charWithListEmployees.letter}</h3>
      {/* if char doesn't have list  = display text */}
      {charWithListEmployees.list.length === 0 ? (
        <div className="employee-card empty">Employess List is empty</div>
      ) : (
        //else bolow char display employees list
        charWithListEmployees.list.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))
      )}
    </div>
  );
};

CharList.propTypes = {
  charWithListEmployees: PropTypes.object,
};

export default CharList;
