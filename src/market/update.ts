import { marketURL } from '../util/constant';
import broadcast from '../util/broadcast';

export const update:any = (properties: IUpdate) => {
	
	broadcast({
		method: 'PATCH', 
		url: `${marketURL}/${properties.referenceId}`,
		data: properties.data
	})
	.then((success) =>  properties.response(success.data, null))
	.catch((error) =>  properties.response(null, error)); 
	
};

export interface IUpdate {
	referenceId: string;
	data: IData;
	response: (success: unknown, error: unknown) => void;
}

interface IData {
	marketName: string;
	location: string;
	clientId: string;
	numberOfEmployees: string;
}
