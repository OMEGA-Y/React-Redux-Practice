// 액션 타입 정의(액션 이름을 지을 때 문자열의 앞부분에 모듈 이름 넣기)
const CHANGE_COLOR = "counter/CHANGE_COLOR";
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

// **** 액션 생섬함수 정의(꼭 export 하기 - 컴포넌트에 리덕스를 연동해서 사용하게 됨)
export const changeColor = (color) => ({ type: CHANGE_COLOR, color });
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// **** 초기상태 정의
const initialState = {
  color: "red",
  number: 0
};

// **** 리듀서 작성(리듀서는 꼭 export default하기 - 나중에 스토어에서 필요로 함)
export default function counter(state = initialState, action) {
  switch (action.type) {
    case CHANGE_COLOR:
      return {
        ...state,
        color: action.color
      };
    case INCREMENT:
      return {
        ...state,
        number: state.number + 1
      };
    case DECREMENT:
      return {
        ...state,
        number: state.number - 1
      };
    default:
      return state;
  }
}
