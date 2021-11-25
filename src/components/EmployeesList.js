import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CharList from "./CharList";
import Spinner from "./Spiner/Spinner";

const EmployeesList = ({ isLoading }) => {
  //sort list users by char of alphabet
  const [sortedList, setSortedList] = useState([]);

  //get employees from state redux
  const employees = useSelector((state) => state.employees.listEmployees);

  //array alphabet
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  //func sort list users by char of alphabet
  const sortListByAlphabet = (arrlistUsers, arrAlphabet) => {
    //new array
    const sortedList = [];

    arrAlphabet.forEach((char) => {
      const sortedUsers = {
        letter: char,
        list: arrlistUsers.filter(
          (user) => user.firstName[0].toLowerCase() === char
        ),
      };
      //push to new array
      sortedList.push(sortedUsers);
    });

    return sortedList;
  };

  //one time sorted list and set to sortedList
  //leter will be use useMemo()
  useEffect(() => {
    const sortedListUsers = sortListByAlphabet(employees, alphabet);
    setSortedList(sortedListUsers);
  }, [employees]);

  return (
    <div className="employees-list">
      <h3 className="title">Employees</h3>
      {/*Spinner show when wait upload data */}
      {isLoading && (
        <div>
          Loading... <Spinner />{" "}
        </div>
      )}

      {/* EMPLOYEES LIST CONTENT */}
      {/*charWithListEmployees - object with 2 field (letter and list) */}
      {/* letter: - it's char alphabet (list: - it's array sorted objects employees by letter */}

      <div className="employees-list-content">
        {sortedList.length !== 0 &&
          sortedList.map((charWithListEmployees, index) => {
            return (
              <CharList
                key={index + charWithListEmployees.letter}
                charWithListEmployees={charWithListEmployees}
              />
            );
          })}
      </div>
    </div>
  );
};

EmployeesList.propTypes = {
  employees: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default EmployeesList;
