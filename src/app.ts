import { list as staffList }    from './staff/list';
import { profile as staffProfile } from './staff/profile';
import { create as staffCreate }  from './staff/create';
import { update as staffUpdate }  from './staff/update';
import { remove as staffRemove }  from './staff/remove';
import { login as staffLogin } from './staff/login';

import { list as clientList}    from './client/list';
import { profile as clientProfile } from './client/profile';
import { query as clientQuery } from './client/query';
import { create as clientCreate}  from './client/create';
import { update as clientUpdate}  from './client/update';
import { remove as clientRemove}  from './client/remove';
import { login as clientLogin } from './client/login';

import { list as guestList}    from './guest/list';
import { profile as guestProfile } from './guest/profile';
import { login as guestLogin } from './guest/login';
import { create as guestCreate}  from './guest/create';
import { update as guestUpdate}  from './guest/update';
import { remove as guestRemove}  from './guest/remove';

import { list as marketList}    from './market/list';
import { profile as marketProfile } from './market/profile';
import { query as marketQuery } from './market/query';
import { create as marketCreate}  from './market/create';
import { update as marketUpdate}  from './market/update';
import { remove as marketRemove}  from './market/remove';

import { list as productList}    from './product/list';
import { profile as productProfile } from './product/profile';
import { profile as productQuery } from './product/query';
import { create as productCreate}  from './product/create';
import { update as productUpdate}  from './product/update';
import { remove as productRemove}  from './product/remove';

import { list as orderList}    from './order/list';
import { profile as orderProfile } from './order/profile';
import { create as orderCreate}  from './order/create';
import { update as orderUpdate}  from './order/update';
import { update as orderUpdateStatus }  from './order/updateStatus';
import { remove as orderRemove}  from './order/remove';

import { list as subscribeList } from './subscribe/list';
import { create as subscribeCreate } from './subscribe/create';

import { list as reviewList } from './review/list';
import { create as reviewCreate } from './review/create';

import { list as contactList } from './contact/list';
import { create as contactCreate } from './contact/create';

import { list as selectionList } from './selection/list';
import { create as selectionCreate } from './selection/create';

import { list as blogList } from './blog/list';
import { profile as blogProfile } from './blog/profile';

import { create as walletCreate } from './wallet/create';
import { verify as walletVerify } from './wallet/verify';

import { config } from './config';

const oielly = {
	config: config,
	
	staff : {
		login: staffLogin,
		list: staffList,
		profile: staffProfile,
		create: staffCreate,
		update: staffUpdate,
		remove: staffRemove
	},
	client : {
		login: clientLogin,
		list: clientList,
		profile: clientProfile,
		query: clientQuery,
		create: clientCreate,
		update: clientUpdate,
		remove: clientRemove
	},
	guest: {
		list: guestList,
		profile: guestProfile,
		create: guestCreate,
		update: guestUpdate,
		remove: guestRemove,
		login: guestLogin
	},
	market: {
		list: marketList,
		profile: marketProfile,
		query: marketQuery,
		create: marketCreate,
		update: marketUpdate,
		remove: marketRemove
	},
	product: {
		list: productList,
		profile: productProfile,
		query: productQuery,
		create: productCreate,
		update: productUpdate,
		remove: productRemove
	},
	order: {
		list: orderList,
		profile: orderProfile,
		create: orderCreate,
		update: orderUpdate,
		updateStatus: orderUpdateStatus,
		remove: orderRemove
	},
	subscribe: {
		list: subscribeList,
		create: subscribeCreate,
	},
	review: {
		list: reviewList,
		create: reviewCreate,
	},
	selection: {
		list: selectionList,
		create: selectionCreate,
	},
	contact: {
		list: contactList,
		create: contactCreate,
	},
	blog: {
		list: blogList,
		profile: blogProfile
	},
	wallet: {
		create: walletCreate,
		verify: walletVerify
	}
	
};

// if(window){
// 	window['oielly'] = oielly;
// }

export default oielly;