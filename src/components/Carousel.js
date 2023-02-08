import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import CarouselCard from './CarouselCard';

const Carousel = () => {
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const flatListRef = useRef(null);
  const handleMomentumScrollEnd = () => {
    setScrollEnabled(true);
  };

  const handleScroll = () => {
    if (autoScroll) {
      setAutoScroll(false);
    }
    setScrollEnabled(true);
  };

  const data = [
    {
      _id: '1',
      image:
        'https://images.unsplash.com/photo-1675208985060-78a2d4a28dc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      name: 'Shree Krishna',
    },
    {
      _id: '2',
      image: 'https://images.unsplash.com/photo-1675191475318-d2bf6bad1200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80',
      name: 'Mahadeva',
    },
    {
      _id: '2',
      image: 'https://images.unsplash.com/photo-1674690017732-63c3c5f8088c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      name: 'Shree Ram',
    }
  ];

  useEffect(() => {
    let intervalId = null;

    if (autoScroll) {
      intervalId = setInterval(() => {
        if (currentIndex === ((data.length)-1)) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
        flatListRef.current.scrollToIndex({
          index: currentIndex,
          animated: true,
        });
      }, 3000);
    } else {
      setInterval(() => {
        setAutoScroll(true);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [autoScroll, currentIndex]);
  return (
    <FlatList
      ref={flatListRef}
      data={data}
      onMomentumScrollEnd={handleMomentumScrollEnd}
      onScroll={handleScroll}
      scrollEnabled={scrollEnabled}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      renderItem={element => {
        return (
          <CarouselCard image={element.item.image} title={element.item.name} />
        );
      }}
    />
  );
};

export default Carousel;

const styles = StyleSheet.create({});
