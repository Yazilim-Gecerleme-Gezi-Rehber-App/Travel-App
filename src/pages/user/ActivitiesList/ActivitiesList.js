import React from "react";
import {Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './ActivitiesList.styles';
import { useRoute } from "@react-navigation/native";

const ActivitiesList = () => {
    return (
      <View style={styles.container}>
        <Image source={require('../../../components/assets/back-gray-blur.jpg')} style={styles.background}/>
        <Text style={styles.cityName}>ELAZIĞ</Text>
        <ScrollView>
          <TouchableOpacity style={styles.images_container}>
            <View style={styles.body_container}>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/travel-guide-app-fd492.appspot.com/o/Elaz%C4%B1%C4%9F-Spor%2Fhazarbaba%20kayak%20merkezi.jpg?alt=media&token=5f74d550-7920-4d95-b50a-3f4543702e65',
                }}
              />
              <Text style={styles.name}>Hazarbaba Kayak Merkezi</Text>
            </View>
            <View style={styles.line}></View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.images_container}>
            <View style={styles.body_container}>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/travel-guide-app-fd492.appspot.com/o/Elaz%C4%B1%C4%9F-Spor%2Fkano.jpg?alt=media&token=0fb8d513-5f62-404c-aaaf-2787ea78dcb6',
                }}
              />
              <Text style={styles.name}>Kano</Text>
            </View>
            <View style={styles.line}></View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.images_container}>
            <View style={styles.body_container}>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/travel-guide-app-fd492.appspot.com/o/Elaz%C4%B1%C4%9F-Spor%2Fmacera%20park%C4%B1.jpg?alt=media&token=69551091-e08b-40bd-ba53-4f98377c8a30',
                }}
              />
              <Text style={styles.name}>Macera Parkı</Text>
            </View>
            <View style={styles.line}></View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.images_container}>
            <View style={styles.body_container}>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/travel-guide-app-fd492.appspot.com/o/Elaz%C4%B1%C4%9F-Spor%2Frafting.jpg?alt=media&token=9bf2033c-ba77-42c2-a742-880edec04740',
                }}
              />
              <Text style={styles.name}>Rafting</Text>
            </View>
            <View style={styles.line}></View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.images_container}>
            <View style={styles.body_container}>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/travel-guide-app-fd492.appspot.com/o/Elaz%C4%B1%C4%9F-Spor%2Ftekne%20turu.jpg?alt=media&token=cce93ae8-aaa5-44ec-9928-f98a2827c0e8',
                }}
              />
              <Text style={styles.name}>Hazar Gölü Tekne Turu</Text>
            </View>
            <View style={styles.line}></View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.images_container}>
            <View style={styles.body_container}>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/travel-guide-app-fd492.appspot.com/o/Elaz%C4%B1%C4%9F-Spor%2Fzipline.jpg?alt=media&token=f8898c34-2bc7-4372-9e80-67097fe4a7ff',
                }}
              />
              <Text style={styles.name}>Zipline</Text>
            </View>
            <View style={styles.line}></View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
};

export default ActivitiesList;