import React, { Component } from 'react';
import {
  Container,
  Header,
  Body,
  Title,
  Content,
  Form,
  Item,
  Label,
  Input,
  Button,
  Text
} from 'native-base';

export default class LoginForm extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>LoginForm</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item>
              <Label>Email</Label>
              <Input
                fixedLabel
                placeholder="test@test.com"
              />
            </Item>
            <Item last>
              <Label>Password</Label>
              <Input
                fixedLabel
                placeholder="password"
              />
            </Item>
          </Form>

          <Button block primary>
            <Text>Login</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
