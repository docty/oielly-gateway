import broadcast from '../util/broadcast';
import { staffURL } from '../util/constant';

export const remove =  (properties: IRemove) => {
	const {referenceId, response} = properties;
	broadcast({
		method: 'DELETE', 
		url: `${staffURL}/${referenceId}`
	})
	.then((success) =>  properties.response(success.data, null))
	.catch((error) =>  properties.response(null, error)); 
	
};

export interface IRemove {
	referenceId: string;
    response: (success: unknown, error: unknown) => void;
}
 
