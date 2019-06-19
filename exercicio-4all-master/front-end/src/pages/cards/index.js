import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CardsActions } from "../../store/ducks/cards";

import { Container } from "./styles";

import {
  Content,
  PageTitle,
  ButtonsWrapper,
  HeaderPage,
  List,
  Tooltip
} from "../../styles/components";

import ModalCard from "../../components/ModalCard";

import { Limit, ContainerCard } from "../home/styles";

import formatMoney from "../../helpers/formatMoney";

const Card = ({ limit }) => (
  <ContainerCard>
    <Content>
      <Limit>
        Limite de Crédito Disponível: <strong> R$ {"500,00"}</strong>
      </Limit>
    </Content>
  </ContainerCard>
);

Card.propTypes = { limit: PropTypes.string.isRequired };

const mapStateToProps = ({ user }) => ({
  limit: user.limit ? formatMoney(user.limit) : formatMoney(0)
});

export default connect(mapStateToProps)(Card);
