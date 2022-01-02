import * as React from 'react';


import {NavigationContainer} from '@react-navigation/native';

import DrawerNavigation from './navigation/DrawerNavigator';


export default class App extends React.Component{
  render(){
    return(<NavigationContainer><DrawerNavigation/></NavigationContainer>)
  }
}