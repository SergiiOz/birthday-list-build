import {
  FETCH_EMPLOYEES,
  SELECT_EMPLOYEE,
  UNSELECT_EMPLOYEE,
} from "../actions/actionTypes";

let initialState = {
  listEmployees: [],
  activatedEmployees: [],
};

export const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return {
        ...state,
        listEmployees: action.payload,
      };
    case SELECT_EMPLOYEE:
      return {
        ...state,
        activatedEmployees: [...state.activatedEmployees, action.payload],
      };
    case UNSELECT_EMPLOYEE:
      return {
        ...state,
        activatedEmployees: [
          ...state.activatedEmployees.filter(
            (employee) => employee.id !== action.payload.id
          ),
        ],
      };
    default:
      return state;
  }
};
