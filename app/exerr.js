import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.boxBlack} />
        <View style={styles.boxYellow} />
        <View style={styles.boxBlack} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Image
          source={require('../assets/images/logo-with-motto-3.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.universityText}>University Name</Text>
        <Text style={styles.slogan}>"Your future starts here"</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.boxBlack} />
        <View style={styles.boxYellow} />
        <View style={styles.boxBlack} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'red',
    paddingVertical: 30,
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    paddingVertical: 30,
    justifyContent: 'center',
  },
  boxBlack: {
    width: 60,
    height: 60,
    backgroundColor: 'black',
    marginHorizontal: 10,
  },
  boxYellow: {
    width: 60,
    height: 60,
    backgroundColor: 'yellow',
    marginHorizontal: 10,
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 15,
  },
  universityText: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  slogan: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#555',
  },
});

export default HomeScreen;
