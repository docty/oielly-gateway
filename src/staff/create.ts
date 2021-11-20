import broadcast from '../util/broadcast';
import { staffURL } from '../util/constant';

export const create = (properties: ICreate) => {
	
	broadcast({
		method: 'POST', 
		url: staffURL,
		data: properties.data
	})
	.then((success) =>  properties.response(success.data, null))
	.catch((error) =>  properties.response(null, error));
};

export interface ICreate {
  data: IData;
  response: (success: unknown, error: unknown) => void;
}

interface IData {
	surname: string;
	otherName: string;
	email: string;
	contact: string;
	gender: string;
}
