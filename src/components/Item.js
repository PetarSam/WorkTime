import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ItemComponent = ({ tFrom, tTO }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>tFrom.Date</Text>
      <Text style={styles.text}>tFrom.Hour</Text>
      <Text style={styles.text}>tTo.Hour</Text>
      <Text style={styles.text}>Total</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    maxWidth: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#D3D3D3',
    padding: 10
  }
});
export default ItemComponent;
