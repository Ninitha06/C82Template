import * as React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  FlatList,
  SafeAreaView,
  Image
} from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

export default class StoryFeed extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
              source={require('../images/logo.png')}
              style={styles.iconImage}></Image>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Storytelling App</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15193c',
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
  },
  cardContainer: {
    flex: 0.85,
  },
});
