import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home Screen</Text>
      <Button
        title="Go to detail screen"
        // onPress={() => navigation.navigate('Details', {productId: '15'})}

        onPress={() => navigation.push('Details', { productId: '21' })}

        // onPress={() => navigation.replace('Details', {productId: '35'})}
      />
    </View>
  );
};

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

export default Home;
