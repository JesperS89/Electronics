import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

const JWT_SECRET = "secret";

export const hashPassword = (password) => {
  const hashValue = bcrypt.hashSync(password, 8);
  return hashValue;
};

export const comparePassword = (password, hash) => {
  const correct = bcrypt.compareSync(password, hash);
  return correct;
};

export const getJWTToken = (account) => {
  const userData = { userId: account.id, username: account.username };
  const accessToken = jwt.sign(userData, JWT_SECRET);
  return accessToken;
};

export const verifyJWT = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

export const decodeJWT = (token) => {
  return jwt.decode(token, JWT_SECRET);
};
