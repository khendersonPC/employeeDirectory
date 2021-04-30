import React from "react"
import { Form } from "react-bootstrap"

function Search(props) {
    return (
        <div>
            <div class="header" style={{padding: "60px", textalign: "center",background: "#1abc9c",color: "white",fontsize: "30px"}}>
                <h1>Employee Directory</h1>
                <p>Who the heck is working for us?</p>
            </div>
            <Form.Group>
                <Form.Control size="lg" type="text" placeholder="Enter name to search" className="se" onChange={props.handleSearchChange} value={props.searchName}
                />
            </Form.Group>
        </div>
    )
}

export default Search;