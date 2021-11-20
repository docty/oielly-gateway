import oielly from '../src/app';
import broadcast from '../src/util/broadcast';
jest.mock('../src/util/broadcast');
const mockBroadcast = broadcast as jest.MockedFunction<typeof broadcast>;
describe('Staff', () => {

    it('List ', () => {
        const answer = [
            {
                id: 1,
                referenceId: '2036e03672417325b60629115dd326ce39a748f9',
                clientId: '56BAC7',
                surname: 'Aikins',
                otherName: 'Elsie',
                email: 'elsie@gmail.com',
                contact: '0207654321',
                gender: 'female'
            }
        ];
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        mockBroadcast.mockImplementationOnce((_pdata) =>
            Promise.resolve(answer)
        );
        oielly.staff.list({
            response: (success, error) => {
                if (error) { console.log(error); return; }
                expect(success).toStrictEqual(answer);
            }
        });
        
    });
});