import { createClient } from '@supabase/supabase-js';
import { StyleSheet, Text, View } from "react-native";

import dotenv from 'dotenv';
dotenv.config({ path: '../../.env' })

const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_KEY = process.env.SUPABASE_URL

console.log(SUPABASE_KEY);
// Create a single supabase client for interacting with your database
const supabase = createClient('https://xyzcompany.supabase.co', 'publishable-or-anon-key')

export default function MainPage () {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>This is logeIn Page!</Text>
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