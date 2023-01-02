import React, { useEffect, useState} from "react";
import {Text, View, Image, TouchableOpacity, ScrollView, ActivityIndicator} from 'react-native';
import styles from './ActivitiesList.styles';
import { useRoute } from "@react-navigation/native";
import firestore from '@react-native-firebase/firestore';


const ActivitiesList = ({route}) => {
  // console.log("Gelen Şehir: ",route.params.selectedCity);
  // console.log("Gelen Aktivite: ",route.params.selectedActivities);

  const [sports, setSports] = useState();
  const [historic, setHistoric] = useState();
  const [museum, setMuseum] = useState();
  const [eat, setEat] = useState();

  const [loading, setLoading] = useState(true);

  const getSportActivities = () => {
    if (route.params.selectedActivities == 'Spor Aktiviteleri' && route.params.selectedCity == 'Elazığ') {
      return firestore()
        .collection('Spor Aktivitileri')
        .get()
        .then(snap => {
          const sports = [];
          snap.forEach(s => sports.push(s.data()));
          return sports;
        })
        .catch(err => err);
    }
  };

  const getHistoricalPlaces = () => {
    if (route.params.selectedActivities == 'Tarihi Yerler' && route.params.selectedCity == 'Elazığ') {
      return firestore()
        .collection('Tarihi Yerler')
        .get()
        .then(hist => {
          const historic = [];
          hist.forEach(h => historic.push(h.data()));
          return historic;
        })
        .catch(err => err);
    }
  };

  const getMuseums = () => {
    if (route.params.selectedActivities == 'Müzeler' && route.params.selectedCity == 'Elazığ') {
      return firestore()
        .collection('Müzeler')
        .get()
        .then(mus => {
          const museum = [];
          mus.forEach(h => museum.push(h.data()));
          return museum;
        })
        .catch(err => err);
    }
  };

  const getEats = () => {
    if (route.params.selectedActivities == 'Yeme-İçme' && route.params.selectedCity == 'Elazığ') {
      return firestore()
        .collection('Yeme-İçme')
        .get()
        .then(et => {
          const eat = [];
          et.forEach(e => eat.push(e.data()));
          return eat;
        })
        .catch(err => err);
    }
  };

  useEffect(() => {
    if (route.params.selectedActivities == 'Spor Aktiviteleri'){
      getSportActivities()
      .then((sp)=>
      setSports(sp),
      setLoading(false)
      )
      .catch(err => Alert.alert(err.code, err.message))
    }
    else if(route.params.selectedActivities == 'Tarihi Yerler'){
      getHistoricalPlaces()
      .then((hs) => 
      setHistoric(hs),
      setLoading(false)
      )
      .catch(err => Alert.alert(err.code, err.message))
    }
    else if(route.params.selectedActivities == 'Müzeler'){
      getMuseums()
      .then((ms) => 
      setMuseum(ms),
      setLoading(false)
      )
      .catch(err => Alert.alert(err.code, err.message))
    }
    else{
      getEats()
      .then((et) => 
      setEat(et),
      setLoading(false)
      )
      .catch(err => Alert.alert(err.code, err.message))
    }
  });

  if(loading){
    return <ActivityIndicator color='#00ff00' size='large' />
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../components/assets/back-gray-blur.jpg')}
        style={styles.background}
      />
      <Text style={styles.cityName}>{route.params?.selectedCity}</Text>
      <ScrollView style={styles.scroll}>
        {sports &&
          sports.map((data, index) => (
            <View key={index} style={styles.body_container}>
              {console.log('name :', data.name)}
              <Image style={styles.image} source={{uri: data.imgUrl}} />
              <Text style={styles.name}>{data.name}</Text>
            </View>
          ))}
      </ScrollView>
      <ScrollView>
        {historic &&
          historic.map((data, index) => (
            <View key={index} style={styles.body_container}>
              {console.log('name :', data.name)}
              <Image style={styles.image} source={{uri: data.imgUrl}} />
              <Text style={styles.name}>{data.name}</Text>
            </View>
          ))}
      </ScrollView>
      <ScrollView style={styles.museum}>
        {museum &&
          museum.map((data, index) => (
            <View key={index} style={styles.body_container}>
              {console.log('name :', data.name)}
              <Image style={styles.image} source={{uri: data.imgUrl}} />
              <Text style={styles.name}>{data.name}</Text>
            </View>
          ))}
      </ScrollView>
      <ScrollView style={styles.eat}>
        {eat &&
          eat.map((data, index) => (
            <View key={index} style={styles.body_container}>
              {console.log('name :', data.name)}
              <Image style={styles.image} source={{uri: data.imgUrl}} />
              <Text style={styles.name}>{data.name}</Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default ActivitiesList;
