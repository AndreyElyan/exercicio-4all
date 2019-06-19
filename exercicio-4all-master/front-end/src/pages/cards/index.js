import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { Content } from "../../styles/components";

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
