import { staffURL } from '../util/constant';
import broadcast from '../util/broadcast';

export const update = (properties: IUpdate) => {
	
	const { referenceId, data, response } = properties;
	broadcast({
		method: 'PATCH', 
		url: `${staffURL}/${referenceId}`,
		data: data
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
	surname: string;
	otherName: string;
	email: string;
	contact: string;
	gender: string;
}
