 import React from 'react'
 import { View, Text, Modal } from 'react-native'

import DateTimePicker from '@react-native-community/datetimepicker';

 
 const DatePicekr = ({visible}) => {
     return (
         <Modal
            visible={visible}
            animationType="slide"
        >
             <Text>Lol</Text>
         </Modal>
     )
 }
 
 export default DatePicekr
 