import axios from 'axios';
import term from '../src/term';
const mockAxios = axios as jest.Mocked<typeof axios>;
jest.mock('axios');
it('fetches data from unsplash', async () => {
	// setup
	mockAxios.get.mockImplementationOnce(() =>
		Promise.resolve({
			data: { results: ['cat.jpg'] }
		})
	);
	const callback = jest.fn((r) => r);
	// work
	await term('cats', callback);

	// expect
	expect(callback).toHaveBeenCalled();
	expect(callback.mock.results[0]['value']).toEqual(['cat.jpg']);
	expect(mockAxios.get).toHaveBeenCalledTimes(1);
	expect(mockAxios.get).toHaveBeenCalledWith(
		'https://api.unsplash.com/search/photos',
		{
			params: {
				client_id: process.env.REACT_APP_UNSPLASH_TOKEN,
				query: 'cats'
			}
		}
	);
});