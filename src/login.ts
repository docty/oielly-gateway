import axios from 'axios';
import { loginURL } from './util/constant';

export const login = async (properties: IView): Promise<IData> => {
	const { data } = properties;

	await axios
		.post(loginURL, data)
		.then((res) => {
			properties.response(res, null);
		})
		.catch((err) => {
			properties.response(null, err);
		});
	return properties.data;
};

interface IView {
  data: IData;
  response: (success: unknown, error: unknown) => void;
}

interface IData {
  email: string;
  password: string;
}
