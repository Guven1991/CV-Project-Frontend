import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import {HashRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import UserSignupPage from "./pages/UserSignupPage";
import TopBar from "./components/TopBar";
import React from "react";
import {connect} from "react-redux";
import AddCV from "./components/AddCV";

class App extends React.Component {


    render() {

        const {isLoggedIn} = this.props;

        return (
            <div>
                <Router>
                    <TopBar />
                    <Switch>
                        <Route exact path="/addcv" component={AddCV}/>
                        <Route exact path="/" component={HomePage}/>
                        {!isLoggedIn && <Route path="/login" component={LoginPage}/>}
                        {<Route path="/signup" component={UserSignupPage}/>}
                        <Route path="/user/:username" component={UserPage}/>
                        <Redirect to="/"/>
                    </Switch>
                </Router>
            </div>
        );
    }
}


const mapStateToProps = (store) => {
    return {
        isLoggedIn: store.isLoggedIn

    };
};

export default connect(mapStateToProps)(App);
