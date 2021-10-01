import { Link, useLocation } from 'react-router-dom';
import User from '../components/User';
import PersonImg from '../Img/person.jpg';
import '../scss/users.scss'

var users = [
    {
        firstName: "Name",
        lastName: "Nameson",
        username: "Username",
        role: "user",
        verified: false,
        avatarUrl: PersonImg,
        userId: "88c63b63-199f-42ca-b9f7-3841982928d2"
    },
    {
        firstName: "Admin",
        lastName: "",
        username: "Admin",
        role: "admin",
        verified: true,
        avatarUrl: "https://thispersondoesnotexist.com/image",
        userId: "88c63b63-199f-42ca-b9f7-3841hj2928d2"
    }
]

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const UserTable = () => {
    return(
        <>
            <div className="user-table">
                <div className="user-table-header">
                    <p>Avatar</p>
                    <p>First Name</p>
                    <p>Last Name</p>
                    <p>Username</p>
                    <p>Role</p>
                    <p>Verified</p>
                </div>
                {users.map(u => {
                    return (
                        <Link className="no-td" to={"/Users?userid=" + u.userId}>
                            <div className="user-table-item">
                                <div className="image-cnt">
                                    <img src={u.avatarUrl} alt="" />
                                </div>
                                <p>{u.firstName}</p>
                                <p>{u.lastName}</p>
                                <p>{u.username}</p>
                                <p>{u.role}</p>
                                {u.verified ?
                                <p className="verified-icon"><ion-icon name="checkmark-outline"></ion-icon></p> : <p className="verified-icon"><ion-icon name="close-outline"></ion-icon></p> }
                            </div>
                        </Link>
                    );
                })}
                
            </div>
        </>
    )
}

const Users = () => {
    let query = useQuery();
    var userid = query.get("userid");
    if(userid === undefined || userid === null) {
        return(
            <UserTable />
        )
    }else {
        return(
            <User users={users} />
        )
    }
}

export default Users;