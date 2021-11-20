import { staffURL } from '../util/constant';
import broadcast from '../util/broadcast';
/**
 * A View displays all available user or individual user.
 *
 * @method view
 * @param {Object} properties - The message.
 * @param {String} properties.userId - This sets the Id of the staff
 * @param {Function} properties.response - Callback to get the error or success message
 */
 
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const list = (properties: IList) => {
	
	broadcast({
		method: 'GET', 
		url: staffURL
	})
	.then((success) =>  properties.response(success.data, null))
	.catch((error) =>  properties.response(null, error));
	
};

export interface IList {
  response: (success: ISuccess|null, error: any) => any;
}

export type ISuccess = {
	id: number,
    referenceId: string,
    staffId: string,
    surname: string,
    otherName: string,
    email: string,
    contact: string,
    gender: string,
    role: string,
    bankName: string,
    bankBranch: string,
    accountNumber: string
}