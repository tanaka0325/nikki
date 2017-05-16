import React, { Component } from 'react';
import { connect } from 'react-redux';
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

import {
  emailChanged,
  passwordChanged
} from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>LoginForm!!!</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item>
              <Label>Email</Label>
              <Input
                fixedLabel
                placeholder="test@example.com"
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
              />
            </Item>
            <Item last>
              <Label>Password</Label>
              <Input
                fixedLabel
                placeholder="password"
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
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

const mapStateToProps = ({ auth }) => {
  const { email, password } = auth;
  return { email, password };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
