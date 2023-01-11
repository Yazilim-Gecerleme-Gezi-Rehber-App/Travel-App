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
      })
      .catch(err => Alert.alert(err.code, err.message));
    }
    else if(route.params == 'Hazarbaba Kayak Merkezi'){
      ActivityDetail.getHazarKayak()
      .then(act => {
        setActivity(act), setLoading(false);
      })
      .catch(err => Alert.alert(err.code, err.message));
    }
    else if(route.params == 'Kano'){
      ActivityDetail.getKano()
      .then(act => {
        setActivity(act), setLoading(false);
      })
      .catch(err => Alert.alert(err.code, err.message));
    }
    else if(route.params == 'Macera Parkı'){
      ActivityDetail.getMaceraParkı()
      .then(act => {
        setActivity(act), setLoading(false);
      })
      .catch(err => Alert.alert(err.code, err.message));
    }
    else if(route.params == 'Rafting'){
      ActivityDetail.getRafting()
      .then(act => {
        setActivity(act), setLoading(false);
      })
      .catch(err => Alert.alert(err.code, err.message));
    }
    else if(route.params == 'Zipline'){
      ActivityDetail.getZipline()
      .then(act => {
        setActivity(act), setLoading(false);
      })
      .catch(err => Alert.alert(err.code, err.message));
    }
    //Tarihi Yerler
    else if(route.params == 'Cimşit Bey Hamamı'){
      ActivityDetail.getCimsit()
      .then(act => {
        setActivity(act), setLoading(false);
      })
      .catch(err => Alert.alert(err.code, err.message));
    }
    else if(route.params == 'Dabakhane Mescidi'){
      ActivityDetail.getDabakhane()
      .then(act => {
        setActivity(act), setLoading(false);
      })
      .catch(err => Alert.alert(err.code, err.message));
    }
    else if(route.params == 'Harput Kalesi'){
      ActivityDetail.getHarputKalesi()
      .then(act => {
        setActivity(act), setLoading(false);
      })
      .catch(err => Alert.alert(err.code, err.message));
    }
    else if(route.params == 'Harput Ulu Cami'){
      ActivityDetail.getHarputUluCami()
      .then(act => {
        setActivity(act), setLoading(false);
      })
      .catch(err => Alert.alert(err.code, err.message));
    }
    else if(route.params == 'Kömürhan Köprüsü'){
      ActivityDetail.getKomurhan()
      .then(act => {
        setActivity(act), setLoading(false);
      })
      .catch(err => Alert.alert(err.code, err.message));
    }
    else if(route.params == 'Maden Saat Kulesi'){
      ActivityDetail.getMaden()
      .then(act => {
        setActivity(act), setLoading(false);
      })
      .catch(err => Alert.alert(err.code, err.message));
    }
    else if(route.params == 'Palu Kalesi'){
      ActivityDetail.getPaluKalesi()
      .then(act => {
        setActivity(act), setLoading(false);
      })
      .catch(err => Alert.alert(err.code, err.message));
    }
    else if(route.params == 'Palu Surp Lusavoric Kilisesi'){
      ActivityDetail.getPaluSurp()
      .then(act => {
        setActivity(act), setLoading(false);
      })
      .catch(err => Alert.alert(err.code, err.message));
    }
    else if(route.params == 'Tarihi Palu Köprüsü'){
      ActivityDetail.getPaluKoprusu()
      .then(act => {
        setActivity(act), setLoading(false);
      })
      .catch(err => Alert.alert(err.code, err.message));
    }
    else if(route.params == 'İzzet Paşa Camii'){
      ActivityDetail.getIzzet()
      .then(act => {
        setActivity(act), setLoading(false);
      })
      .catch(err => Alert.alert(err.code, err.message));
    }
    else if(route.params == 'Şefik Gül Kültür Evi'){
      ActivityDetail.getSefik()
      .then(act => {
        setActivity(act), setLoading(false);
      })
      .catch(err => Alert.alert(err.code, err.message));
    }
    else if(route.params == 'Arkeoloji ve Etnoğrafya Müzesi'){
      ActivityDetail.getEtnografMuze()
      .then(act => {
        setActivity(act), setLoading(false);
      })
      .catch(err => Alert.alert(err.code, err.message));
    }
    else if(route.params == 'Harput Musiki Müzesi'){
      ActivityDetail.getMusikiMuze()
      .then(act => {
        setActivity(act), setLoading(false);
      })
      .catch(err => Alert.alert(err.code, err.message));
    }
    else if(route.params == 'Ciğerci Kamil Usta'){
      ActivityDetail.getKamil()
      .then(act => {
        setActivity(act), setLoading(false);
      })
      .catch(err => Alert.alert(err.code, err.message));
    }
    else if(route.params == 'Elaziz Mutfağı'){
      ActivityDetail.getElaziz()
      .then(act => {
        setActivity(act), setLoading(false);
      })
      .catch(err => Alert.alert(err.code, err.message));
    }

    else if(route.params == 'Keyfet Steak House'){
      ActivityDetail.getKeyfet()
      .then(act => {
        setActivity(act), setLoading(false);
      })
      .catch(err => Alert.alert(err.code, err.message));
    }
    else if(route.params == 'Koçoğlu Restaurant'){
      ActivityDetail.getKocoglu()
      .then(act => {
        setActivity(act), setLoading(false);
      })
      .catch(err => Alert.alert(err.code, err.message));
    }
    else if(route.params == 'Mangal Vadisi'){
      ActivityDetail.getMangal()
      .then(act => {
        setActivity(act), setLoading(false);
      })
      .catch(err => Alert.alert(err.code, err.message));
    }
    else if(route.params == 'Orjin İskender'){
      ActivityDetail.getOrjin()
      .then(act => {
        setActivity(act), setLoading(false);
      })
      .catch(err => Alert.alert(err.code, err.message));
    }
    else if(route.params == 'Selo Usta Tatlıları'){
      ActivityDetail.getSelo()
      .then(act => {
        setActivity(act), setLoading(false);
      })
      .catch(err => Alert.alert(err.code, err.message));
    }
    else if(route.params == 'Hisar Kasap Izgara'){
      ActivityDetail.getHisar()
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
        source={require('../../../components/assets/back-water-blur.jpg')}
        style={styles.background}
      />
      <ScrollView>
        {activity &&
          activity.map((data, index) => (
            <View style={styles.body_container} key={index}>
              <Image style={styles.image} source={{uri: data.img}} />
              <Text style={styles.header}>{route.params}</Text>
              <Text style={styles.description} adjustsFontSizeToFit={true}>
                {data.description}
              </Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default DetailPage;