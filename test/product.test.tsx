import oielly from '../src/app';
import broadcast from '../src/util/broadcast';
jest.mock('../src/util/broadcast');
const mockBroadcast = broadcast as jest.MockedFunction<typeof broadcast>;
describe('Product', () => {
    
    beforeEach(() => {
        mockBroadcast.mockClear();
    });
   
    it('List ', () => {
        const answer = [
            {
                id: 1,
                referenceId: '485b89536fa1454f7f1e23a37b3719d7ba91d8a2',
                productId:  'A75598',
                materialName:   'Tikop',
                price: 140,
                clientId:   '56BAC7',
                marketId:   'EBDE78',
                clientName: 'Aikins Elsie'
            }
        ];
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        mockBroadcast.mockImplementationOnce((_pdata) =>
            Promise.resolve(answer)
        );
        oielly.product.list({
            category: 'gtp',
            response: (success, error) => {
                if (error) { console.log(error); return; }
                expect(success).toStrictEqual(answer);
            }
        });
        
    });

    it('Profile ', () => {
        const item = 
            {
                id: 1,
                referenceId: '485b89536fa1454f7f1e23a37b3719d7ba91d8a2',
                productId:  'A75598',
                materialName:   'Tikop',
                price: 140,
                clientId:   '56BAC7',
                marketId:   'EBDE78',
                clientName: 'Aikins Elsie'
            };
        
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        mockBroadcast.mockImplementationOnce((_pdata) =>
            Promise.resolve(item)
        );
        oielly.product.profile({
            referenceId: '485b89536fa1454f7f1e23a37b3719d7ba91d8a2',
            response: (success, error) => {
                if (error) { console.log(error); return; }
                console.log(success);
                expect(true).toBeTruthy();
            }
        });
        
    }); 
});