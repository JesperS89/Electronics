import { getAccountByUsername, registerUser } from "../services/db";
import * as utils from "../utils/authUtils";

export const authController = {
  registerNewUser: (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = utils.hashPassword(password);

    registerUser(username, hashedPassword, (error) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.sendStatus(200);
      }
    });
  },
  login: (req, res) => {
    const { username, password } = req.body;

    getAccountByUsername(username, (error, account) => {
      if (error) {
        res.status(500).send(error);
      } else if (account) {
        const hashedPassword = account.hashedPassword;
        const correctPassword = utils.comparePassword(password, hashedPassword);

        if (correctPassword) {
          const jwtToken = utils.getJWTToken(account);
          res.send(jwtToken);
        } else {
          res.sendStatus(404);
        }
      } else {
        res.sendStatus(404);
      }
    });
  },
};
