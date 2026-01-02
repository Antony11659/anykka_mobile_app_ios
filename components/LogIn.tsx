import theme from '@/style/theme';
import { Button, Icon, Input, ThemeProvider } from '@rneui/themed';
import React, { useState } from 'react';


const LogIn: React.FC = () => {
  const [login, setLogin] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogIn = () => {
    alert(`Login: ${login} \n Email:', ${email} \n password: ${password}`);
  };
  
  return (
    <ThemeProvider theme={theme} >
      <Input
        placeholder='Enter you Login'
        value={login}
        onChangeText={setLogin}
      />
      <Input
        placeholder="Email Address"
        leftIcon={<Icon name="email" size={24} color="gray" />}
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder='Enter your password'
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button
       title="LogIn"
       onPress={handleLogIn}
       />
    </ThemeProvider>
  );
};

export default LogIn;