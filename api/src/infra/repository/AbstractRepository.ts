import { injectable, inject } from 'inversify';
import Connection from '../database/Connection';

@injectable()
export default abstract class AbstractRepository {

	protected db: Connection;

	constructor(@inject('Connection') db: Connection) {
		this.db = db;
	}
}
