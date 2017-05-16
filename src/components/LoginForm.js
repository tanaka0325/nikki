import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
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
  passwordChanged,
  loginUser
} from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Label>Email</Label>
              <Input
                fixedLabel
                placeholder="test@test.com"
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

          <Button block primary onPress={this.onButtonPress.bind(this)}>
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

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
