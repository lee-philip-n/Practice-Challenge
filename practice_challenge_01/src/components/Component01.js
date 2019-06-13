import React from 'react';
import styled from 'styled-components';

import Component02 from './Component02';
import Component03 from './Component03';

const Title = styled.div`
  font-size: 50px;
  font-weight: bold;
  margin: 0 0 25px 0;
`;

class Component01 extends React.Component {
  render() {
    return (
      <div>
        <Title>
          To-Do List
        </Title>
        <Component02 />
        <Component03 />
      </div>
    );
  }
}

export default Component01;
