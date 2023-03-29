import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const CommentCard = () => {
  return (
    <View style={{ marginTop: 10 }}>
      <View
        style={{
          padding: 10,
          borderColor: 'black',
          borderWidth: 1,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text style={{ color: 'black' }}>Pratik Gaikwad</Text>
        <Text style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="star" size={25} color={'#24baef'} />
          <Text style={{ color: 'black', alignSelf: 'center', fontSize: 20 }}>
            {' '}
            8
          </Text>
        </Text>
      </View>
      <View
        style={{
          padding: 10,
          borderColor: 'black',
          borderWidth: 1,
          borderTopWidth: 0,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}>
        <Text style={{ color: 'gray', textAlign: 'justify' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </View>
    </View>
  );
};

export default CommentCard;
