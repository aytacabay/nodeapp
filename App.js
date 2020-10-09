import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigator from './screens/DrawerNavigator'

import { ParentContext } from './contextApi/parentContext';

import AnimatedSplash from "react-native-animated-splash-screen";


function App() {

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
  }, [loading])

  return (
    <ParentContext>

      <AnimatedSplash
        translucent={false}
        isLoaded={loading}
        backgroundColor={"#07B594"}
        logoImage={require("./assets/green-removebg.png")}
        logoHeight={300}
        logoWidth={300}
      >

        <NavigationContainer>

          <DrawerNavigator />

        </NavigationContainer>

      </AnimatedSplash>

    </ParentContext>
  );
};

export default App;
