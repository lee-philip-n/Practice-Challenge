import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as actions from '../actions';

const Button = styled.button`
  margin: 0 0 0 10px;
`;

class Component02 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onActionOne = this.onActionOne.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleInputChange(e) {
    const value = e.target.value;

    this.setState({
      value,
    })
  }

  onActionOne(value) {
    if (value !== '') {
      this.props.actionOne(value);
      this.setState({
        value: ''
      });
    }
  }

  handleKeyDown(e) {
    if (this.state.value !== '') {
      if (e.key === 'Shift') {
        this.onActionOne(this.state.value);
      }
    }
  }

  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={(e) => this.handleInputChange(e)}
          onKeyDown={this.handleKeyDown}
          placeholder={'Enter Text Here'}
        />
        <Button  onClick={() => this.onActionOne(this.state.value)}>
          <span>Button 01</span>
        </Button>
      </div>
    );
  }
}

export default connect(null, actions)(Component02);
