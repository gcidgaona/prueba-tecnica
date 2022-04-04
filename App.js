/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PERMISSIONS, request } from 'react-native-permissions'
import type { Node } from 'react';
import ListIndicators from './src/Indicators/components/List/ListIndicators';
import DetailIndicators from './src/Indicators/components/Detail/DetailIndicators';
import HistoricalIndicators from './src/Indicators/components/Historical/HistoricalIndicators';
import TitleContext from './src/help/contexts/TitleContext'

const Stack = createNativeStackNavigator();

const App: () => Node = () => {

  const requestCameraPermission = async () => {
    let response = await request(PERMISSIONS.ANDROID.CAMERA);
    console.log('[PERMISSIONS CAMERA]', response);
  };

  const [namePage, setNamePage] = useState('')

  const handleSetName = (name) => {
    setNamePage(name)
  }

  useEffect(() => {
    requestCameraPermission()
  }, [])

  return (
    <TitleContext.Provider value={handleSetName}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Indicadores">
          <Stack.Screen name="Indicadores" component={ListIndicators} />
          <Stack.Screen name="Detalles" options={{ title: namePage }} component={DetailIndicators} />
          <Stack.Screen name="Historico" options={{ title: namePage }} component={HistoricalIndicators} />
        </Stack.Navigator>
      </NavigationContainer>
    </TitleContext.Provider>
  );
};

export default App;
