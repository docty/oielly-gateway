import broadcast from '../util/broadcast';
import { orderURL } from '../util/constant';

export const create = (properties: ICreate) => {
	
	broadcast({
		method: 'POST', 
		url: orderURL,
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
	quantity: string;
	price: string;
	guestId: string;
	message: string;
	transactionId: string;
}
