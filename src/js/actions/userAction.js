//返回用户详情
export function selectUser (user) {
  return {
    type: 'SELECT_USER',
    user,
  };
}

//正在获取
export function fetchingUser (isFetching) {
  return {
    type: 'FETCHING_USER',
    isFetching,
  };
}

//获取用户详情
export function fetchUserInfo(userId) {
  return function (dispatch) {

    //正在获取
    dispatch(fetchingUser(true));

    //以下模拟异步操作
    setTimeout(function(){
    	dispatch(fetchingUser(false));

    	var users = [{
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
	        }]

	       var selectedUser = users.filter(function(user){ return user.id==userId})[0];
	       dispatch(selectUser(selectedUser));

    }, 2000);
    // return $.ajax({
    // 	url: 'http:www.getuser.com',
    // 	type: 'get'
    //	.....
    // })
    // .then(response => {
    //   dispatch(receiveUserData(response.json()))
    // })
    // .then(() => dispatch(fetchingData(false)))
    // .fail()
  }
 };