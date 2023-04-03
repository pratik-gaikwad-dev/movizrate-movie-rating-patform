import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import React, { useContext, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import MoviesContext from '../context/contexts/MoviesContext';
import WatchMovieContext from '../context/contexts/WatchMovieContext';
import { Divider } from 'react-native-paper';
import Icons from 'react-native-vector-icons/FontAwesome';
import YoutubePlayer from 'react-native-youtube-iframe';
import CastAndDirectorContext from '../context/contexts/CastAndDirectorContext';
import CastCarousel from '../components/CastCarousel';
import MovieCarousel from '../components/MovieCarousel';
import Rating from '../components/Rating';
import AgeCard from '../components/AgeCard';
import CommentCard from '../components/CommentCard';
import UserContext from '../context/contexts/UserContext';
import { FlatList } from 'react-native-gesture-handler';

const MoviesScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {
    latestMovies,
    getMovie,
    onRatingSubmit,
    getRating,
    addReview,
    getMovieReviews,
    getAgeWiseRatings15,
    rating15,
    getAgeWiseRatings25,
    rating25,
    getAgeWiseRatings20,
    rating20,
  } = useContext(MoviesContext);
  const [descVisible, setDescVisible] = React.useState(false);
  const [trailerVisible, setTrailerVisible] = React.useState(false);
  const [watchVisible, setWatchVisible] = React.useState(false);
  const [rateNowVisible, setRateNowVisible] = React.useState(false);
  const [ageRatingsVisible, setAgeRatingsVisible] = React.useState(false);
  const [reviewVisible, setReviewVisible] = React.useState(false);
  const [comment, setComment] = React.useState('');
  const { setWatchMovie, watchMovie } = useContext(WatchMovieContext);
  const { finalCast, finalDirectors, getMovieCast } = useContext(
    CastAndDirectorContext,
  );
  const { loggedin } = useContext(UserContext);

  const [defaultRating, setDefaultRating] = React.useState(0);
  const [maxRating, setMaxRating] = React.useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);

  const [reviews, setReviews] = React.useState([]);

  const [rated, setRated] = React.useState(false);
  useEffect(() => {
    getMovieCast(route.params.movieID);
    getMovie(route.params.movieID, setWatchMovie);
    getRating(route.params.movieID, setRated, setDefaultRating);
    getMovieReviews(route.params.movieID, setReviews);
    getAgeWiseRatings15(route.params.movieID);
    getAgeWiseRatings20(route.params.movieID);
    getAgeWiseRatings25(route.params.movieID);
  }, []);
  let movieGenre;
  if (Object.keys(watchMovie).length !== 0) {
    movieGenre = watchMovie.genre.split(', ');
  }
  const showAgeRatingModal = () => setAgeRatingsVisible(true);
  const hideAgeRatingModal = () => setAgeRatingsVisible(false);

  const showDescModal = () => setDescVisible(true);
  const hideDescModal = () => setDescVisible(false);

  const showTrailerModal = () => setTrailerVisible(true);
  const hideTrailerModal = () => setTrailerVisible(false);

  const showWatchModal = () => setWatchVisible(true);
  const hideWatchModal = () => setWatchVisible(false);

  const showRateNowModal = () => {
    if (!loggedin) {
      return Alert.alert('Please login first');
    }
    setRateNowVisible(true);
  };
  const hideRateNowModal = () => setRateNowVisible(false);

  const showReviewModal = () => {
    setReviewVisible(true);
  };
  const hideReviewModal = () => setReviewVisible(false);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ height: '100%', paddingBottom: 30 }}>
          <View style={{ height: '100%' }}>
            <View style={{ width: '100%', height: '50%' }}>
              {watchMovie.image === undefined ? null : (
                <ImageBackground
                  style={{ width: '100%', height: '70%' }}
                  source={{ uri: watchMovie.image }}>
                  <View style={{ padding: 10 }}>
                    <View
                      style={{
                        marginTop: 150,
                        backgroundColor: 'white',
                        paddingTop: 10,
                        borderRadius: 20,
                        paddingBottom: 10,
                        shadowColor: 'black',
                        shadowOpacity: 0.5,
                        elevation: 10,
                        shadowOffset: {
                          height: 2,
                          width: 2,
                        },
                      }}>
                      <View
                        style={{
                          flex: 0,
                          flexDirection: 'row',
                          width: '100%',
                        }}>
                        <View style={{ flexBasis: '35%' }}>
                          {watchMovie.posterImage === undefined ? null : (
                            <Image
                              style={{
                                width: 130,
                                height: 200,
                                marginLeft: 10,
                              }}
                              source={{ uri: watchMovie.posterImage }}
                            />
                          )}
                        </View>
                        <View
                          View
                          style={{
                            flexBasis: '65%',
                            flexDirection: 'column',
                            paddingLeft: 10,
                          }}>
                          <View style={{ flexDirection: 'row' }}>
                            {movieGenre === undefined
                              ? null
                              : movieGenre.map((ele, i) => {
                                return (
                                  <View key={i} style={[styles.textStyle]}>
                                    <Text style={{ color: 'black' }}>
                                      {ele}
                                    </Text>
                                  </View>
                                );
                              })}
                          </View>
                          <View style={{ marginLeft: 10, paddingRight: 10 }}>
                            <Text
                              style={{
                                fontSize: 20,
                                color: 'black',
                                marginTop: 10,
                                fontWeight: 'bold',
                              }}>
                              {watchMovie.name}
                            </Text>
                          </View>
                          <View style={{ marginLeft: 10, paddingRight: 10 }}>
                            <TouchableOpacity onPress={showDescModal}>
                              <Text
                                style={{
                                  marginTop: 10,
                                  color: 'gray',
                                  textAlign: 'justify',
                                }}>
                                {watchMovie.desc === undefined
                                  ? null
                                  : watchMovie.desc.length > 180
                                    ? watchMovie.desc.slice(0, 180) + '...'
                                    : watchMovie.desc}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                      <View style={{ marginTop: 10 }}>
                        <Divider bold />
                      </View>
                      <View
                        style={{
                          backgroundColor: 'white',
                          marginTop: 10,
                          marginLeft: 10,
                          paddingBottom: 10,
                          paddingTop: 10,
                        }}>
                        <View
                          style={{
                            flex: 0,
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                          }}>
                          <TouchableOpacity onPress={showAgeRatingModal}>
                            <View
                              style={{
                                flex: 0,
                                flexDirection: 'row',
                                alignItems: 'center',
                              }}>
                              <Text>
                                <Icons
                                  name="star"
                                  size={25}
                                  color={'#a8870f'}
                                />{' '}
                              </Text>
                              <Text style={{ fontSize: 15, color: 'black' }}>
                                {' '}
                                {watchMovie.rating
                                  ? (
                                    watchMovie.rating /
                                    watchMovie.totalratings
                                  ).toFixed(1)
                                  : 0}
                              </Text>
                            </View>
                          </TouchableOpacity>

                          <View
                            style={{
                              flex: 0,
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            {rated ? (
                              <>
                                <Text>
                                  <Icons
                                    name="star"
                                    size={25}
                                    color={'#24baef'}
                                  />{' '}
                                </Text>
                                <Text style={{ fontSize: 15, color: 'black' }}>
                                  {' '}
                                  {defaultRating}
                                </Text>
                              </>
                            ) : (
                              <>
                                <TouchableOpacity
                                  style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                  }}
                                  onPress={showRateNowModal}>
                                  <Text>
                                    <Icons
                                      name="star-o"
                                      size={25}
                                      color={'#24baef'}
                                    />{' '}
                                  </Text>
                                  <Text style={{ fontSize: 15, color: 'black' }}>
                                    {' '}
                                    Rate Now
                                  </Text>
                                </TouchableOpacity>
                              </>
                            )}
                          </View>

                          <View>
                            <TouchableOpacity
                              style={{
                                backgroundColor: '#24baef',
                                padding: 10,
                                width: 100,
                                borderRadius: 10,
                              }}
                              onPress={showReviewModal}>
                              <Text
                                style={{ textAlign: 'center', color: 'black' }}>
                                Add Review
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                      <View style={{ marginTop: 10 }}>
                        <Divider bold />
                      </View>
                      <View style={{ marginTop: 10 }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                          }}>
                          <TouchableOpacity
                            onPress={showWatchModal}
                            style={{
                              flex: 0,
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: '#f7f414',
                              padding: 10,
                              borderRadius: 10,
                              marginTop: 10,
                              width: 150,
                            }}>
                            <Text style={{ color: 'black' }}>Watch Now</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={showTrailerModal}
                            style={{
                              flex: 0,
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: '#f04d4a',
                              padding: 10,
                              borderRadius: 10,
                              marginTop: 10,
                              width: 150,
                            }}>
                            <Text style={{ color: 'white' }}>Trailer</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              )}
            </View>
            <View style={{ marginTop: 20 }}>
              <View style={{ backgroundColor: 'white' }}>
                <CastCarousel data={finalCast} title="Top Actors" />
              </View>
              <View style={{ backgroundColor: 'white', marginTop: 10 }}>
                <CastCarousel
                  data={finalDirectors}
                  title="Directors and Writers"
                />
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  marginTop: 10,
                  marginLeft: 10,
                }}>
                {/* <MovieCarousel title="More Like This" data={latestMovies} /> */}
              </View>
            </View>
          </View>
        </View>

        {/* Reviews Modal */}
        <Modal
          visible={reviewVisible}
          onDismiss={hideReviewModal}
          animationType="slide"
          style={{
            backgroundColor: 'white',
            justifyContent: 'center',
          }}>
          <SafeAreaView>
            <View style={{ padding: 20 }}>
              <Text style={{ alignSelf: 'flex-end' }}>
                <TouchableOpacity onPress={() => setReviewVisible(false)}>
                  <Icons name="close" color={'gray'} size={25} />
                </TouchableOpacity>
              </Text>
              <View style={{ marginTop: 10 }}>
                <View>
                  <Text style={{ fontSize: 20, marginTop: 10 }}>
                    Add a Review
                  </Text>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'black',
                      height: 100,
                      borderRadius: 5,
                      backgroundColor: '#edf0f0',
                      marginTop: 10,
                    }}>
                    <TextInput
                      editable
                      multiline
                      numberOfLines={4}
                      maxLength={100}
                      onChangeText={text => setComment(text)}
                      value={comment}
                      style={{ padding: 10 }}
                      placeholder="Add Review"
                    />
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <TouchableOpacity
                      style={{
                        borderWidth: 1,
                        borderColor: '#24baef',
                        alignItems: 'center',
                        padding: 10,
                        borderRadius: 5,
                        backgroundColor: '#24baef',
                      }}
                      onPress={() =>
                        addReview(
                          comment,
                          watchMovie._id,
                          setComment,
                          setReviewVisible,
                        )
                      }>
                      <Text style={{ fontWeight: '500', fontSize: 15 }}>
                        Submit
                      </Text>
                    </TouchableOpacity>
                  </View>
                  {reviews.length === 0 ? (
                    <View style={{ width: '100%', marginTop: 50 }}>
                      <Text
                        style={{
                          alignSelf: 'center',
                          fontSize: 18,
                          fontWeight: '500',
                        }}>
                        No reviews available
                      </Text>
                    </View>
                  ) : (
                    <View style={{ marginTop: 20 }}>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: '500',
                          fontSize: 20,
                        }}>
                        Top Reviews
                      </Text>
                      <View style={{ marginTop: 10 }}>
                        {/* <ScrollView>
                            {reviews.map((ele) => (
                              <CommentCard name={ele.name} review={ele.review} rating={defaultRating} />
                            ))}
                          </ScrollView> */}
                        <FlatList
                          data={reviews}
                          renderItem={({ item }) => (
                            <CommentCard
                              name={item.name}
                              review={item.review}
                              rating={defaultRating}
                            />
                          )}
                          keyExtractor={item => item._id}
                        />
                      </View>
                    </View>
                  )}
                </View>
              </View>
            </View>
          </SafeAreaView>
        </Modal>

        {/* Age Ratings Modal */}
        <Modal
          visible={ageRatingsVisible}
          onDismiss={hideAgeRatingModal}
          animationType="slide"
          style={{
            backgroundColor: 'white',
            flex: 0,
            justifyContent: 'flex-start',
            height: '50%',
            width: '50%',
          }}>
          <SafeAreaView>
            <View style={{ padding: 20 }}>
              <Text style={{ alignSelf: 'flex-end' }}>
                <TouchableOpacity onPress={() => setAgeRatingsVisible(false)}>
                  <Icons name="close" color={'gray'} size={25} />
                </TouchableOpacity>
              </Text>
              <View>
                <AgeCard key={1} title="Age 15 to 20" rating={rating15} />
                <AgeCard key={2} title="Age 21 to 25" rating={rating20} />
                <AgeCard key={3} title="Age 25 to 30" rating={rating25} />
              </View>
            </View>
          </SafeAreaView>
        </Modal>

        {/* Desc Modal */}
        <Modal
          visible={descVisible}
          onDismiss={hideDescModal}
          animationType="slide"
          style={{
            backgroundColor: 'white',
            flex: 0,
            justifyContent: 'flex-start',
            height: '50%',
            width: '50%',
          }}>
          <SafeAreaView>
            <View style={{ padding: 20 }}>
              <Text style={{ alignSelf: 'flex-end' }}>
                <TouchableOpacity onPress={() => setDescVisible(false)}>
                  <Icons name="close" color={'gray'} size={25} />
                </TouchableOpacity>
              </Text>
              <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>
                {watchMovie.name} Storyline
              </Text>
              <Text
                style={{ marginTop: 20, color: 'black', textAlign: 'justify' }}>
                {watchMovie.desc === undefined ? null : watchMovie.desc}
              </Text>
            </View>
          </SafeAreaView>
        </Modal>

        {/* Rate Now Modal*/}
        <Modal
          visible={rateNowVisible}
          onDismiss={hideRateNowModal}
          animationType="slide"
          style={{
            backgroundColor: 'white',
            flex: 0,
            justifyContent: 'flex-start',
            height: '50%',
            width: '50%',
          }}>
          <SafeAreaView>
            <View>
              <View>
                <View style={{ paddingRight: 10 }}>
                  <Text style={{ alignSelf: 'flex-end' }}>
                    <TouchableOpacity onPress={() => setRateNowVisible(false)}>
                      <Icons name="close" color={'gray'} size={25} />
                    </TouchableOpacity>
                  </Text>
                </View>
                <View
                  style={{
                    flex: 0,
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{ paddingBottom: 0, width: '100%', height: '80%' }}>
                    <Image
                      style={{
                        width: '90%',
                        height: '100%',
                        alignSelf: 'center',
                        borderRadius: 5,
                      }}
                      source={{ uri: watchMovie.posterImage }}
                    />
                  </View>
                  <View
                    style={{
                      flex: 0,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: 20,
                    }}>
                    <Rating
                      maxRating={maxRating}
                      defaultRating={defaultRating}
                      setDefaultRating={setDefaultRating}
                    />
                  </View>
                  <View
                    style={{
                      flex: 0,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <TouchableOpacity
                      style={{
                        borderWidth: 1,
                        borderColor: '#24baef',
                        width: 200,
                        padding: 10,
                        backgroundColor: '#24baef',
                        borderRadius: 5,
                        marginTop: 20,
                      }}
                      onPress={() =>
                        onRatingSubmit(
                          watchMovie._id,
                          defaultRating,
                          setRateNowVisible,
                          setRated,
                          watchMovie,
                        )
                      }>
                      <Text
                        style={{
                          textAlign: 'center',
                          color: 'black',
                          fontWeight: '500',
                          fontSize: 15,
                        }}>
                        Submit
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </Modal>

        {/* Trailer Modal */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 22,
          }}>
          <Modal
            animationType="fade"
            visible={trailerVisible}
            transparent
            onDismiss={hideTrailerModal}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 22,
              }}>
              <View style={{ width: '100%', padding: 20 }}>
                <Text style={{ alignSelf: 'flex-end' }}>
                  <TouchableOpacity onPress={() => setTrailerVisible(false)}>
                    <Icons name="close" color={'gray'} size={25} />
                  </TouchableOpacity>
                </Text>
                <View
                  style={{
                    height: 200,
                    borderWidth: 2,
                    borderColor: 'black',
                    width: '100%',
                  }}>
                  <YoutubePlayer
                    height={'100%'}
                    width={'100%'}
                    videoId={watchMovie.videoID}
                  />
                </View>
              </View>
            </View>
          </Modal>

          {/* Watch Now Modal */}
          <Modal
            animationType="fade"
            visible={watchVisible}
            onDismiss={hideWatchModal}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 22,
              }}>
              <View style={{ width: '100%', padding: 20 }}>
                <Text style={{ alignSelf: 'flex-end' }}>
                  <TouchableOpacity onPress={() => setWatchVisible(false)}>
                    <Icons name="close" color={'gray'} size={25} />
                  </TouchableOpacity>
                </Text>
                <View>
                  <TouchableOpacity
                    style={{
                      flex: 0,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#3b8cff',
                      padding: 10,
                      borderRadius: 10,
                    }}>
                    <Text style={{ color: 'black', fontSize: 20 }}>
                      Watch on{' '}
                    </Text>
                    <Image
                      style={{ height: 25, width: 80 }}
                      source={require('../../assets/icons/Disney_Plus.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flex: 0,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#ff7c70',
                      padding: 10,
                      borderRadius: 10,
                      marginTop: 10,
                    }}>
                    <Text style={{ color: 'black', fontSize: 20 }}>
                      Watch on{' '}
                    </Text>
                    <Image
                      style={{ height: 25, width: 80 }}
                      source={require('../../assets/icons/Netflix.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flex: 0,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#17e4ff',
                      padding: 10,
                      borderRadius: 10,
                      marginTop: 10,
                    }}>
                    <Text style={{ color: 'black', fontSize: 20 }}>
                      Watch on{' '}
                    </Text>
                    <Image
                      style={{ height: 25, width: 80 }}
                      source={require('../../assets/icons/Prime_Video.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoviesScreen;

const styles = StyleSheet.create({
  textStyle: {
    paddingTop: 5,
    paddingBottom: 5,
    width: 80,
    textAlign: 'center',
    marginLeft: 10,
    color: 'black',
    backgroundColor: '#24baef',
    height: 30,
    borderRadius: 5,
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
