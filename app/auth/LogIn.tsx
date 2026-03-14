import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { supabase } from '../../Lib/supabase';

// const handleLogin = () =>  should be inside LogInPage
// 1. Import supabase
// 2. Set loading state to true
// 3. Call supabase.auth.signInWithPassword with email and password
// 4. Handle success: navigate to home/main screen
// 5. Handle error: show error message
// 6. Set loading state to false

export default function LogInPage () {
  const router = useRouter();          // For navigation after login
  const [email, setEmail] = useState<any>('');    // Store email input
  const [password, setPassword] = useState<any>(''); // Store password input
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [isSignUp, setIsSignUp] = useState(false); // Toggle login/signup mode

  const handleLogin = async () => {
    setIsLoading(true);
    try{
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      
      if (error) console.log(error);
      console.log(data);
      alert('Ok');
    } catch (error) {
      alert('error');
      return;
    } finally{
      setIsLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isSignUp ? 'Create Account' : 'Welcome Back'}
      </Text>
      
      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      
      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      {/* Login/Signup Button */}
      <TouchableOpacity 
        style={styles.button}
        onPress={handleLogin}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>
          {isLoading ? 'Loading...' : (isSignUp ? 'Sign Up' : 'Log In')}
        </Text>
      </TouchableOpacity>
      
      {/* Toggle Button */}
      <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)}>
        <Text style={styles.linkText}>
          {isSignUp ? 'Already have an account? Log In' : "Don't have an account? Sign Up"}
        </Text>
      </TouchableOpacity>
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
    marginBottom: 30,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#007bff',
    fontSize: 16,
    marginTop: 20,
  },
});