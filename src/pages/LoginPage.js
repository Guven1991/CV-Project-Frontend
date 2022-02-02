import React, {Component} from 'react';
import {login} from "../api/apiCalls";
import {connect} from "react-redux";
import {loginSuccess} from "../redux/authActions";


class LoginPage extends Component {
    state = {
        username: null,
        password: null,
        error: null
    }

    onChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]:value
        })
    }

    onClickLogin = async event => {
        event.preventDefault();
        const {username, password} = this.state;

        const creds = {
            username: username,
            password: password
        };

        const {push} = this.props.history;

        this.setState({
            error: null
        });
        try {
            const response = await login(creds);
            push('/');

            const authState = {
                ...response.data,
                password
            }

            this.props.onLoginSuccess(authState)
        } catch (error) {

            this.setState({
                error: error.response.data.message
            });

        }

    }

    render() {
        return (

            <div className="container">
                <form action="">
                    <h1 className="text-center">Login</h1>
                    <div className="form-group">
                        <label htmlFor="">Username</label>
                        <input className="form-control" name="username" onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input className="form-control" name="password" type="password" onChange={this.onChange}/>
                    </div>
                    <div className="text-center mt-1">
                        <button className="btn btn-primary" onClick={this.onClickLogin}>
                            Login
                        </button>
                    </div>

                </form>
            </div>
        );
    }


}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoginSuccess: (authState) => {
            return dispatch(loginSuccess(authState))
        }
    }
}

export default connect(null, mapDispatchToProps)(LoginPage);