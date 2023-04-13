import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';


 const SignIn = (props) => {

    <View style={styles.container}>
        
    <View style={styles.greeting_text}>
    <Text style={[styles.subtitle]}>Find Playdates for Your Child</Text>
    <Text style={[styles.title]}>Seeblin</Text>
    </View>

    <View style={styles.auth_bar}>
      <Pressable style={styles.button} >
        <Text style={[{fontSize:50}]}>Sign Up</Text>
        </Pressable>
      <Pressable style={styles.button} >
        <Text style={[{fontSize:250}]}>Sign In</Text>
        </Pressable>
    </View>


</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  greeting_text: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: 'powderblue',
    justifyContent: 'center',
  },
  auth_bar: {
    flex:1,
    backgroundCOlor: 'black',
    felxDirection: 'row',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },

  
});

 
export default SignIn


