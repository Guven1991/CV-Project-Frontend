import React from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import CvList from "./CVList";


const ProfileCard = (props) => {
    const pathUsername = props.match.params.username;
    let message = "We cannot edit";
    if(pathUsername === props.loggedInUsername){
        message = <CvList/>;
    }
    return (
        <div>
            {message}
        </div>
    );
};

const mapStateToProps = (store) => {
    return {
        loggedInUsername: store.username
    };
};

export default connect(mapStateToProps)(withRouter(ProfileCard));