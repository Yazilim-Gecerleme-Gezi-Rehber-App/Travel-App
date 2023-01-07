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

const getHazarKayak = () => {
  return firestore()
    .collection('Hazarbaba Kayak Merkezi')
    .get()
    .then(snap => {
      const tur = [];
      snap.forEach(s => tur.push(s.data()));
      return tur;
    })
    .catch(err => err);
};

const getKano = () => {
  return firestore()
    .collection('Kano')
    .get()
    .then(snap => {
      const tur = [];
      snap.forEach(s => tur.push(s.data()));
      return tur;
    })
    .catch(err => err);
};

const getMaceraParkı = () => {
  return firestore()
    .collection('Macera Parkı')
    .get()
    .then(snap => {
      const tur = [];
      snap.forEach(s => tur.push(s.data()));
      return tur;
    })
    .catch(err => err);
};

const getRafting = () => {
  return firestore()
    .collection('Rafting')
    .get()
    .then(snap => {
      const tur = [];
      snap.forEach(s => tur.push(s.data()));
      return tur;
    })
    .catch(err => err);
};

const getZipline = () => {
  return firestore()
    .collection('Zipline')
    .get()
    .then(snap => {
      const tur = [];
      snap.forEach(s => tur.push(s.data()));
      return tur;
    })
    .catch(err => err);
};

//Tarihi Yerler
const getCimsit = () => {
  return firestore()
    .collection('Cimşit Bey Hamamı')
    .get()
    .then(snap => {
      const tur = [];
      snap.forEach(s => tur.push(s.data()));
      return tur;
    })
    .catch(err => err);
};

const getDabakhane = () => {
  return firestore()
    .collection('Dabakhane Mescidi')
    .get()
    .then(snap => {
      const tur = [];
      snap.forEach(s => tur.push(s.data()));
      return tur;
    })
    .catch(err => err);
};

const getHarputKalesi = () => {
  return firestore()
    .collection('Harput Kalesi')
    .get()
    .then(snap => {
      const tur = [];
      snap.forEach(s => tur.push(s.data()));
      return tur;
    })
    .catch(err => err);
};

const getHarputUluCami = () => {
  return firestore()
    .collection('Harput Ulu Cami')
    .get()
    .then(snap => {
      const tur = [];
      snap.forEach(s => tur.push(s.data()));
      return tur;
    })
    .catch(err => err);
};

const getKomurhan = () => {
  return firestore()
    .collection('Kömürhan Köprüsü')
    .get()
    .then(snap => {
      const tur = [];
      snap.forEach(s => tur.push(s.data()));
      return tur;
    })
    .catch(err => err);
};

const getMaden = () => {
  return firestore()
    .collection('Maden Saat Kulesi')
    .get()
    .then(snap => {
      const tur = [];
      snap.forEach(s => tur.push(s.data()));
      return tur;
    })
    .catch(err => err);
};

const getPaluKalesi = () => {
  return firestore()
    .collection('Palu Kalesi')
    .get()
    .then(snap => {
      const tur = [];
      snap.forEach(s => tur.push(s.data()));
      return tur;
    })
    .catch(err => err);
};

const getPaluSurp = () => {
  return firestore()
    .collection('Palu Surp Lusavoric Kilisesi')
    .get()
    .then(snap => {
      const tur = [];
      snap.forEach(s => tur.push(s.data()));
      return tur;
    })
    .catch(err => err);
};

const getPaluKoprusu = () => {
  return firestore()
    .collection('Tarihi Palu Köprüsü')
    .get()
    .then(snap => {
      const tur = [];
      snap.forEach(s => tur.push(s.data()));
      return tur;
    })
    .catch(err => err);
};

const getIzzet = () => {
  return firestore()
    .collection('İzzet Paşa Camii')
    .get()
    .then(snap => {
      const tur = [];
      snap.forEach(s => tur.push(s.data()));
      return tur;
    })
    .catch(err => err);
};

const getSefik = () => {
  return firestore()
    .collection('Şefik Gül Kültür Evi')
    .get()
    .then(snap => {
      const tur = [];
      snap.forEach(s => tur.push(s.data()));
      return tur;
    })
    .catch(err => err);
};

//Müzeler

export default ActivityDetail = {
    getHazarTekneTuru,
    getHazarKayak,
    getKano,
    getMaceraParkı,
    getRafting,
    getZipline,
    getCimsit,
    getDabakhane,
    getHarputKalesi,
    getHarputUluCami,
    getKomurhan,
    getMaden,
    getPaluKalesi,
    getPaluSurp,
    getPaluKoprusu,
    getIzzet,
    getSefik,
}