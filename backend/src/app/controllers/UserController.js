const { User } = require("../models");
const { Op } = require("sequelize");

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll({
        attributes: ["id", "name", "email"],
        where: { id: { [Op.ne]: req.userId } }
      });
      return res.json(users);
    } catch (err) {
      return res.json({ error: "Ocorreu um erro." });
    }
  }

  async show(req, res) {
    try {
      const user = await User.findOne({
        attributes: ["id", "name", "email", "cpf", "amount"],
        where: { id: req.userId }
      });
      console.log({ user });
      return res.json(user);
    } catch (err) {
      return res.json({ error: "Ocorreu um erro." });
    }
  }

  async store(req, res) {
    const {
      email = "",
      name = "",
      cpf = "",
      cellphone = "",
      password = ""
    } = req.body;
    console.log("req.body: ", req.body);
    if (name.length < 1) {
      return res.json({ error: "Nome é necessário" });
    }

    if (email.length < 1) {
      return res.json({ error: "Email é necessário" });
    }

    if (cpf.length < 1 || cpf == !integer) {
      return res.json({ error: "Cpf é necessário" });
    }

    if (cellphone.length < 1) {
      return res.json({ error: "Telefone é necessário" });
    }

    const userFind = await User.findOne({
      where: {
        [Op.or]: [{ email }, { cpf }]
      }
    });

    if (userFind) {
      return res.json({ error: "Usuário ja existe" });
    }

    if (password.length < 6) {
      return res.json({ error: "Senha precisa ter no mínimo 6 caracteres" });
    }

    try {
      const user = await User.create(req.body);
      return res.json(user);
    } catch (err) {
      console.log("err: ", err);
      return res.json({ error: "Ocorreu um erro ao tentar criar um usuário." });
    }
  }
}

module.exports = new UserController();
