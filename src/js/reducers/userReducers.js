import {combineReducers} from 'redux';


function listUsers() {
	// body...
	return [
	        {
	            id: 1,
	            name: '唐僧',
	            age: 500,
	            description: "我是唐僧",
	            photo: "/image/tangseng.jpg"
	        },
	        {
	            id: 2,
	            name: '孙悟空',
	            age: 400,
	            description: "我是孙悟空",
	            photo: "/image/sunwukong.jpg"
	        },
	        {
	            id: 3,
	            name: '猪八戒',
	            age: 300,
	            description: "我是猪八戒",
	            photo: "/image/zhubajie.jpg"
	        },
	        {
	            id: 4,
	            name: '沙僧',
	            age: 200,
	            description: "我是沙僧",
	            photo: "/image/shaseng.jpg"
	        }
	]
}

function isFetching (state = false, action) {
	  switch (action.type) {
	    case 'FETCHING_USER':
	      return action.isFetching;
	    default: return state;
	  }
}

function selectUser (state={}, action)  {
	switch (action.type) {
	    case 'SELECT_USER':
	     return Object.assign({}, state, action.user);
	     break;
	    default: return state;
  	}
}

const allReducers = combineReducers({
	users: listUsers,
	selectUser: selectUser,
	isFetching: isFetching
});


export default allReducers;