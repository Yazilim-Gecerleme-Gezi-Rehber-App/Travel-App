import React from 'react';
import firestore from '@react-native-firebase/firestore';

const getHazarTekneTuru = () => {
    return firestore()
      .collection('Hazar Gölü Tekne Turu')
      .get()
      .then(snap => {
        const tur = [];
        snap.forEach(s => tur.push(s.data()));
        return tur;
      })
      .catch(err => err);
  };

export default ActivityDetail = {
    getHazarTekneTuru
}