import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen110047Navigator from '../features/CopyOfBlankScreen110047/navigator';
import BlankScreen110046Navigator from '../features/BlankScreen110046/navigator';
import BlankScreen010045Navigator from '../features/BlankScreen010045/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen110047: { screen: CopyOfBlankScreen110047Navigator },
BlankScreen110046: { screen: BlankScreen110046Navigator },
BlankScreen010045: { screen: BlankScreen010045Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
