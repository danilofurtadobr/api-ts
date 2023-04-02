import { injectable, inject } from 'inversify';
import Http from "../http/Http";

@injectable()
export default class AuthController {

	constructor (@inject('Http') http: Http) {
		http.route("post", "/login", async function (params: any, body: any) {
			return {
				access_token: "123456"
			};
		});
	}
}
