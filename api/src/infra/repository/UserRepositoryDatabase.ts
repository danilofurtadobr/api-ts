import User from '../../domain/entity/User';
import UserRepository from '../../domain/repository/UserRepository';
import Connection from '../database/Connection';
import AbstractRepository from './AbstractRepository';

export default class UserRepositoryDatabase extends AbstractRepository implements UserRepository {
    constructor(readonly db: Connection) {
		super(db);
	}

    async save(user: User): Promise<number> {
		const [userData] = await this.db.query("insert into tcc_db.users (name) values ($1) returning *", [user]);
		return userData.id_user;
	}
}
