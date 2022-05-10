import * as bcrypt from 'bcryptjs';
import * as fs from 'fs';
import * as jwt from 'jsonwebtoken';
import Users from '../models/users.model';
import { IUser } from '../../interfaces';

const secret = fs.readFileSync('jwt.evaluation.key', 'utf8');

class LoginService {
  static login = async (data: IUser) => {
    const { email, password } = data;
    const userI = await Users.findOne({ where: { email } }) as Users;
    if (!userI) {
      return { message: 'Incorrect email or password' };
    }
    const token = jwt.sign({ data: email }, secret, { algorithm: 'HS256' });
    const passwordCheck = bcrypt.compareSync(password, userI.password);
    if (!passwordCheck) return { message: 'Incorrect email or password' };

    const user = {
      id: userI.id,
      username: userI.username,
      role: userI.role,
      email: userI.email,
    };
    const response = { user, token };
    return response;
  };
}

export default LoginService;
