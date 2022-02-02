import React from "react";
import {signup} from "../api/apiCalls";
import {loginSuccess} from "../redux/authActions";
import {connect} from "react-redux";

class UserSignupPage extends React.Component {
    state = {
        name: null,
        username: null,
        password: null,
        errors:{}
    }

    onChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    onClickSignup = async event => {
        event.preventDefault(); //browserın bizim yerimize bisey yapmasını engellemiş oluyoruz

        const {name, username, password} = this.state;
        const body = {
            name: name,
            username: username,
            password: password
        };
        const {push} = this.props.history;

        this.setState({pendingApiCall: true});

        try{
            const response = await signup(body);
            push('/login');
            const authState = {
                ...response.data,
                password
            }
            this.props.onLoginSuccess(authState)
        } catch (error){
            this.setState({error: error.response.data
            });
        }

    }


    render() {
        const{pendingApiCall} =this.state;
        return (
            <div className="container">
                <form action="">
                    <h1 className="text-center">Sign Up</h1>
                    <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input className="form-control" name="name" onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Username</label>
                        <input className="form-control" name="username" onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input className="form-control" name="password" type="password" onChange={this.onChange}/>
                    </div>
                    <div className="text-center">
                        <button disabled={pendingApiCall} className="btn btn-primary"
                                onClick={this.onClickSignup}>
                            {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>}Sign
                            Up
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

export default connect(null, mapDispatchToProps)(UserSignupPage);