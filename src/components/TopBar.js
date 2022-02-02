import React, {Component} from 'react';
import logo from '../assets/cv.png';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {logoutSuccess} from "../redux/authActions";

class TopBar extends Component {

    render() {
        const {username, isLoggedIn, onLogoutSuccess} = this.props;

        let links = (
            <ul className="navbar-nav">
                <li>
                    <Link className="nav-link " to="/login">
                        Login
                    </Link>
                </li>
                <li>
                    <Link className="nav-link " to="/signup">
                        Sign Up
                    </Link>
                </li>
            </ul>
        );
        if (isLoggedIn) {
            links = (
                <ul className="navbar-nav">
                    <li>
                        <Link className="nav-link" to={`/user/${username}`}>
                            {username}
                        </Link>

                    </li>
                    <li className="nav-link" onClick={onLogoutSuccess} style={{cursor: 'pointer'}}>Logout</li>
                </ul>
            );
        }

        return (
            <div className="shadow-sm mb-2">
                <nav className="navbar navbar-dark bg-dark navbar-expand">
                    <div className="container-fluid">
                        <Link className="navbar-brand nav-item" to="/">
                            <img src={logo} width="60" alt=""/> CV Portal
                        </Link>
                        {links}
                    </div>
                </nav>
            </div>

        );
    }
}

const mapStateToProps = (store) => {
    return {
        isLoggedIn: store.isLoggedIn,
        username: store.username
    };
};

const mapDispatchToProps = dispatch => {
    return{
        onLogoutSuccess:() => {
          return  dispatch(logoutSuccess());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);