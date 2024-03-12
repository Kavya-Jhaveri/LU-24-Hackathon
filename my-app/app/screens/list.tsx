import React from 'react';
import { View, Text } from 'react-native';
import Footer from '../components/Footer';

const List = ({ navigation }) => {
  return (
    <View>
      <Text>List</Text>
      <Footer navigation={navigation} />
    </View>
  );
};

export default List;
