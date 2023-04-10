import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import React, { useContext, useEffect } from 'react';
import InFutureCard from '../components/InFutureCard';
import InFutureContext from '../context/contexts/InFutureContext';
import InternetScreen from './InternetScreen';
import { ActivityIndicator } from 'react-native-paper';

const InFutureScreen = () => {
  const { setFutureItems, futureMovies, isLoading, internetWorking, setinternetWorking } = useContext(InFutureContext);
  useEffect(() => {
    setFutureItems();
    setTimeout(() => {
      if (isLoading === true) {
        setinternetWorking(false);
      }
    }, 10000);
  }, [])

  return (
    <SafeAreaView>
      {isLoading === true ? internetWorking === false ? <InternetScreen /> : <ActivityIndicator size="large" style={{ height: "100%" }} /> :
        <FlatList
          data={futureMovies}
          showsHorizontalScrollIndicator={false}
          renderItem={element => {
            return (
              <InFutureCard name={element.item.name} videoID={element.item.videoID} type={element.item.type} desc={element.item.desc} />
            );
          }}
        />}
    </SafeAreaView>
  );
};

export default InFutureScreen;

const styles = StyleSheet.create({});
