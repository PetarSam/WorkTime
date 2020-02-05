import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAOcy2kkCwWADBfBUY0j8G74W_KUKUkA5U',
  authDomain: 'worktime-2b773.firebaseapp.com',
  databaseURL: 'https://worktime-2b773.firebaseio.com',
  projectId: 'worktime-2b773',
  storageBucket: 'worktime-2b773.appspot.com',
  messagingSenderId: '902077626520',
  appId: '1:902077626520:web:bc873ce35dc5c554a078ed',
  measurementId: 'G-VR1RRKGPRV'
};

const app = Firebase.initializeApp(firebaseConfig);

export const db = app.database();
export const auth = app.auth();
