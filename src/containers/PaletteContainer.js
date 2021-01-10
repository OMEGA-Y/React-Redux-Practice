import React, { Component } from "react";
import { connect } from "react-redux";
import Palette from "../components/Palette";
import { changeColor } from "../store/modules/counter";

class PaletteContainer extends Component {
  handleSelect = (color) => {
    const { changeColor } = this.props;
    console.log("what");
    changeColor(color);
  };

  render() {
    const { color } = this.props;
    return <Palette onSelect={this.handleSelect} selected={color} />;
  }
}

// props 로 넣어줄 스토어 상태값
const mapStateToProps = (state) => ({
  color: state.counter.color
});

// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = (dispatch) => ({
  changeColor: (color) => dispatch(changeColor(color))
});

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(
  mapStateToProps, // 스토어 안에 들어있는 값을 props로 전달
  mapDispatchToProps // 스토어 안에 들어있는 액션 생성함수들을 props로 전달
)(PaletteContainer);
// connect 함수가 호출되면 특정 컴포넌트에 설정된 props를 전달해주는 함수가 반환됨
// connect(...)(PaletteContainer) = connect()를 호출해서 반환받은 함수에, PaletteContainer를 파라미터로 넣어서 호출한 것
