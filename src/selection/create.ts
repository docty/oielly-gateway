import broadcast from '../util/broadcast';
import { selectionUrl } from '../util/constant';

export const create = (properties: ICreate) => {
	
	broadcast({
		method: 'POST', 
		url: selectionUrl,
		data: properties.data
	})
	.then((success) =>  properties.response(success.data, null))
	.catch((error) =>  properties.response(null, error)); 
};

export interface ICreate {
  data: IData;
  response: (success: unknown, error: unknown) => void;
}

export interface IData {
	productId: string;
	status: string; 
}
