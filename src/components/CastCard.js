import { View, Text, Image } from 'react-native'
import React from 'react'

const CastCard = () => {
  return (
    <View style={{marginLeft: 10, paddingTop: 10, paddingBottom: 20}}>
      <View>
        <View>
            <Image style={{height: 150, width: 120}} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg'}}/>
        </View>
        <View style={{marginTop: 5}}>
            <Text>Ryan Reynolds</Text>
        </View>
      </View>
    </View>
  )
}

export default CastCard