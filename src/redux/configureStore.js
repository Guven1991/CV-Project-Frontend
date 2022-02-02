import {createStore} from "redux";
import authReducer from "./authReducer";

const configureStore = () => {
    const cvAuth = localStorage.getItem('cv-auth');

    let stateInLocalStorage = {
        isLoggedIn: false,
        username: undefined,
        password: undefined
    }

    if(cvAuth){
        try {
            stateInLocalStorage = JSON.parse(cvAuth);
        }catch (error){

        }

    }

    const store = createStore(authReducer, stateInLocalStorage, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    store.subscribe(() => {
        localStorage.setItem('cv-auth',JSON.stringify(store.getState()))
    })

    return store;
}

export default configureStore;