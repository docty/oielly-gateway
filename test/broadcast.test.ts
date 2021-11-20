import broadcast from '../src/util/broadcast';
 
const answer =  [
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

it('Broadcast Text', (done) => {
	
	broadcast({
		method: 'GET', 
		url: 'http://127.0.0.1:1337/api/entries/client'
	})
	.then(success => { 
		expect(success.data).toStrictEqual(answer);
		done();
	}).catch(error => {
		console.log(error);
		done.fail(error);
	});
	
});