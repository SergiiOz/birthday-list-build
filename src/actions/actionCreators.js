import {
  FETCH_EMPLOYEES,
  SELECT_EMPLOYEE,
  UNSELECT_EMPLOYEE,
} from "./actionTypes";
import yaltisAPI from "./../api/yaltisAPI";

//fetch employees list
export const getEmployees = () => {
  return async (dispatch) => {
    const response = await yaltisAPI.get();

    dispatch({
      type: FETCH_EMPLOYEES,
      payload: response.data,
    });
  };
};

//select epmloyee
export const selectEmployee = (employee) => {
  return {
    type: SELECT_EMPLOYEE,
    payload: employee,
  };
};

//unselect epmloyee
export const unSelectEmployee = (employee) => {
  return {
    type: UNSELECT_EMPLOYEE,
    payload: employee,
  };
};
