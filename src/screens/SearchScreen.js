import { FlatList, Platform, StyleSheet, View } from 'react-native';
import React, { useContext } from 'react';
import { Searchbar } from 'react-native-paper';
import TopBar from '../components/TopBar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MoviesContext from '../context/contexts/MoviesContext';
import PlaylistCard from '../components/PlaylistCard';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const insets = useSafeAreaInsets();
  const { searchMovie } = useContext(MoviesContext);
  const [loading, setLoading] = React.useState(false);
  const [searchedItems, setSearchedItems] = React.useState([]);

  const onChangeSearch = query => {
    setSearchQuery(query);
    if (query.length === 0) {
      return;
    }
    setLoading(true);
    searchMovie(query, setSearchedItems)
    setLoading(false)
  };
  const Eva = Platform.OS === 'ios' ? 0 : 1;
  return (
    <>
      <View style={{ padding: 10, paddingTop: insets.top, marginTop: 10 }}>
        <Searchbar
          elevation={Eva}
          style={{
            backgroundColor: 'white',
            shadowColor: 'black',
            shadowOffset: { width: 3, height: 3 },
            shadowOpacity: 0.3,
          }}
          loading={loading}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      {searchQuery.length >= 1 ? (
        <FlatList
          data={searchedItems}
          showsHorizontalScrollIndicator={false}
          renderItem={element => {
            return (
              <PlaylistCard
                rating={element.item.rating}
                name={element.item.name}
                image={element.item.posterImage}
                genre={element.item.genre}
                usrRatings={false}
                id={element.item._id}
                showMenu={false}
              />
            );
          }}
        />
      ) : (
        <TopBar />
      )}
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
