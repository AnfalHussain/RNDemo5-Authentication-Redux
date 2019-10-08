import { createBottomTabNavigator } from "react-navigation-tabs";
import React from "react";
import { Icon } from "native-base";


import Login from "./../components/LoginForm";
import Signup from "./../components/Signup";

const BottomNav = createBottomTabNavigator(
  {
    Login: Login,
    Signup: Signup,

  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = "";
        let iconType = "";
        switch (routeName) {
          case "Login":
            iconName = "login";
            iconType = "SimpleLineIcons";
            break;
          case "Signup":
            iconName = "account";
            iconType = "MaterialCommunityIcons";
            break;

          default:
            iconName = "account";
            iconType = "MaterialCommunityIcons";
        }
        return (
          <Icon name={iconName} type={iconType} style={{ color: tintColor }} />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "white",
      inactiveTintColor: "black",
      style: {
        backgroundColor: "rgb(20,90,100)"
      }
    }
  }
);

export default BottomNav;
