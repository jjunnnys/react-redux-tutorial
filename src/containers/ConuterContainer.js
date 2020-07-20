import React from 'react';
import Counter from '../components/Counter';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';

const ConuterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  (dispatch) =>
    // dispatch를 한번만 작성
    bindActionCreators(
      {
        increase,
        decrease,
      },
      dispatch,
    ),
)(ConuterContainer);
