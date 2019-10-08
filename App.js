import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

//Redux
import store from "./redux/";
import { Provider } from "react-redux";

//Components
// import LoginForm from "./components/LoginForm";
import AppContainer from "./Navigation";

class App extends Component {


  render() {

    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
