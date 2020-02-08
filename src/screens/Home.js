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

import { auth, db } from '../config';

const Home = ({ navigation }) => {
  const [total, setTotal] = useState('38:46');
  const [opened, setOpened] = useState(false);
  const [begin, setBegin] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  // function writeUserData(userId, name, email, imageUrl) {
  //   firebase.database().ref('users/' + userId).set({
  //     username: name,
  //     email: email,
  //     profile_picture : imageUrl
  //   });
  // }
  const email2string = (email) =>
    email
      .split('@')
      .join('')
      .split('.')
      .join('');
  const handleNewTime = () => {
    db.ref('users/' + email2string(auth.currentUser.email) + '/' + begin)
      .set({
        begin: begin,
        end: end
      })
      .then((res) => console.log(res));
    // db.ref(auth.currentUser.email).set({
    //   total:total
    // })
  };
  return (
    <View style={styles.main}>
      <View style={styles.leftie}>
        <Button title='Add time' onPress={() => setOpened(true)} />
        <Button
          title='Settings'
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
      <View>
        <Modal isVisible={opened} style={styles.modal}>
          <Text style={styles.modalText}>From:</Text>
          <DateTimePicker
            mode='datetime'
            value={begin}
            onChange={(e, date) => setBegin(date)}
          />
          <Text style={end >= begin ? styles.modalText : styles.modalTextError}>
            To:
          </Text>
          <DateTimePicker
            mode='datetime'
            value={end}
            onChange={(e, date) => setEnd(date)}
          />
          <Button title='Add' onPress={handleNewTime} />
          <Button title='Close' onPress={() => setOpened(false)} />
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
  modalText: {
    padding: 15,
    marginTop: 10,
    fontSize: 20,
    textAlign: 'center'
  },
  modalTextError: {
    padding: 15,
    marginTop: 10,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'red'
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
    maxHeight: '70%',
    marginTop: 120
  }
});

export default Home;
