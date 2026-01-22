import { StyleSheet, Text, View } from "react-native";

export default function MainPage () {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>This is the main page you are loggedIn!</Text>
        </View>

   );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      },
      title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
      },
})