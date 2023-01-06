import React, { useEffect, useState} from "react";
import {Text, View, Image, TouchableOpacity, ScrollView, ActivityIndicator, Alert, FlatList} from 'react-native';
import styles from './ActivitiesList.styles';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import {Activity} from '../../../services';

const ActivitiesList = ({route}) => {
  // console.log("Gelen Şehir: ",route.params.selectedCity);
  // console.log("Gelen Aktivite: ",route.params.selectedActivities);

  const [activity, setActivity] = useState('');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(route.params.selectedActivities == 'Spor Aktiviteleri' && route.params.selectedCity == 'Elazığ'){
      Activity.getActivitiesSports()
      .then(act => {
        setActivity(act), setLoading(false);
      })
      .catch(err => Alert.alert(err.code, err.message));
    }
    else if(route.params.selectedActivities == 'Tarihi Yerler' && route.params.selectedCity == 'Elazığ'){
      Activity.getActivitiesHistoric()
      .then(act => {
        setActivity(act), setLoading(false);
      })
      .catch(err => Alert.alert(err.code, err.message));
    }
    else if(route.params.selectedActivities == 'Müzeler' && route.params.selectedCity == 'Elazığ'){
      Activity.getActivitiesMuseum()
      .then(act => {
        setActivity(act), setLoading(false);
      })
      .catch(err => Alert.alert(err.code, err.message));
    }
    else{
      Activity.getActivitiesEat()
      .then(act => {
        setActivity(act), setLoading(false);
      })
      .catch(err => Alert.alert(err.code, err.message));
    }
  });

  if (loading) {
    <ActivityIndicator color="green" size="large" />;
  }


  return (
    <View style={styles.container}>
      <Image
        source={require('../../../components/assets/back-gray-blur.jpg')}
        style={styles.background}
      />
      <View style={styles.header}>
        <Text style={styles.cityName}>{route.params?.selectedCity}</Text>
      </View>

      <ScrollView>
        {activity &&
          activity.map((data, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.body_container} 
              onPress={() => NavigationPreloadManager.navigate({})}
            >
              <Image style={styles.image} source={{uri: data.imgUrl}} />
              <Text style={styles.name}>{data.name}</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

export default ActivitiesList;
