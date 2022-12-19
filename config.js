//bu sayfayı mail doğrulama için yazdım ama başarısız oldu çalışmadı şuan kullanılmıyor 
//bir de bu firebaseconfig firebase de açtığı web projesi için geçerli

import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAKkYyCS9QPH0WXzG7Y9WcundamSpPvDik',
  authDomain: 'travel-guide-app-fd492.firebaseapp.com',
  projectId: 'travel-guide-app-fd492',
  storageBucket: 'travel-guide-app-fd492.appspot.com',
  messagingSenderId: '311112857802',
  appId: '1:311112857802:android:0cb667e9bf46ac455adc33',
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
};

export {firebase};