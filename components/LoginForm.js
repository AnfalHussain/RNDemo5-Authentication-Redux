import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text
} from "native-base";

import { connect } from "react-redux";
import * as actionCreators from "../redux/actions/authActions";

// Actions
// import { login } from "./redux/actions";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };
  handleChange = keyValue => {
    this.setState(keyValue);
  };

  handleSubmit = () => {
    // alert("Check my code the states are empty");
    this.props.login(this.state)

  };

  render() {
    const { username, password } = this.state;
    console.log(this.state);
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input
                name="username"
                value={username}
                placeholder="Username"
                onChangeText={username => this.handleChange({ username: username })} />

            </Item>
            <Item last>
              <Input
                value={password}
                placeholder="Password"
                secureTextEntry
                name="password"
                onChangeText={password => this.handleChange({ password: password })} />


            </Item>
            <Button onPress={this.handleSubmit}>
              <Text>Login</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
// export default LoginForm;

const mapStateToProps = state =>
  ({
    user: state.rootAuth.user
  });
const mapDispatchToProps = dispatch => ({
  login: (userData, navigation) =>
    dispatch(actionCreators.loginUser(userData, navigation)),
  signup: (userData, navigation) =>
    dispatch(actionCreators.registerUser(userData, navigation)),
  checkForToken: navigation =>
    dispatch(actionCreators.checkForExpiredToken(navigation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);