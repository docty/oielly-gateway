import broadcast from '../util/broadcast';
import { marketURL } from '../util/constant';

export const remove:any =  (properties: IRemove) => {

	broadcast({
		method: 'DELETE', 
		url: `${marketURL}/${properties.referenceId}`
	})
	.then((success) =>  properties.response(success.data, null))
	.catch((error) =>  properties.response(null, error)); 
	
};

export interface IRemove {
	referenceId: string;
    response: (success: unknown, error: unknown) => void;
}
 
