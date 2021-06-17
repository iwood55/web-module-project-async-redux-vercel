import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {fetchStart, fetchSuccess, fetchFail} from '../actions/dogAction';
import {MainDiv, Button} from '../styling/dogStyle'

const Dog = (props) => {

  const {dog, dispatch} = props;

  useEffect(() => {

    dispatch(fetchStart())

    axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then(res => {
        console.log(res.data)
        dispatch(fetchSuccess(res.data))
      })
      .catch(err => {
        console.error(err)
        dispatch(fetchFail(err))
      })
  }, []);

  const handleClick = () => {

    dispatch(fetchStart());

    axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then(res => {
        console.log(res.data)
        dispatch(fetchSuccess(res.data))
      })
      .catch(err => {
        console.error(err)
        dispatch(fetchFail(err))
      })
  };

  return (
    <MainDiv>
      <h2>Random Dog Image Generator</h2>
      <img className='image' alt='Random Dog' src={dog.message}/>
      <Button className='button' onClick={handleClick}>Click For Random Doggo!</Button>
    </MainDiv>
  )
};

const mapStateToProps = (state) => {

  return ({
    dog: state.dog
  })
};

export default connect(mapStateToProps)(Dog);