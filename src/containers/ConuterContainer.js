import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';

const ConuterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

/* 내부 객체들은 props로 전달된다. */

// 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
const mapStateToProps = (state) => ({
  // state = 현재 스토어가 지니고 있는 상태
  number: state.counter.number,
});

// 액션 생성함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
const mapDispatchToProps = (dispatch) => ({
  // store의 내장 함수 dispatch를 파라미터로 받아 온다.
  // 임시 함수
  increase: () => {
    console.log('increase');
  },
  decrease: () => {
    console.log('decrease');
  },
});

/* 
    이거랑 같음 
    const makeContainer = connect(mapStateToProps, mapDispatchToProps)
    makeContainer(ConuterContainer)
*/
export default connect(mapStateToProps, mapDispatchToProps)(ConuterContainer);
