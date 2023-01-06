import React from 'react';
import firestore from '@react-native-firebase/firestore';

const getActivitiesSports = () => {
  return firestore()
    .collection('Spor Aktivitileri')
    .get()
    .then(snap => {
      const sports = [];
      snap.forEach(s => sports.push(s.data()));
      return sports;
    })
    .catch(err => err);
};

const getActivitiesHistoric = () => {
  return firestore()
    .collection('Tarihi Yerler')
    .get()
    .then(snap => {
      const historic = [];
      snap.forEach(s => historic.push(s.data()));
      return historic;
    })
    .catch(err => err);
};

const getActivitiesMuseum = () => {
  return firestore()
    .collection('Müzeler')
    .get()
    .then(snap => {
      const museum = [];
      snap.forEach(s => museum.push(s.data()));
      return museum;
    })
    .catch(err => err);
};

const getActivitiesEat = () => {
  return firestore()
    .collection('Yeme-İçme')
    .get()
    .then(snap => {
      const eat = [];
      snap.forEach(s => eat.push(s.data()));
      return eat;
    })
    .catch(err => err);
};

export default Activity = {
  getActivitiesSports,
  getActivitiesHistoric,
  getActivitiesMuseum,
  getActivitiesEat
};