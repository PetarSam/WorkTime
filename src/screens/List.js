import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

import ItemComponent from '../components/ItemComponent'

import { db } from '../config'

let itemsRef = db.ref('/items')

const List = () => {

    const [items, setItems] = useState('')

    useEffect(() => {
        itemsRef.on('value', snapshot => {
            let data= snapshot.val();
            let result = Object.values(data);
           setItems(result)
        })
    }, [])

    return (
        <View>
            <Text>List</Text>
            {
                items.length > 0 
                ? 
                items.map((item,key) => <ItemComponent  key={key} item={item.name} />)
                :
                <Text>No items</Text>
            }
        </View>
    )
}

export default List
