import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";

import Dashboard from "~/pages/Dashboard";
import Signin from "~/pages/Signin";
import Signup from "~/pages/Signup";

import AddMeetup from "~/pages/AddMeetup";
import SearchMeetup from "~/pages/SearchMeetup";
import Preferences from "~/pages/Preferences";

import { colors } from "~/styles";

const Routes = (user = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Signin,
        Signup,
        Preferences,
        DashOptions: createBottomTabNavigator(
          {
            Dashboard,
            AddMeetup,
            SearchMeetup
          },
          {
            tabBarOptions: {
              showIcon: true,
              showLabel: false,
              activeTintColor: colors.white,
              inactiveTintColor: colors.whiteTransparent,
              style: {
                backgroundColor: "#e5556e"
              }
            }
          }
        )
      },
      {
        initialRouteName: user ? "DashOptions" : "Signin",
        swipeEnabled: true,
        animationEnabled: true
      }
    )
  );

export default Routes;
