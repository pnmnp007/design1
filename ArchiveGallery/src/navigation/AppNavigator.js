import React  from 'react';
import { createStackNavigator } from 'react-navigation';//install package
import Home from "../components/Home/Home";
import screen2 from "../components/News/screen2";




export default AppNavigator = createStackNavigator(
    //create navigation screens
    {
       
        Home: { screen: Home },//for main screen we have used first. Here its only type of variable.
        screen2: { screen: screen2}//second screen reference
    },
    {
        headerMode:'screen'
    },
    {
        initialRouteName: 'Home',
    }
    );