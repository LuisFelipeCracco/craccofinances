import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Ultra_400Regular } from '@expo-google-fonts/ultra';


import theme from './src/global/styles/theme';
import { Dashboard } from './src/pages/Dashboard';
import { Register } from './src/pages/Register';


export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Ultra_400Regular
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>

      <Dashboard />
      
    </ThemeProvider>
  )
}
