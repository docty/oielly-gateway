import broadcast from '../src/util/broadcast';
//import  {view} from '../src/view';
jest.mock('../src/util/broadcast');
const mockBroadcast = broadcast as jest.MockedFunction<typeof broadcast>;

beforeEach(() => {
	mockBroadcast.mockClear();
});
it('fetches data for success', async () => {
	// setup
	// const value = {
	// 	userId: '4',
	// 	fullName: 'Henry Asiedu',
	// 	email: 'henry@gmail.com'
	// };
	// mockBroadcast.mockImplementationOnce((_pdata, cb) => 
	// 	Promise.resolve(cb({data: value}, null))
	// );
	//const callback = jest.fn((r, e) => [r, e]);
	
	// work
	//view({data: {userId: '3'}, response: callback});
	
	// expect
	//expect(callback).toHaveBeenCalled();
	//expect(callback.mock.results[0]['value']).toEqual([value, null]);
	//expect(mockBroadcast).toHaveBeenCalledTimes(0);
});

it('fetches data for failure', async () => {
	// setup
	// mockBroadcast.mockImplementationOnce((_pdata, cb) => 
	// 	Promise.resolve(cb(null, 'Error'))
	// );
	//const callback = jest.fn((r, e) => [r, e]);
	
	// work
	//view({data: {userId: '3'}, response: callback});
	
	// expect
	//expect(callback).toHaveBeenCalled();
	//expect(callback.mock.results[0]['value']).toEqual([undefined, 'Error']);
	//expect(mockBroadcast).toHaveBeenCalledTimes(1);
});