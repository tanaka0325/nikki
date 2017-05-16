import React, { Component } from 'react';
import {
  Container,
  Header,
  Body,
  Title,
  Content,
  Text
} from 'native-base';

export default class DialyList extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Dialy List</Title>
          </Body>
        </Header>
        <Content>
          <Text>Dialy List</Text>
        </Content>
      </Container>
    );
  }
}
