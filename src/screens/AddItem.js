import React, { useState } from 'react'
import { View, Text, TextInput, TouchableHighlight } from 'react-native'

import { db } from '../config'

const addItem = item => {
    db.ref('/items').push({
        name: item
    })
}

const AddItem = () => {

    const [name, setName] = useState('');
    const handleSubmit = () => {
        let date = new Date()
        addItem(date);
    }
    return (
        <View>
            <Text>Add Item</Text>
            <TextInput onChange={ e => setName(e.nativeEvent.text)}/>
            <TouchableHighlight
                underlayColor="white"
                onPress={ () => handleSubmit()}
            >
                <Text>Add</Text>
            </TouchableHighlight>
        </View>
    )
}

export default AddItem
