export const baseURL = process.env.NODE_ENV === 'production' 
	? 'https://oielly-lockup.herokuapp.com' : 'http://192.168.43.147:1337';
export const staffURL = `${baseURL}/api/entries/staff`;
export const clientURL = `${baseURL}/api/entries/client`;
export const guestURL = `${baseURL}/api/entries/guest`;
export const orderURL = `${baseURL}/api/order`;
export const marketURL = `${baseURL}/api/market/material`;
export const productURL = `${baseURL}/api/product/material`;
export const subscribeUrl = `${baseURL}/api/subscribe`;
export const reviewURL = `${baseURL}/api/review`;
export const contactURL = `${baseURL}/api/contact`;
export const selectionUrl = `${baseURL}/api/selection`;
export const blogURL = `${baseURL}/api/blog/post`;
export const transactionURL = `${baseURL}/api/wallet/transaction`;
export const staffLoginUrl = `${baseURL}/api/entries/staff-authenticate`;
export const clientLoginUrl = `${baseURL}/api/entries/client-authenticate`;
export const guestLoginUrl = `${baseURL}/api/entries/guest-authenticate`;
// Query

export const clientQueryURL = `${baseURL}/api/entries/client/query/id`; 
export const productQueryURL = `${baseURL}/api/product/material/query/id`; 
export const marketQueryURL = `${baseURL}/api/market/material/query/id`; 
