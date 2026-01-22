import { useEffect, useState } from "react";
// import { View } from "react-native";
import MainPage from "@/components/Main";
import { isUserLoggedIn } from "@/utils/utils";
import { createStaticNavigation, NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Index() {
  const [userIsLoggedIn, setLotInStatus] = useState<boolean| null>(null);

  useEffect(() => {
    const checkLogInStatus = async () => {
      const loggedIn = await isUserLoggedIn();
      setLotInStatus(loggedIn);
    }
    checkLogInStatus()
  }, [])

  const RootStack = createNativeStackNavigator({
    screens:{
      Home: {
        screen: MainPage
      }
    }
  });
  
  const Navigation = createStaticNavigation(RootStack);

  return (
    <NavigationIndependentTree>
      <Navigation />
    </NavigationIndependentTree>
  );
}
