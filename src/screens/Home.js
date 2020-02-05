import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';

import Modal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker';

import TimeImg from '../graphics/time.png';

import ItemHead from '../components/ItemHead';
import Item from '../components/Item';

const Home = ({ navigation }) => {
  const [total, setTotal] = useState('38:46');
  return (
    <View style={styles.main}>
      <View style={styles.leftie}>
        <Button
          title='Add time'
          onPress={() => navigation.navigate('Settings')}
        />
        <Button
          title='Settings'
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
      <View>
        <Modal isVisible={false} style={styles.modal}>
          <DateTimePicker mode='datetime' value={new Date()} />
          <DateTimePicker mode='datetime' value={new Date()} />
          <Button title='Add' />
          <Button title='Close' />
        </Modal>
      </View>
      <View style={styles.center}>
        <View>
          <Image source={TimeImg} style={styles.img} />
          <Text style={styles.middler}>{total}</Text>
        </View>
      </View>
      <View style={styles.items}>
        <ItemHead />
        <ScrollView>
          <Item />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 30,
    marginTop: 30,
    flex: 1,
    alignItems: 'center',
    width: '100%'
  },
  leftie: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%'
  },
  center: {
    alignItems: 'center',
    width: '100%'
  },
  items: {
    marginTop: 20
  },
  middler: {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    fontSize: 30,

    // Change to percentages
    transform: [{ translateX: -90 }, { translateY: -20 }]
  },
  img: {
    width: 250,
    position: 'relative',
    height: 250
  },
  modal: {
    backgroundColor: 'white',
    padding: '2%',
    borderRadius: 10,
    maxHeight: '60%',
    marginTop: 120
  }
});

export default Home;
