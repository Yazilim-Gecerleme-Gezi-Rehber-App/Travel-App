import { View, Text } from 'react-native';
import React from 'react';
import styles from './MapPage.styles';
import MapView from 'react-native-maps';

const MapPage = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map_view} />
    </View>
  );
};

export default MapPage;