import AsyncStorage from '@react-native-async-storage/async-storage'

// create a storage instance

const saveData = async () => {
  try{
    await AsyncStorage.setItem('myData', 'my-data')
    console.log('data saved success')
  } catch(err){
    console.error(err.message)
  }
}

saveData();

