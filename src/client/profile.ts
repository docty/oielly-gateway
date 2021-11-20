import { clientURL } from '../util/constant';
import broadcast from '../util/broadcast';
/**
 * A View displays all available user or individual user.
 *
 * @method view
 * @param {Object} properties - The message.
 * @param {String} properties.userId - This sets the Id of the user
 * @param {Function} properties.response - Callback to get the error or success message
 */

export const profile:any = (properties: IProfile) => {
	
	broadcast({
		method: 'GET', 
		url: clientURL+'/'+properties.referenceId
	})
	.then((success) =>  properties.response(success.data, null))
	.catch((error) =>  properties.response(null, error)); 
};

export interface IProfile {
  response: (success: any, error: any) => any;
  referenceId: string;
}

