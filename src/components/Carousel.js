import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useRef, useState } from 'react';
import CarouselCard from './CarouselCard';
import CarouselContext from '../context/contexts/CarouselContext';

const Carousel = (props) => {
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  const { items } = useContext(CarouselContext);

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

  useEffect(() => {
    // setCarouselItems();
  }, []);

  useEffect(() => {
    let intervalId = null;
    if (props.isLoading === false) {
      if (autoScroll) {
        intervalId = setInterval(() => {
          if (currentIndex === items.length - 1) {
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
    }
  }, [autoScroll, currentIndex]);
  return (
    <FlatList
      ref={flatListRef}
      data={items}
      onMomentumScrollEnd={handleMomentumScrollEnd}
      onScroll={handleScroll}
      scrollEnabled={scrollEnabled}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      renderItem={element => {
        return (
          <CarouselCard image={element.item.image} title={element.item.name} genre={element.item.genre} id={element.item._id} />
        );
      }}
    />
  );
};

export default Carousel;

const styles = StyleSheet.create({});
