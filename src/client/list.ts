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

export const list:any = (properties: IList) => {
	const url = `${clientURL}?min=${properties.range.min}&max=${properties.range.max}`;
	broadcast({
		method: 'GET', 
		url: url
	})
	.then((success) =>  properties.response(success.data, null))
	.catch((error) =>  properties.response(null, error)); 
};

export interface IList {
  range: {min: number, max: number};	
  response: (success: any, error: any) => any;
}

