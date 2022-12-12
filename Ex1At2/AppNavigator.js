import { createAppContainer, createStackNavigator } from 'react-navigation-stack';

// Import the components that will be used as screens in the app
import App from './App';
import SecondActivity from './SecondActivity';

// Create a stack navigator with the screens you want to use in your app
const AppNavigator = createStackNavigator(
  {
    App: {
      screen: App,
    },
    SecondActivity: {
      screen: SecondActivity,
    },
  },
  // Set the initial screen of the app
  {
    initialRouteName: 'App',
  }
);

// Create the app container with the app navigator
const AppContainer = createAppContainer(AppNavigator);

// Use the app container as the root component of your app
export default AppContainer;
