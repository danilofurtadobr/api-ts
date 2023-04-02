import PgPromiseConnection from "./infra/database/PgPromiseConnection";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import dotenv from 'dotenv';
import AuthController from "./infra/controller/AuthController";

dotenv.config();

const connection = new PgPromiseConnection();

const http = new ExpressAdapter();
new AuthController(http);

http.listen(3000);
