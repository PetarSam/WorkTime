import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Home = ({navigation}) => {
    return (
        <View>
            <Text>38:46</Text>
            <Text>Hours this month</Text>
            <Button 
                title="Add an Item"
                onPress={() => navigation.navigate('AddItem')}
            />
             <Button 
                title="List of Items"
                onPress={() => navigation.navigate('List')}
            />
            <Button 
                title="Settings"
                onPress={() => navigation.navigate('Settings')}
            />
        </View>
    )
}

export default Home
