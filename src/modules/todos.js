import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

/* 1. 액션 타입 정의 */

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo를 체크 / 체크 해제
const REMOVE = 'todos/REMOVE'; // todo를 제거함

/* 2. 액션 생성 함수 만들기 */

// 파라미터를 그대로 리턴하는 경우, 두 번째 파라미터는 생략 가능,
// 하지만 적어주면 어떤 파라미터 값이 필요한지 확인 가능
export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3; // 초기 값 3으로 잡음, 사전에 이미 선언되어 있는 id라는 값에 의존함
export const insert = createAction(INSERT, (text) => ({
  // todo 객체를 액션 객체 안에 넣어 주어야 하기 때문에 두 번째 파라미터에
  // text를 넣으면 todo 객체가 반환되는 함수를 넣어 주었다.
  id: id++,
  text,
  done: false,
}));

export const toggle = createAction(TOGGLE, (id) => id);

export const remove = createAction(REMOVE, (id) => id);

/* 3. 초기 상태 및 리듀서 함수 만들기 */

const initialState = {
  input: '',
  todos: [
    { id: 1, text: '리덕스 기초 배우기', done: true },
    { id: 2, text: '리덕스 기초 배우기222', done: false },
  ],
};

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.input = input;
      }),
    [INSERT]: (state, { payload: todo }) =>
      produce(state, (draft) => {
        draft.todos.push(todo);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.todos.findIndex((todo) => todo.id === id);
        draft.todos.splice(index, 1);
      }),
  },
  initialState,
);

export default todos;
