import broadcast from '../util/broadcast';
import { guestLoginUrl } from '../util/constant';

export const login = (properties: ILogin) => {
	
	broadcast({
		method: 'POST', 
		url: guestLoginUrl,
		data: properties.data
	})
	.then((success) =>  properties.response(success.data, null))
	.catch((error) =>  properties.response(null, error)); 
};

export interface ILogin {
  data: IData;
  response: (success: unknown, error: unknown) => void;
}

export interface IData {
	email: string;
	password: string; 
}