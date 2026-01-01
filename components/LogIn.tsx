import theme from '@/style/theme';
import { Button, Icon, Input, ThemeProvider } from '@rneui/themed';
import React from 'react';


const LogIn: React.FC = () => {
  
  return (
    <ThemeProvider theme={theme} >
      <Input
        placeholder='Enter you Login'
      />
      <Input
        placeholder="Email Address"
        leftIcon={<Icon name="email" size={24} color="gray" />}
        autoCapitalize="none"
      />
      <Input
        placeholder='Enter your password'
        secureTextEntry={true}
      />
      <Button title="LogIn" />
    </ThemeProvider>
  );
};

export default LogIn;