import React from 'react';
import {DropdownButton,Dropdown} from 'react-bootstrap';
const Filters = () => {
    return(
        <div className="row mt-5">
            <div className="col-md-4">
            <DropdownButton id="dropdown-basic-button" title="按地區搜索" variant="light">
                <DropdownButton title="新界" variant="light">
                <Dropdown.Item>粉嶺</Dropdown.Item>
                </DropdownButton>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>         
            </div>
            <div className="col-md-4">

                
            </div>
        </div>
    )
}

export default Filters;