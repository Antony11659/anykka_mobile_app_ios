import { createClient } from '@supabase/supabase-js';
import 'expo-sqlite/localStorage/install';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from "react-native";

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.EXPO_PUBLIC_SUPABASE_KEY;

console.log(SUPABASE_URL);
console.log(SUPABASE_KEY);


// Create a single supabase client for interacting with your database
// const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const supabase = createClient(SUPABASE_URL ?? "", SUPABASE_KEY ?? "", {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})

// const getUsers = async () => {
//   const {data, error} = await supabase
//     .from('users')
//     .select('*')
//     .single()

//   if (error) console.error('Error', error)
//   else console.log("Data: ", data)
// }

export default function MainPage () {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<any[]>([]);

  useEffect (()=> {
  const fetchUsers = async () => {
    const {data, error} = await supabase
      .from('users')
      .select('*')

    if (error) {
      console.error('Error', error)
    } else {
      console.log("Data: ", data);
      setUsers(data);
    }
    setLoading(false);
  };
  fetchUsers();

  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          {users?.map((user) => (
            <Text key={user.id}>{user.user_name}</Text>
          ))}
        </>
      )}
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