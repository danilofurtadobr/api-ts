import User from "../entity/User";

export default interface UserRepository {
	save (user: User): Promise<number>;
}
