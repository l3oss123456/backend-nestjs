import * as R from 'ramda';
const jwt = require('jsonwebtoken');
import config from '../configs';

export const JwtEncode = ({
  data = {},
  secret_key = config.token_secret_key,
  exp = '10h',
  algorithm = 'RS256',
}) => {
  return jwt.sign(
    data,
    secret_key,
    { expiresIn: exp },
    { algorithm: algorithm },
  );
};

export const JwtDecode = ({
  token = '',
  secret_key = config.token_secret_key,
}) => {
  return jwt.verify(token, secret_key);
};
