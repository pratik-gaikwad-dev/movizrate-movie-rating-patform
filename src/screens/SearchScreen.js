import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Searchbar} from 'react-native-paper';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  const Eva = Platform.OS === 'ios' ? 0 : 1;
  return (
    <SafeAreaView>
      <View style={{padding: 10}}>
        <Searchbar
          elevation={Eva}
          style={{
            backgroundColor: 'white',
            shadowColor: 'gray',
            shadowOffset: {width: 3, height: 3},
            shadowOpacity: 0.3
          }}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
