import React from 'react'
import { View, Text } from 'react-native'

const ItemComponent = ({ index, item }) => {
    return (
        <View>
            <View key={index}>
                <Text>{item}</Text>
            </View>     
        </View>
    )
}

export default ItemComponent
