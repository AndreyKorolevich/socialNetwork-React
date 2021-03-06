import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {
    return (
        <div>
            <ProfileInfo saveProfile={saveProfile} savePhoto={savePhoto} isOwner={isOwner} profile={profile} status={status} updateUserStatus={updateUserStatus}/>
        </div>
    )
}

export default Profile;