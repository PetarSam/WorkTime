import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

import DatePicker from '../components/DatePicekr'
import { auth } from '../config';

export default Settings = ({ navigation }) => {

  handleSignOut = () => {
    auth
     .signOut()
     .then(() => navigation.navigate('Loading'))
     .catch(err => console.error(err))
  };

  const [email, setEmail] = useState('email@test.com')
  const [dateFrom, setDateFrom] = useState((new Date('2020-06-12T14:42:42').toDateString()))
  const [dateTo, setDateTo] = useState((new Date('2020-06-13T14:42:42').toDateString()))
  const [visible, setVisible] = useState(false)

    return (
        <View style={styles.main}>
          <View>
            <Text style={styles.title}>Settings</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.input}>
              <Text>To Email:</Text>
              <TextInput style={styles.textInput} value={email} onChange={e => setEmail(e)} />
            </View>
            <View>
              <View style={styles.input}>
                <Text>Date From:</Text>
                <TextInput style={styles.textInput} value={dateFrom}  onTouchStart={() => setVisible(true)}/>
                <DatePicker visible={visible} />
              </View>
              <View style={styles.input}>
                <Text>Date To:</Text>
                <TextInput style={styles.textInput} value={dateTo}  />
              </View>
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
    title:{
      fontSize: 38,
      textAlign: 'center'
    },
    input:{
      flexDirection: 'row',
      width:'100%',
      paddingHorizontal: '5%',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    footer: {
      justifyContent: 'flex-end',
    },
    textInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 8,
      paddingLeft:10,
      width: '80%',
      backgroundColor: 'white'
    },
    text: {
      fontSize: 30
    }
  });