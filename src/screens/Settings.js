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
                title="Send your hours"
                onPress={()  => console.log()}
            />
            <Button 
                title="Sign Out"
                onPress={handleSignOut}
            />
        </View>
    )
}

export default Settings;