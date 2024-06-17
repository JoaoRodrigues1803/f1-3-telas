import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import inicio from './inicio';
import sobre from './sobre';
import vitorias from './vitorias';


const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='Início' component={inicio}
        />
        <Tab.Screen
          name='Sobre' component={sobre}
        />
        <Tab.Screen
          name='Vitórias' component={vitorias}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
