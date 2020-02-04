import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ItemComponent = ({ hFrom, hTo }) => {
    return (
        <View style={styles.item}>
            <Text>Date</Text>
            <Text>h.from</Text>
            <Text>h.to</Text>    
            <Text>h.total</Text>    
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        display: "flex",
        justifyContent: 'space-around',
        flexDirection:'row',
        backgroundColor: 'gray',
        padding: 10,
        width: '100%'
    }
})
export default ItemComponent
