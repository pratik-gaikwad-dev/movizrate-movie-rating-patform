import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import React, { useContext, useEffect } from 'react';
import InFutureCard from '../components/InFutureCard';
import InFutureContext from '../context/contexts/InFutureContext';

const InFutureScreen = () => {
  const { setFutureItems, futureMovies } = useContext(InFutureContext);
  useEffect(() => {
    setFutureItems();
  }, [])

  return (
    <SafeAreaView>
      <FlatList
        data={futureMovies}
        showsHorizontalScrollIndicator={false}
        renderItem={element => {
          return (
            <InFutureCard name={element.item.name} videoID={element.item.videoID} type={element.item.type} desc={element.item.desc} />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default InFutureScreen;

const styles = StyleSheet.create({});
