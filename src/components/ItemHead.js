import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ItemComponent = () => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>Date</Text>
      <Text style={styles.text}>From</Text>
      <Text style={styles.text}>To</Text>
      <Text style={styles.text}>Total</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: 'purple',
    padding: 10,
    width: '100%'
  },
  text: {
    fontWeight: '700',
    textAlign: 'center'
  }
});
export default ItemComponent;
