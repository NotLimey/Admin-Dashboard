import '../scss/profile.scss'

const Profile = () => {
    return(
        <div className="profile">
            <div class="profile-header">
                <span class="profile-header-banner"></span>
            </div>
            <div className="profile-content">
                <div className="profile-info">
                    <div className="profile-info-img">
                        <div>
                            <img src="https://avatars.githubusercontent.com/u/70258183?v=4" alt="profile me" />
                        </div>
                    </div>
                    <div className="profile-info-text">
                        <h5 className="profile-info-text-name">Martin K. Myhre</h5>
                        <p className="profile-info-text-jobtitle">Ceo / Founder</p>
                    </div>
                </div>
                <div className="profile-settings">
                    <div className="edit-profile-btn">
                        <button>Edit <ion-icon name="create-outline"></ion-icon></button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Profile;