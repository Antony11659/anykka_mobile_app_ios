import { View } from "react-native";
import LogIn from '../components/LogIn';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LogIn/>
    </View>
  );
}
