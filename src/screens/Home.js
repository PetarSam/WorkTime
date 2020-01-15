import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Home = ({ navigation }) => {
    return (
        <View>
            <Text>38:46</Text>
            <Text>Hours this month</Text>
            <Button 
                title="Settings"
                onPress={() => navigation.navigate('Settings')}
            />
        </View>
    )
}

export default Home
