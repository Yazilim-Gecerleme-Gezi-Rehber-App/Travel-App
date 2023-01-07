import React, {useState,useEffect} from 'react';
import { View, Text, Image, Alert, ScrollView, ActivityIndicator } from 'react-native';
import styles from './DetailPage.styles';
import { useNavigation } from '@react-navigation/native';
import {ActivityDetail} from '../../../services/activitiesDetail';

const DetailPage = ({route}) => {
  // console.log('seçilen aktivite :',route.params);
  const [activity, setActivity] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(route.params == 'Hazar Gölü Tekne Turu'){
      ActivityDetail.getHazarTekneTuru()
      .then(act => {
        setActivity(act), setLoading(false);
        console.log('gelen veri :',activity);
      })
      .catch(err => Alert.alert(err.code, err.message));
    }
  });

  if (loading) {
    <ActivityIndicator color="green" size="large" />;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {activity &&
          activity.map((data, index) => (
            <View style={styles.body_container} key={index}>
              <Image style={styles.image} source={{ uri:data.img }}/>
              <Text style={styles.header}>{route.params}</Text>
              <Text style={styles.description}>{data.description}</Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default DetailPage;