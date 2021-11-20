import broadcast from '../util/broadcast';
import { productURL } from '../util/constant';

export const create = (properties: ICreate) => {
	const { data } = properties;
	broadcast({
		method: 'POST', 
		url: productURL,
		data
	})
	.then((success) =>  properties.response(success.data, null))
	.catch((error) =>  properties.response(null, error)); 
};

export interface ICreate {
  data: FormData;
  response: (success: unknown, error: unknown) => void;
}

// interface IData {
// 	materialName: string;
// 	price: string;
// 	quantity: string;
// 	category: string;
// 	tag: string;
// 	description: string;
// 	clientId: string;
// 	marketId: string;
// 	name: string;
// 	personal: any;
// }
