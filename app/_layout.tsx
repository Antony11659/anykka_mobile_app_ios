import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{headerShown: false}}
      initialRouteName="auth/LogIn"
    >
      <Stack.Screen name="auth/LogIn"/>
      <Stack.Screen name="tabs/Main"/>
  </Stack>
  );
}
