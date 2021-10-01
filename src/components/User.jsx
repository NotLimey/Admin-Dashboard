import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const User = ({users}) => {
    const [user, setUser] = useState();
    const [avatarUrl, setAvatarUrl] = useState();
    const queryParams = new URLSearchParams(window.location.search);
    var UserId = queryParams.get('userid');

    useEffect(() => {
        setUser(users.find(u => u.userId === UserId));
    }, [users, UserId])
    

    useEffect(() => {
        if(user === undefined) return;
        setAvatarUrl(user.avatarUrl);
    }, [user])

    if(user === undefined || user === null) {
        return (
            <p>User not found</p>
        )
    }

    // Here you have to 

    return(
        <div>
            <div className="back-arrow">
                <Link to="/Users">
                    <ion-icon name="chevron-back-outline"></ion-icon>
                </Link>
            </div>
            <div className="user-information">
                <div className="user-info-image">
                    <img src={avatarUrl} alt="" />
                </div>
                <form className="edit-user">
                    <div>
                        <label for="firstname">First name</label>
                        <input id="firstname" placeholder="First name" defaultValue={user.firstName} />
                    </div>
                    <div>
                        <label for="lastname">Last name</label>
                        <input id="lastname" placeholder="Last name" defaultValue={user.lastName} />
                    </div>
                    <div>
                        <label for="username">Username</label>
                        <input id="username" placeholder="username" defaultValue={user.Username} />
                    </div>
                    <div className="role__verified">
                        <div className="role-div">
                            <label for="role">Role</label><br />
                            <select defaultValue={user.role}>
                                <option>User</option>
                                <option>admin</option>
                            </select>
                        </div>
                        <div className="user-verified">
                            <label>User is verified</label>
                            <div className="switch">
                                <input defaultChecked={user.verified} type="checkbox" name="switch" id="switch" />
                                <label for="switch"></label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label for="avatar">Avatar url</label>
                        <input id="avatar" placeholder="Username" defaultValue={user.avatarUrl} onChange={e => setAvatarUrl(e.target.value)}/>
                    </div>
                    <div>
                        <label for="userid">User id</label>
                        <input id="userid" className="disabled" disabled placeholder="Username" value={user.userId} />
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default User;