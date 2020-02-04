import React from 'react'
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native'

import Item from '../components/ItemComponent'
import TimeImg from '../graphics/time.png'

const Home = ({ navigation }) => {
    return (
        <View style={styles.main}>
            <View style={styles.leftie}>
                <Button 
                    title="Settings"
                    onPress={() => navigation.navigate('Settings')}
                />
            </View>
            <View style={{width:'100%', alignItems:'center'}}>
                {/* <ImageBackground source={TimeImg} style={{width:'80%', height: 300, alignItems:'center'}}>
                    <View style={styles.head}>
                        <Text>38:46</Text>
                        <Text>Tap to start timer!</Text> 
                    </View>
                </ImageBackground> */}
            </View>
            <View style={styles.items}>
               <Item /> 
            </View>          
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        padding: 30,
        marginTop: 30,
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    leftie: {
        alignItems: 'flex-end',
        width: '100%'
    },
    items: {
        marginTop: 20
    },
    head: {
       textAlign:'center'
    }
}) 

export default Home
