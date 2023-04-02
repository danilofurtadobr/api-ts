import 'reflect-metadata';
import { container } from './infra/config/provider';
import PgPromiseConnection from "./infra/database/PgPromiseConnection";
import dotenv from 'dotenv';
import AuthController from "./infra/controller/AuthController";
import './infra/config/provider';

dotenv.config();

const connection = new PgPromiseConnection();

container.get<AuthController>(AuthController);
