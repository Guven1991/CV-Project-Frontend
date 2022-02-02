import React, {Component} from 'react';


const Authentication = React.createContext();

class AuthenticationContext extends Component {
    state = {
        isLoggedIn: false,
        username: undefined
    };

    onLoginSuccess = (username) => {
        this.setState({
            username: username,
            isLoggedIn: true
        })
    }

    onLogoutSuccess = () => {
        this.setState({
            isLoggedIn: false,
            username: undefined
        });
    };
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default AuthenticationContext;