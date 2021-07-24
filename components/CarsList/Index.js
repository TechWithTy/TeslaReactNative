import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import CarItem from '../carItem/Index';

import styles from './styles';
import cars from './cars';

const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
       
      />
    </View>
  );
};

export default CarsList;
