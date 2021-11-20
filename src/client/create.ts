import broadcast from '../util/broadcast';
import { clientURL } from '../util/constant';

export const create:any = (properties: ICreate) => {
	
	broadcast({
		method: 'POST', 
		url: clientURL,
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
