import React, { useState } from 'react'
import { Table } from 'react-bootstrap'


function EmployTable(props) {

    const [myTable, setTable] = useState(props.table);

    function addRows(){
        return props.table.map(person=>(<tr><td></td><td>{person.name.first}</td></tr>))
    }

    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th></th>
                    <th>First Name</th>
                    <th>Last Name</th>
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
