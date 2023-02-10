import React, {useState} from 'react';
import CarouselContext from '../contexts/CarouselContext';

const CarouselState = props => {
  const [items, setItems] = useState([]);
  const setCarouselItems = () => {
    setItems([
      {
        _id: '1',
        image:
          'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/Deadpool.jpg',
        posterImage: "https://i.pinimg.com/474x/5e/7f/8d/5e7f8dbdc36a0a1c660d638f67712e89.jpg",
        name: 'Deadpool',
        rating: 4.2,
      },
      {
        _id: '2',
        image:
          'https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/45285862-7bdf-44e8-bb22-1ea074003ca6/new-poster-art-for-ant-man-and-the-wasp-quantumania.jpg',
        name: 'Ant-Man and the Wasp: Quantumania',
        posterImage: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/b/b9/Ant-Man_and_the_Wasp_Quantumania_Poster_Tall.jpg/revision/latest?cb=20230110033912",
        rating: 4.3,
      },
      {
        _id: '3',
        image:
          'https://m.media-amazon.com/images/I/71LPURVJypL._SL1500_.jpg',
        name: 'Thor: Love and Thunder',
        posterImage: "https://m.media-amazon.com/images/I/91n6C5xJssL._SY679_.jpg",
        rating: 4.4,
      },
    ]);
  };
  return (
    <CarouselContext.Provider value={{setCarouselItems, items}}>
      {props.children}
    </CarouselContext.Provider>
  );
};

export default CarouselState;
