import React, { useEffect, useState} from "react";
import {Text, View, Image, TouchableOpacity, ScrollView, ActivityIndicator} from 'react-native';
import styles from './ActivitiesList.styles';
import { useRoute } from "@react-navigation/native";
import firestore from '@react-native-firebase/firestore';


const ActivitiesList = ({route}) => {
  // console.log("Gelen Şehir: ",route.params.selectedCity);
  // console.log("Gelen Aktivite: ",route.params.selectedActivities);

  const [sports, setSports] = useState();
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

  useEffect(() => {
    getSportActivities()
    .then(sp => 
      setSports(sp),
      setLoading(false)
    )
    .catch(err => Alert.alert(err.code, err.message))
  })

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
      <ScrollView>
        {sports &&
          sports.map((data, index) => (
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
