import { Text, View } from 'react-native';
import React from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const InFutureCard = (props) => {
  return (
    <View style={{ padding: 10 }}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 10,
          shadowColor: 'black',
          shadowOpacity: 0.4,
          elevation: 4,
          borderRadius: 10,
          shadowOffset: { height: 2, width: 2 },
        }}>
        <View style={{ height: 210 }}>
          <YoutubePlayer
            height={'100%'}
            width={'100%'}
            videoId={props.videoID}
          />
        </View>
        <View
          style={{
            flex: 0,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 25,
              color: 'black',
              paddingTop: 5,
            }}>
            {props.name}
          </Text>
          {/* <Text
            style={{
              fontWeight: 'bold',
              fontSize: 25,
              color: 'black',
              paddingTop: 5,
            }}>
            <MaterialCommunityIcons
              name="playlist-plus"
              size={25}
              color="black"
            />
          </Text> */}
        </View>
        <View>
          <Text style={{ fontSize: 15, color: 'gray', paddingTop: 5 }}>
            {props.type}
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 15, color: 'black', paddingTop: 5 }}>
            {props.desc}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default InFutureCard;
