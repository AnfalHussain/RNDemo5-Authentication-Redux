import * as actionTypes from "./actionTypes";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { AsyncStorage } from "react-native";




export const checkForExpiredToken = navigation => {
    return async dispatch => {
        // Get token
        const token = await AsyncStorage.getItem("token");

        if (token) {
            const currentTime = Date.now() / 1000;

            // Decode token and get user info
            const user = jwt_decode(token);

            console.log((user.exp - currentTime) / 60);

            // Check token expiration
            if (user.exp >= currentTime) {
                // Set auth token header
                setAuthToken(token);
                // Set user
                dispatch(setCurrentUser(user));
            } else {
                dispatch(logout());
            }
        }
    };
};

const setAuthToken = async token => {
    if (token) {
        await AsyncStorage.setItem("token", token);
        axios.defaults.headers.common.Authorization = `jwt ${token}`;
    } else {
        await AsyncStorage.removeItem("token");
        delete axios.defaults.headers.common.Authorization;
    }
};

const setCurrentUser = user => ({
    type: actionTypes.SET_CURRENT_USER,
    payload: user
});

export const loginUser = (userData, navigation) => {
    return async dispatch => {
        try {
            let response = await axios.post("https://precious-things.herokuapp.com/login/", userData);
            let user = response.data;
            let decodedUser = jwt_decode(user.token);
            setAuthToken(user.token);
            dispatch(setCurrentUser(decodedUser));
            alert("you are logged in")

        } catch (error) {
            console.error(error);
            // dispatch(setError(error.response.data));

        }
    };
};

export const registerUser = (userData, navigation) => {
    return async dispatch => {
        try {
            await axios.post("https://precious-things.herokuapp.com/signup/", userData);
            dispatch(loginUser(userData, navigation));
            alert("you just created an account")

        } catch (error) {
            console.error(error);
            // dispatch(setError(error.response.data));

        }
    };
};


export const logoutUser = () => {
    setAuthToken();
    return setCurrentUser();
};


// export const setError = error => ({ type: actionTypes.SET_ERROR, payload: error });
