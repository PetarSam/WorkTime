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
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'purple',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  text: {
    fontWeight: '700',
    textAlign: 'center',
    width: '25%'
  }
});
export default ItemComponent;
