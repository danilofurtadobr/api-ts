import { Container } from 'inversify';
import Http from '../http/Http';
import ExpressAdapter from '../http/ExpressAdapter';
import AuthController from '../controller/AuthController';
import UserController from '../controller/UserController';

const container = new Container();

container.bind<Http>('Http').to(ExpressAdapter).inSingletonScope();
container.bind<AuthController>(AuthController).toSelf();
container.bind<UserController>(UserController).toSelf();

export { container };
