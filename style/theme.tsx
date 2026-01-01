// src/theme.ts
import { createTheme } from '@rneui/themed';

const theme = createTheme({
  lightColors: {
    primary: '#007bff', // Your brand color
    background: '#ffffff',
  },
  darkColors: {
    primary: '#0056b3',
    background: '#121212',
  },
  components: {
    Button: {
      raised: true,
      buttonStyle: {
        width: 150
      },
      containerStyle: {
        margin: 5
      }
    },
    Input: {
      inputContainerStyle: { 
        width: "50%",
        alignSelf: 'center',
        borderBottomWidth: 1, 
        padding: 3,
        margin: 5, 
    },
    },
    Text: {
      style: { color: '#333' },
      
    },
  },
});

export default theme;