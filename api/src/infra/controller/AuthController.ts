import Http from "../http/Http";
import AbstractController from "./AbstractController";

export default class AuthController extends AbstractController {

	constructor(http: Http) {
		super(http);
		this.http.route("post", "/login", async function (params: any, body: any) {
			return {
				access_token: "123456"
			};
		});
		this.http.listen(3000);
	}
}
