import React from 'react';
import './styles/UserData.css';
const UserData=({userData})=>{

    const {data}=userData;
    const {followers,following,created_at,updated_at,avatar_url,login,html_url}=data;
    return (
        <div className="user-data">
            <div className="user-header">
                <div className="user-img">
                    <img src={avatar_url} alt={login} />
                </div>
                <div className="user-name"><h1>/{login}</h1>
                <p className="user-create-date">Created on: {created_at.split("T")[0]}</p></div>
            </div>
            <div className="user-body">
                <div className="followers">
                    <div className="followers-title">Followers</div>
                    <div className="followers-count">{followers}</div> 
                </div>
                <div className="following">
                    <div className="following-title">Following</div>
                    <div className="following-count">{following}</div> 
                </div>
            </div>
            <div className="user-foot">
                <div className="user-url">GitHub URL: <a href={html_url}>/{login}</a></div>
                <div className="user-update-date">Updated on :{updated_at.split("T")[0]}</div>
            </div>
        </div>
    );
}
export default UserData;