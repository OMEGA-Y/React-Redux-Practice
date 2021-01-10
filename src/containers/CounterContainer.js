import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux"; // **** (1) 불러오기
import Counter from "../components/Counter";
import { increment, decrement } from "../store/modules/counter";

class CounterContainer extends Component {
  handleIncrement = () => {
    this.props.increment();
  };
  handleDecrement = () => {
    this.props.decrement();
  };
  render() {
    const { color, number } = this.props;
    return (
      <Counter
        color={color}
        value={number}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
      />
    );
  }
}

const mapStateToProps = ({ counter }) => ({
  color: counter.color,
  number: counter.number
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ increment, decrement }, dispatch); // **** (2) bindActionCreators 사용.

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
