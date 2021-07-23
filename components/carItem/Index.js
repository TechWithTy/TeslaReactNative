import React from 'react';
import { ImageBackground, Text, View,onPress } from 'react-native';
import StyledButton from '../StyledButton/Index';
import styles from './styles';
export default function CarItem({ props }) {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../assets/images/ModelX.jpeg')}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model X</Text>
        <Text style={styles.subtitle}> Starting at $68,000</Text>
      </View>
      <View style={styles.buttonContainer}>
       
        <StyledButton
          type="primary"
          text="Custom Order"
          onPress={() => {
            console.warn('Custom order was pressed');
          }}
        />
        <StyledButton
          type="secondary"
          text="Existing Inventory"
          onPress={() => {
            console.warn('Existing Inventory was pressed');
          }}
        />
      </View>
    </View>
  );
}
