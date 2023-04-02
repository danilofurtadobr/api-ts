import { injectable } from 'inversify';

@injectable()
export default class UserService {
    async create() {
        return {
            user: "não existo ainda!"
        }
    }
}
