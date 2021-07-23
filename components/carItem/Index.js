import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import StyledButton from '../StyledButton/Index';
import styles from './styles';
export default function CarItem({
  title,
  subtitle,
  subtitleCTA,
  backgroundImage,
}) {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={backgroundImage} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>
          {subtitle} <Text style={styles.subtitleCTA}>{subtitleCTA}</Text>
        </Text>
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
