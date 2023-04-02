import Http from "../http/Http";
import AbstractController from "./AbstractController";

export default class UserController extends AbstractController {

	constructor(http: Http) {
		super(http);
        this.routes();
	}

    async routes() {
		this.http.route("post", "/create", async function (params: any, body: any) {
			return {
				access_token: "123456"
			};
		});
    }
}
