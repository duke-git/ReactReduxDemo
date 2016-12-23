import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import UserList from '../components/UserList';
import UserDetails from '../components/UserDetails';
import { fetchUserInfo } from '../actions/userAction.js';

require('../../scss/style.scss');

//容器组件
class App extends Component {

	render() {
	    const { users, fetchUserInfo, isFetching, selectUser} = this.props;
	    console.log('App props: ', this.props);
	    return (
	      	<div>
			<h2>列表:</h2>
			<UserList  users={users} fetchUserInfo={fetchUserInfo}/>
			<hr/>
			<h2>详情:</h2>
			<UserDetails user={selectUser} isFetching={isFetching} />
		</div>
	    );
	}
}

//将reducer返回的state映射成container的props

function mapStateToProps(state) {
  	return {
	    	users: state.users,
	    	selectUser: state.selectUser,
	    	isFetching: state.isFetching,
  	};
}

function mapDispatchToProps(dispatch) {
	return {
	    	fetchUserInfo: (userId) => dispatch(fetchUserInfo(userId))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
