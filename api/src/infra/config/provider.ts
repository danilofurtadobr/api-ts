import { Container } from 'inversify';

const container = new Container();


// Http
import Http from '../http/Http';
import ExpressAdapter from '../http/ExpressAdapter';
import AuthController from '../controller/AuthController';
import UserController from '../controller/UserController';

container.bind<Http>('Http').to(ExpressAdapter).inSingletonScope();
container.bind<AuthController>(AuthController).toSelf();
container.bind<UserController>(UserController).toSelf();


// Repository


// Aplication Service
import UserService from '../../service/UserService';

container.bind<UserService>('UserService').to(UserService);


export { container };
