import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import api from "../../services/api";

import { Container, Content, Form, ButtonsWrapper } from "./styles";
import { ErrorMessage, SuccessMessage } from "../../styles/components";

import Input from "../../components/Input";

class Login extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      name: "",
      cpf: "",
      cellphone: "",
      password: "",
      error: null,
      successRegister: false
    };
  }

  componentWillUnmount() {
    clearTimeout(this.redirectToLogin);
  }

  redirectToLogin = null;

  handleChangeInput = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  submitForm = async event => {
    if (event) event.preventDefault();

    const dataRequest = { ...this.state };

    delete dataRequest.error;
    delete dataRequest.successRegister;

    try {
      const data = await api.post("/register", dataRequest);

      if (!data.error) {
        this.setState({
          successRegister: true,
          error: null
        });

        this.redirectToLogin = setTimeout(
          () => this.props.history.push("/login"),
          1000
        );
      } else {
        this.setState({ error: data.error });
      }
    } catch (err) {
      console.log("err: ", err);
    }
  };

  render() {
    const {
      name,
      email,
      cpf,
      cellphone,
      password,
      error,
      successRegister
    } = this.state;

    return (
      <Container>
        <Content>
          <h1>Ekki</h1>

          <Form onSubmit={this.submitForm}>
            <Input
              handleChange={this.handleChangeInput}
              label="Nome:"
              value={name}
              type="name"
              name="name"
              autoFocus={true}
            />

            <Input
              handleChange={this.handleChangeInput}
              label="Email:"
              value={email}
              type="email"
              name="email"
            />

            <Input
              handleChange={this.handleChangeInput}
              label="Cpf:"
              value={cpf}
              name="cpf"
              maxLength={11}
            />

            <Input
              handleChange={this.handleChangeInput}
              label="Telefone:"
              value={cellphone}
              type="tel"
              name="cellphone"
            />

            <Input
              handleChange={this.handleChangeInput}
              label="Senha:"
              value={password}
              type="password"
              name="password"
            />

            {error && <ErrorMessage>* {error}</ErrorMessage>}

            {successRegister && (
              <SuccessMessage>Usuário cadastrado com sucesso!</SuccessMessage>
            )}

            <ButtonsWrapper>
              <button>registrar-se</button>
              <Link to="/login">Entrar</Link>
            </ButtonsWrapper>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Login;
