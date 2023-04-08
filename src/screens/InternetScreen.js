import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

const InternetScreen = () => {

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Icon name='wifi-off' size={100} color={"black"} />
        <Text style={styles.text}>Internet is not Working. </Text>
        <Button>Reload</Button>
      </View>
    </SafeAreaView>
  )
}

export default InternetScreen

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  text: {
    color: "black",
    fontSize: 20,
    marginTop: 20
  }
})