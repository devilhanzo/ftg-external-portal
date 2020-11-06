import React from 'react'
// import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap'
import { AuthenInput } from './components/AuthenInput'
import getAllUrlParams from './utils/urlparams'
// import { setLoginInputError, clearLoginInputError, loginUsernameInputChange, loginPasswordInputChange } from './actions';
// import { useSelector,useDispatch } from 'react-redux';
import styled from 'styled-components'
const axios = require('axios')
const qs = require('querystring')
const Styles = styled.div`

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
  text-align: center !important;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="text"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
`;


export class Portal extends React.Component {


  // static propTypes = {
  //   // loginError: PropTypes.shape({
  //   //   inputError: PropTypes.string,
  //   //   inputErrorMessage: PropTypes.string,
  //   // }),
  //   loginInputError: PropTypes.string,
  //   loginInputErrorMessage: PropTypes.string,
  //   usernameInput: PropTypes.string,
  //   passwordInput: PropTypes.string,
  //   setLoginInputError: PropTypes.func.isRequired,
  //   clearLoginInputError: PropTypes.func.isRequired,
  //   loginUsernameInputChange: PropTypes.func.isRequired,
  //   loginPasswordInputChange: PropTypes.func.isRequired,
  // }

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.doLogin = this.doLogin.bind(this);
    this.handleForgetPassword = this.handleForgetPassword.bind(this)
  }

  componentDidMount() {
    // TODO check localStorage for jwt token
    // console.log('**Component Did Mount**');
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name
    switch (name) {
      case 'username': this.setState({ username: value })
        break
      case 'password': this.setState({ password: value })
        break
      default:
    }
  }

  handleForgetPassword(event) {
    this.props.history.push('/password')
  }

  doLogin(event) {
    event.preventDefault(); // Don't refresh onSubmit action
    const params = getAllUrlParams(window.location.href)
    const url = params.post
    //const url = '/fgtauth'
    const requestBody = {
      username: this.state.username,
      password: this.state.password,
      magic: params.magic,
    }

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }

    axios.post(url, qs.stringify(requestBody), config)
      .then((result) => {
        console.log(result)
      })
      .catch((err) => {
        console.log(err)
      })
      document.authForm.submit();

    // Clear Error
    // this.props.clearLoginInputError();
    // TODO add loading animate button
    //  const formBody = require('./utils/FormBody');
    // const params = getAllUrlParams(window.location.href);
    // const ftgAPI = params.post;


    // const data = querystring.stringify({
    //   username: this.state.username,
    //   password: this.state.password,
    //   magic: params.magic,
    //   Submit: 'Login',
    // })




    // const details = {
    //   username: this.state.username,
    //   password: this.state.password,
    //   magic: params.magic,
    //   Submit: 'Login',
    // };
    // console.log("Submited authForm");
    // console.log("username "+ details.username);
    // console.log("password "+ details.password);
    // console.log("post "+ ftgAPI);
    // console.log("magic "+ params.magic);
    // console.log("isPost "+ (params.post !== undefined)?true:false);
    // console.log("isLogin")+ (params.login);

    // fetch(ftgAPI, {
    //   method: 'POST',
    //   headers: {
    //     // Accept: 'application/json',
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'cache-control': 'no-cache'
    //     // authorization: `Bearer ${token}`,
    //   },
    //   body: formBody(details),
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       response.json().then((data) => {
    //         // if (!data.ok) { // New Error
    //         //   this.props.setLoginInputError({
    //         //     inputError: data.component.name,
    //         //     inputErrorMessage: data.component.message,
    //         //   });
    //         // }
    //         // if (data.ok) {
    //         //   localStorage.setItem('token', data.token);
    //         //   document.authForm.submit(); // Submit form
    //         // }
    //         console.log(data);
    //       });
    //     }
    //   })
    //   .catch(err => console.log(err));
  }

  render() {
    return (
      <Styles>
        <Form name="authForm" className="form-signin" method="POST" onSubmit={this.doLogin} >
          {/* <img class="mb-4" src="/static/assets/kkh-logo.png" alt="" width="100%" height="100%" /> */}
          <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label for="username" class="sr-only">Username</label>
          <AuthenInput
            className="form-control"
            placeholder="Username"
            type="text"
            id="register-username"
            label="Username"
            name="username"
            onChange={this.handleInputChange} />
          <label for="password" class="sr-only">Password</label>
          <AuthenInput
            className="form-control"
            placeholder="Password"
            type="password"
            id="register-password"
            label="Password"
            name="password"
            onChange={this.handleInputChange} />
          <Button className="btn btn-lg btn-primary btn-block" type="submit">
            Login
          </Button>
        </Form>
      </Styles>
    )
  }
}

// const mapStateToProps = state => ({
//   loginInputError: state.loginError.inputError,
//   loginInputErrorMessage: state.loginError.inputErrorMessage,
//   usernameInput: state.usernameInput,
//   passwordInput: state.passwordInput,
// });

// const mapDispatchToProps = {
//   setLoginInputError,
//   clearLoginInputError,
//   loginUsernameInputChange,
//   loginPasswordInputChange,
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Portal);
