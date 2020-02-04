import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

import Modal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker'

import { auth } from '../config';

export default Settings = ({ navigation }) => {

  handleSignOut = () => {
    auth
     .signOut()
     .then(() => navigation.navigate('Loading'))
     .catch(err => console.error(err))
  };

  // Add useContext
  const [email, setEmail] = useState('email@test.com')
  const [dateFrom, setDateFrom] = useState((new Date('2020-06-12T14:42:42')))
  const [dateTo, setDateTo] = useState((new Date('2020-06-13T14:42:42')))

  const [usingDate, setUsingDate] = useState()
  const [visible, setVisible] = useState(false)

  const dateChange = (date) => {
    setVisible(!visible);
    setUsingDate(date);
  }

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
                <TextInput style={styles.textInput} value={dateFrom.toDateString()}  onTouchStart={() => dateChange('from')}/>
              </View>
              <View style={styles.input}>
                <Text>Date To:</Text>
                <TextInput  style={dateTo > dateFrom ? styles.textInput :styles.textInputError} value={dateTo.toDateString()}  onTouchStart={() => dateChange('to')}/>
              </View>
            </View>
            <View>
              <Modal isVisible={visible}>
                <View style={styles.modal}>
                  <DateTimePicker value={usingDate === "from" ? dateFrom : dateTo} onChange={(e,date) => usingDate === "from" ? setDateFrom(date) : setDateTo(date) }/>
                  <Button 
                    title="Close"
                    onPress={()  => setVisible(!visible)}
                  />
                </View>
            </Modal> 
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
    textInputError: {
      height: 40,
      borderColor: 'red',
      color: 'red',
      borderWidth: 1,
      marginTop: 8,
      paddingLeft:10,
      width: '80%',
      backgroundColor: 'white'
    },
    text: {
      fontSize: 30
    },
    modal: { 
      backgroundColor:'white', 
      padding:'2%', 
      borderRadius: 10 
    }
  });