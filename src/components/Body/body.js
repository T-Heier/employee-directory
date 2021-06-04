import React, { useEffect, useState } from "react";
import Heading from "../Header/header";
import Search from "../SearchBar/search";
import TableArea from "../TableArea/Table";
import API from '../../utils/API'

function Body() {
  const [employeedata, setEmployeedata] = useState([]);
  const [sortOrder, setSortOrder] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    API.getUsers()
    .then((response) => setEmployeedata(response.data.results));
  }, []);

  const handleInputChange = (e) => {
    setSearchVal(e.target.value);
  };

  const handleSort = (e) => {
    setSortOrder(!sortOrder);

    var sorted = !sortOrder
      ? employeedata.sort((a, b) => a.name.last.localeCompare(b.name.last))
      : employeedata.sort((a, b) => b.name.last.localeCompare(a.name.last));

    console.log(sorted);
    setEmployeedata(sorted);
  };

  return (
    <div>
      <Heading></Heading>
      <Search handleInputChange={handleInputChange} value={searchVal}></Search>
      <TableArea
        employeedata={employeedata}
        handleSort={handleSort}
        searchVal={searchVal}
      ></TableArea>
    </div>
  );
}

export default Body;
