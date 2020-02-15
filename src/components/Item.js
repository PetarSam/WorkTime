import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import timeDiff from '../helpers/timeDiff'

const ItemComponent = ({ values }) => {
  const fromDate = new Date(values['begin']);
  const endDate = new Date(values['end']);
  const total = new Date();
  return (
    <View style={styles.item}>
      <Text style={styles.text}>
        {fromDate.getDate() +
          '-' +
          fromDate.getMonth() +
          '-' +
          fromDate.getFullYear()}
      </Text>
      <Text style={styles.text}>
        {fromDate.getHours() + ':' + fromDate.getMinutes()}
      </Text>
      <Text style={styles.text}>
        {endDate.getHours() + ':' + endDate.getMinutes()}
      </Text>
        <Text style={styles.text}>{timeDiff(endDate,fromDate)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#D3D3D3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
  },
  text: {
    textAlign: 'center',
    width: '25%'
  }
});
export default ItemComponent;
