import React from 'react';
import { View, Button, Modal, DateTimePicker } from 'react-native';

const AddTime = () => {
  return (
    <View>
      <View>
        <Modal isVisible={false}>
          <View>
         
            <Button title='Close' onPress={() => setVisible(!visible)} />
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default AddTime;
