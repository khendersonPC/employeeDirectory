import React from "react"
import { Form } from "react-bootstrap"

function Search(props) {
    return (
        <Form.Group>
            <Form.Control size="lg" type="text" placeholder="Enter name to search" className="se" onChange={props.handleSearchChange} value={props.searchName}
          />
        </Form.Group>
    )
}

export default Search;