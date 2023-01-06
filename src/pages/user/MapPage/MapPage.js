import { View, Text } from 'react-native';
import React, { useState } from 'react';
import styles from './MapPage.styles';
import MapView, {Marker} from 'react-native-maps';

const MapPage = () => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map_view}
      >
        {}
        <Marker
          coordinate={{
            latitude:39.92042214628048, 
            longitude:44.04432951475862
          }}
          title="Iğdır"
          description="Doğu'nun Paris'i"
        />
      </MapView>
    </View>
  );
};

export default MapPage;