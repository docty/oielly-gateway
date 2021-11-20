import broadcast from '../util/broadcast';
import { marketURL } from '../util/constant';

export const create = (properties: ICreate) => {
	
	broadcast({
		method: 'POST', 
		url: marketURL,
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
	marketName: string;
	location: string;
	clientId: string;
	numberOfEmployees: string;
}
