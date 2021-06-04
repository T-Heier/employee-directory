import React from "react";

function TableArea(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>
              <span id="srtBtn" onClick={props.handleSort}>
                Name:
              </span>{" "}
            </th>
            <th>Phone</th>
            <th>Email</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {props.employeedata.map((person) => {
                return person.name.first.includes(props.searchVal) ? (
                  <tr>
                    <th>
                      <img src={person.picture.thumbnail} alt="empId" />
                    </th>
                    <td>
                      {person.name.title} {person.name.first} {person.name.last}
                    </td>
                    <td>{person.phone}</td>
                    <td>{person.email}</td>
                    <td>
                      {person.location.state}, {person.location.country}
                    </td>
                  </tr>
                ) : "No data found!";
              })}
            
        </tbody>
      </table>
    </div>
  );
}

export default TableArea;