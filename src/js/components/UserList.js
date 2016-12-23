import React, {Component} from 'react';

//用户列表：展示组件
export default class UserList extends Component {

	createListeItems() {
		return this.props.users.map((user) => {
			return (
				<tr key={user.id}>	
					<td>{user.id}</td>
					<td>{user.name}</td>
					<td><button onClick={() => this.props.fetchUserInfo(user.id)}>查看</button></td>
				</tr>
			);
		});
	}

	render() {
		return (
			<div className="list-container">
				<table className="list-table">
					<thead>
						<tr>
							<th>编号</th>
							<th>名称</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
						{this.createListeItems()}
					</tbody>
				</table>
			</div>
		);
	}
}