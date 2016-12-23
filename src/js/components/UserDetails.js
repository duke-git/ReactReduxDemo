import React, {Component} from 'react';

export default class UserDetail extends Component {

    render() {

        let {user, isFetching} = this.props;

        if (!user.name) {
            return (<div className="detail-container">选择一个...</div>);
        }else if(isFetching) {
            return (
                <div className="detail-container">
                    <h1>正在加载中.....................</h1>
                </div>
            );
        }else {
                return (
                        <div className="detail-container">
                            <div className="title-container">
                                <h2>{user.name}</h2>
                                <h3>年龄: {user.age}</h3>
                                <h3>备注: {user.description}</h3>
                            </div>
                            <div className="photo-container">
                                <img src={user.photo} />
                            </div>
                        </div>
                );
        }
    }
    
}