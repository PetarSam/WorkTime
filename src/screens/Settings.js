import React from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'



import { auth } from '../config';

export default Settings = ({ navigation }) => {

  handleSignOut = () => {
    auth
     .signOut()
     .then(() => navigation.navigate('Loading'))
     .catch(err => console.error(err))
  };

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <View>
                    <View style={styles.input}>
                        <Text>From:</Text>
                        <TextInput style={styles.textInput}/>
                    </View>
                    <View style={styles.input}>
                        <Text>To:</Text>
                        <TextInput style={styles.textInput}/>
                    </View>
                </View>
                <View style={styles.input}>
                    <Text>To Email:</Text>
                    <TextInput style={styles.textInput}/>
                </View>
            </View>
            <View style={styles.footer}>
              <Button 
                title="Send your hours"
                onPress={()  => alert('Your hours have been sent!')}
                />
                <Button 
                    title="Sign Out"
                    onPress={handleSignOut}
                />   
            </View>   
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor: 'yellow',
        justifyContent: 'space-between',
        paddingVertical: 35
    },
    input:{
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    container: {
      alignItems: 'center'
    },
    footer: {
        justifyContent: 'flex-end',
      },
    textInput: {
      height: 40,
      width: '80%',
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 8,
      paddingLeft:10,
    },
    text: {
      fontSize: 30
    }
  });