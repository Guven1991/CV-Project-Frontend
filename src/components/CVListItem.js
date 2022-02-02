import React from 'react';
import {Link} from 'react-router-dom';
import {getCV} from "../api/apiCalls";

const CvListItem = (props) => {

    const {cv} = props;
    const {id, name, lastname, email, phone} = cv;

    return (
        <Link to={`/`} className=" list-group-item list-group-item-action">
            <div className="row">
                <div className="col-sm-1">{id}</div>
                <div className="col-sm-2">{name}</div>
                <div className="col-sm-3">{lastname}</div>
                <div className="col-sm-4">{email}</div>
                <div className="col-sm-2">{phone}</div>
            </div>

        </Link>
    );
};
// list-group-item list-group-item-action
export default CvListItem;