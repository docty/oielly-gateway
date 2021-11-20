import broadcast from '../util/broadcast';
import { clientURL } from '../util/constant';

export const remove:any =  (properties: IRemove) => {
	
	broadcast({
		method: 'DELETE', 
		url: `${clientURL}/${properties.referenceId}`
	})
	.then((success) =>  properties.response(success.data, null))
	.catch((error) =>  properties.response(null, error)); 
	
};

export interface IRemove {
	referenceId: string;
    response: (success: unknown, error: unknown) => void;
}
 
