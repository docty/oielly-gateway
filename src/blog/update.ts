import { staffURL } from '../util/constant';
import broadcast from '../util/broadcast';

export const update:any = (properties: IUpdate) => {
	
	const { referenceId, data, response } = properties;
	broadcast({
		method: 'PATCH', 
		url: `${staffURL}/${referenceId}`,
		data: data
	}, (result, err) => {
		return response(result.data, err);
	});
	
};

interface IUpdate {
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
