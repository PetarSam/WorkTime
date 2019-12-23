import React from 'react'
import { View, Text, Button } from 'react-native'



import { auth } from '../config';

const Settings = ({ navigation }) => {

  handleSignOut = () => {
    auth
     .signOut()
     .then(() => navigation.navigate('Loading'))
     .catch(err => console.error(err))
  };

    return (
        <View>
            <Text>Settings</Text>
            <Button 
                title="Sign Out"
                onPress={handleSignOut}
            />
            <Button 
                title="Send your hours"
                onPress={sendHours}
            />
        </View>
    )
}

export default Settings;
