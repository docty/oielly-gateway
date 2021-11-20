import { guestURL } from '../util/constant';
import broadcast from '../util/broadcast';
/**
 * A View displays all available user or individual user.
 *
 * @method view
 * @param {Object} properties - The message.
 * @param {String} properties.userId - This sets the Id of the user
 * @param {Function} properties.response - Callback to get the error or success message
 */

export const login = (properties: ILogin) => {
	
	broadcast({
		method: 'POST', 
		url: guestURL+'/login',
		data: properties.data
	})
	.then((success) =>  properties.response(success.data, null))
	.catch((error) =>  properties.response(null, error)); 

};

export interface ILogin {
  response: (success: any, error: any) => any;
  data: IData;
}

interface IData {
	email: string;
	password: string;
}

