import React, {useState} from 'react';
import CastAndDirectorContext from '../contexts/CastAndDirectorContext';

const CastAndDirectorState = props => {
  const [allCast, setAllCast] = useState([]);
  const [allMovieCast, setAllMovieCast] = useState([]);
  const [finalCast, setFinalCast] = useState([]);
  const [allDirectors, setAllDirectors] = useState([]);
  const [allMovieDirectors, setAllMovieDirectors] = useState([]);
  const [finalDirectors, setFinalDirectors] = useState([]);

  const getAllCast = () => {
    setAllCast([]);
    setAllCast([
      {
        _id: '1',
        name: 'Paul Rudd',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Paul_Rudd_%28cropped%29_2.jpg/1200px-Paul_Rudd_%28cropped%29_2.jpg',
      },
      {
        _id: '2',
        name: 'Evangeline Lilly',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Evangeline_Lilly_2014_Comic_Con_01.jpg/1200px-Evangeline_Lilly_2014_Comic_Con_01.jpg',
      },
      {
        _id: '3',
        name: 'Michael Douglas',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/3/38/Michael_Douglas_C%C3%A9sar_2016_3.jpg',
      },
      {
        _id: '4',
        name: 'Michelle Pfeiffer',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/1/19/Michelle_Pfeiffer_Ant-Man_%26_The_Wasp_premiere.jpg',
      },
      {
        _id: '5',
        name: 'Jonathan Majors',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/d/d7/Jonathan_Majors_on_ColliderVideo%2C_September_2018.png',
      },
      {
        _id: '6',
        name: 'kathryn newton',
        image:
          'https://m.media-amazon.com/images/M/MV5BMDM5YjI2NDItYWY1My00ZmUyLTgyZjMtOGQzMmEyNjk0ODU5XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg',
      },
      {
        _id: '7',
        name: 'Chris Hemsworth',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/e/e8/Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg',
      },
      {
        _id: '8',
        name: 'Natalie Portman',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/d/d3/Natalie_Portman_%2848470988352%29_%28cropped%29.jpg',
      },
      {
        _id: '9',
        name: 'christian bale',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/0/0a/Christian_Bale-7837.jpg',
      },
      {
        _id: '10',
        name: 'Tessa Thompson',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/8/80/Tessa_Thompson_by_Gage_Skidmore_3.jpg',
      },
      {
        _id: '11',
        name: 'Taika Waititi',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Taika_Waititi_by_Gage_Skidmore_2.jpg/640px-Taika_Waititi_by_Gage_Skidmore_2.jpg',
      },
      {
        _id: '12',
        name: 'Idris Elba',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/0/0e/Idris_Elba-4580_%28cropped%29.jpg',
      },
      {
        _id: '13',
        name: 'Chris Pratt',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Chris_Pratt_2018.jpg/1200px-Chris_Pratt_2018.jpg',
      },
      {
        _id: '14',
        name: 'Ryan Reynolds',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/1/14/Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg',
      },
      {
        _id: '15',
        name: 'Morena Baccarin',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/a/a6/Morena_Baccarin_by_Gage_Skidmore_2.jpg',
      },
      {
        _id: '16',
        name: 'T.J. Miller',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/5/57/T._J._Miller_by_Gage_Skidmore.jpg',
      },
      {
        _id: '17',
        name: 'Ed Skrein',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/6/6b/Ed_Skrein_by_Gage_Skidmore.jpg',
      },
      {
        _id: '18',
        name: 'Karan Soni',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/1/19/Karan_Soni_by_Gage_Skidmore.jpg',
      },
      {
        _id: '19',
        name: 'Michael Benyaer',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/3/36/Michael_Benyaer_at_the_Emmy%27s.jpg',
      },
    ]);
    setAllDirectors([]);
    setAllDirectors([
      {
        _id: '1',
        name: 'Tim Miller',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/0/0c/Tim_Miller_by_Gage_Skidmore_2.jpg',
      },
      {
        _id: '2',
        name: 'Peyton Reed',
        image: 'https://static.tvtropes.org/pmwiki/pub/images/peytonreed.jpg',
      },
      {
        _id: '3',
        name: 'Taika Waititi',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Taika_Waititi_by_Gage_Skidmore_2.jpg/640px-Taika_Waititi_by_Gage_Skidmore_2.jpg',
      },
      {
        _id: '4',
        name: 'Rhett Reese',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/0/08/Rhett_Reese_by_Gage_Skidmore.jpg',
      },
      {
        _id: '5',
        name: 'Paul Wernick',
        image:
          'https://m.media-amazon.com/images/M/MV5BMjE3MjQxNTc3OV5BMl5BanBnXkFtZTgwMDk0NDE1NTM@._V1_.jpg',
      },
      {
        _id: '6',
        name: 'Jeff Loveness',
        image:
          'https://static.wikia.nocookie.net/rickandmorty/images/9/99/V5HAfua_400x400.jpg/revision/latest?cb=20190928081846',
      },
      {
        _id: '7',
        name: 'Jack Kirby',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/a/a0/Jack-Kirby_art-of-jack-kirby_wyman-skaar.jpg',
      },
      {
        _id: '8',
        name: 'Jennifer Kaytin Robinson',
        image:
          'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/5/55/Jennifer_Kaytin_Robinson.jpg/revision/latest?cb=20220702053805',
      },
      {
        _id: '9',
        name: 'Stan Lee',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Stan_Lee_by_Gage_Skidmore_3.jpg/640px-Stan_Lee_by_Gage_Skidmore_3.jpg',
      },
      {
        _id: '10',
        name: 'Jason Aaron',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-t47UocTKCVoShtavuVpXdF-6TNLKbtNSx_IAgl9xy4tSQWE0h3drxksRx3nOX43nu20&usqp=CAU',
      },
    ]);
  };

  const getAllMovieCast = () => {
    setAllMovieCast([]);
    setAllMovieCast([
      {
        movieID: '2',
        castID: '1',
      },
      {
        movieID: '2',
        castID: '2',
      },
      {
        movieID: '2',
        castID: '3',
      },
      {
        movieID: '2',
        castID: '4',
      },
      {
        movieID: '2',
        castID: '5',
      },
      {
        movieID: '2',
        castID: '6',
      },
      {
        movieID: '3',
        castID: '7',
      },
      {
        movieID: '3',
        castID: '8',
      },
      {
        movieID: '3',
        castID: '9',
      },
      {
        movieID: '3',
        castID: '10',
      },
      {
        movieID: '3',
        castID: '11',
      },
      {
        movieID: '3',
        castID: '12',
      },
      {
        movieID: '3',
        castID: '13',
      },
      {
        movieID: '1',
        castID: '14',
      },
      {
        movieID: '1',
        castID: '15',
      },
      {
        movieID: '1',
        castID: '16',
      },
      {
        movieID: '1',
        castID: '17',
      },
      {
        movieID: '1',
        castID: '18',
      },
      {
        movieID: '1',
        castID: '19',
      },
    ]);
    setAllMovieDirectors([]);
    setAllMovieDirectors([
      {
        movieID: '1',
        directorID: '1',
      },
      {
        movieID: '1',
        directorID: '4',
      },
      {
        movieID: '1',
        directorID: '5',
      },
      {
        movieID: '2',
        directorID: '2',
      },
      {
        movieID: '2',
        directorID: '6',
      },
      {
        movieID: '2',
        directorID: '7',
      },
      {
        movieID: '3',
        directorID: '3',
      },
      {
        movieID: '3',
        directorID: '8',
      },
      {
        movieID: '3',
        directorID: '9',
      },
      {
        movieID: '3',
        directorID: '10',
      },
    ]);
  };

  const sortCast = id => {
    getAllCast();
    getAllMovieCast();
    const cast = allMovieCast.filter(ele => {
      if (ele.movieID === id) {
        return ele;
      }
      return null;
    });

    let arr = [];
    for (let i = 0; i < cast.length; i++) {
      const element = cast[i];
      for (let j = 0; j < allCast.length; j++) {
        const ele = allCast[j];
        if (element.castID === ele._id) {
          arr.push(ele);
        }
      }
    }

    const director = allMovieDirectors.filter(ele => {
      if (ele.movieID === id) {
        return ele;
      }
      return null;
    });

    let darr = [];
    for (let i = 0; i < director.length; i++) {
      const element = director[i];
      for (let j = 0; j < allDirectors.length; j++) {
        const ele = allDirectors[j];
        if (element.directorID === ele._id) {
          darr.push(ele);
        }
      }
    }
    setFinalCast(arr);
    setFinalDirectors(darr);
  };
  return (
    <CastAndDirectorContext.Provider
      value={{sortCast, getAllCast, getAllMovieCast, finalCast, finalDirectors}}>
      {props.children}
    </CastAndDirectorContext.Provider>
  );
};

export default CastAndDirectorState;
