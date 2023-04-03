import React, { useState } from 'react';
import CarouselContext from '../contexts/CarouselContext';
import config from '../../config.json';

const CarouselState = props => {
  const [items, setItems] = useState([]);
  const setCarouselItems = () => {
    setItems([]);
    try {
      const requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };

      fetch(`${config.server.host}/api/v1/movies/getcarouselmovies`, requestOptions)
        .then(response => response.json())
        .then(result => setItems(result.movies))
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CarouselContext.Provider value={{ setCarouselItems, items }}>
      {props.children}
    </CarouselContext.Provider>
  );
};

export default CarouselState;
