import { injectable, inject } from 'inversify';
import UserRepository from '../domain/repository/UserRepository';
import User from '../domain/entity/User';

@injectable()
export default class UserService {

    readonly repository: UserRepository;

    constructor(@inject('UserRepository') repository: UserRepository) {
        this.repository = repository;
    }

    async create() {
        return this.repository.save(new User());
    }
}
