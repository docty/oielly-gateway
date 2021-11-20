import axios, { AxiosRequestConfig } from 'axios';

const broadcast = async (config: IBroadcast, _callback?: any):Promise<any> => {
	const token  = 'token';
    
	const axiosConfig: AxiosRequestConfig = {
		url: config.url,
		headers: {
			Authorization: `Basic ${token}`,
		},
		method: config.method,
		data: config.data
	};
	return await axios(axiosConfig);

};

interface IBroadcast {
    method: AxiosRequestConfig['method'];
    url: string;
    data?: any;
}
 

export default broadcast;
