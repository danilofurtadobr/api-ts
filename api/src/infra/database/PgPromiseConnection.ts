import { injectable } from 'inversify';
import Connection from "./Connection";
import pgp from "pg-promise";

@injectable()
export default class PgPromiseConnection implements Connection {
	connection: any;
	constructor () {
        const cn = {
            host: process.env.PGHOST,
            port: parseInt(process.env.PGPORT || '5432'),
            database: process.env.PGDATABASE,
            user: process.env.PGUSER,
            password: process.env.PGPASSWORD
        };
		this.connection = pgp()("postgres://" + cn.user + ":" + cn.password + "@" + cn.host + ":" + cn.port + "/" + cn.database);
	}

	query(statement: string, params: any): Promise<any> {
		return this.connection.query(statement, params);
	}

	close(): Promise<void> {
		return this.connection.$pool.end();
	}
}
