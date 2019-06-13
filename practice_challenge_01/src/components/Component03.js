import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as actions from '../actions';

const Button = styled.button`
  margin: 0 0 0 10px;
`;

class Component03 extends React.Component {
  onActionTwo(value) {
    this.props.actionTwo(value);
  }

  render() {
    const map01 = this.props.attribute_01.map((value, index) =>
      <li key={`str${index}`}>
        {value.str}
        <Button onClick={() => this.onActionTwo(value.strID)}>
          <span>Remove Item</span>
        </Button>
      </li>);

    return (
      <ul>{map01}</ul>
    );
  }
}

const mapStateToProps = (state) => {
  const { attribute_01 } = state.testReducer;

  return {
    attribute_01,
  }
}

export default connect(mapStateToProps, actions)(Component03);
