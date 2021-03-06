import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

// import * as Icons from "@fortawesome/fontawesome-free-solid"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EmployTable(props) {
    const [myTable, setTable] = useState(props.table);

    function addRows(){
        return props.table.map(person=>(<tr>
            <td><img src={person.picture.thumbnail} alt="employee"/></td>
            <td>{person.name.first}</td>
            <td>{person.name.last}</td>
            <td>{person.email}</td>
            <td>{person.phone}</td>
            </tr>))
    }

    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th></th>
                    <th>First Name<button className="AZ" onClick={()=>props.sortAZ("first")}>AZ</button> <button className="ZA" onClick={()=>props.sortZA("first")}>ZA</button></th>
                    <th>Last Name <button className="AZ" onClick={()=>props.sortAZ("last")}>AZ</button> <button className="ZA" onClick={()=>props.sortZA("last")}>ZA</button></th>
                    <th>email</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {addRows()}
            </tbody>
        </Table>
    )
}

export default EmployTable;
