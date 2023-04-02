import { Container } from 'inversify';
import Http from '../http/Http';
import ExpressAdapter from '../http/ExpressAdapter';
import AuthController from '../controller/AuthController';

const container = new Container();

container.bind<Http>('Http').to(ExpressAdapter);
container.bind<AuthController>(AuthController).toSelf();

export { container };
