import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

class Readmore extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.readMoreWrapper}>      
        <Text style={styles.readText}>This is just a random text! Look at the awesome newz about the rocket...lorem ipsum.....</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  readText: {
    fontSize: 23,
    fontWeight: '500',
    marginLeft: 12,
    color: 'white',
    marginBottom: 100,
  },
  readMoreWrapper: {
    position: 'absolute',
    bottom: 25,
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Readmore;
