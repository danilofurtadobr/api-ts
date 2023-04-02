import { injectable, inject } from 'inversify';
import Http from "../http/Http";

@injectable()
export default abstract class AbstractController {

	protected http: Http;

	constructor(@inject('Http') http: Http) {
		this.http = http;
	}

    abstract routes(): Promise<any>;
}
