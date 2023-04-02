import PgPromiseConnection from "./infra/database/PgPromiseConnection";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import dotenv from 'dotenv';

dotenv.config();

const connection = new PgPromiseConnection();

const http = new ExpressAdapter();

http.route("post", "/login", async function (params: any, body: any) {
  return {
    access_token: "123456"
  };
});

http.route("get", "/", async function (params: any, body: any) {
  return {
    message: "Vou almoçar!"
  };
});

http.listen(3000);
