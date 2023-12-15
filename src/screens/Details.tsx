import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

// Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({route}: DetailsProps) => {
  const {productId} = route.params;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details of {productId}</Text>
      <Button
        title="Go to home"
        // onPress={() => navigation.navigate('Home')}
        onPress={() => navigation.goBack()}
      />

      <Button
        title="Go to first screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    fontSize: 16,
    color: '#000000',
  },
});
