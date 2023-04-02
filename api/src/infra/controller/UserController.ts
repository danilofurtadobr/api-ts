import { injectable, inject } from 'inversify';
import UserService from "../../service/UserService";
import Http from "../http/Http";
import AbstractController from "./AbstractController";

@injectable()
export default class UserController extends AbstractController {

	constructor(
		@inject('Http') http: Http,
		@inject('UserService') userService: UserService,
	) {
		super(http);
		this.http.route("post", "/user", async function (params: any, body: any) {
			return userService.create();
		});
	}
}
