import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "./components/LoginForm";
import Signup from "../Components/Signup";


const AuthStack = createStackNavigator(
  {
    Login: Login,
    Profile: Signup
  },
  {
    initialRouteName: "Login",
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTintColor: "white"
    }
  }
);

export default AuthStack;
