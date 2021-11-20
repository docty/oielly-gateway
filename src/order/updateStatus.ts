import { orderURL } from '../util/constant';
import broadcast from '../util/broadcast';

export const update:any = (properties: IUpdate) => {
	
	broadcast({
		method: 'PATCH', 
		url: `${orderURL}/status/${properties.referenceId}`,
		data: properties.status
	})
	.then((success) =>  properties.response(success.data, null))
	.catch((error) =>  properties.response(null, error)); 
	
};

export interface IUpdate {
	referenceId: string;
	status: string;
	response: (success: unknown, error: unknown) => void;
}

