import * as React from 'react';

import {View,Text,StyleSheet} from 'react-native';

export default class CreateStory extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>Create a Story</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  }
})