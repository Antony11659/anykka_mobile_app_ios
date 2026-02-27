import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosError } from 'axios';

const storageKey = 'my-key';

const saveToken = async (value:string) => {
  try{
    await AsyncStorage.setItem(storageKey, value);
    console.log('data saved success')
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('Unknown error:', error);
    }
  }
}

export const isUserLoggedIn = async() => {
  try{
    const token = await AsyncStorage.getItem(storageKey)
    console.log(token);
    if (token) {
      return true;
    } else {
      return false;
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('Unknown error:', error);
    }
  }
};

export const makeLogInRequest = async (login: string, email: string, password: string) => {
    try {
        const response = await axios.post('https://dummyjson.com/auth/login', 
            {
              username: login, //'emilys',
              password: password, //'emilyspass',
              expiresInMins: 30, // optional, defaults to 60
            },
            {
              headers: { 'Content-Type': 'application/json' },
              //withCredentials: true, // Include cookies (e.g., accessToken) in the request
            }
        );
        const token = response.data.accessToken;
        await saveToken(token);
        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        console.error(err.message);
    }
   
};