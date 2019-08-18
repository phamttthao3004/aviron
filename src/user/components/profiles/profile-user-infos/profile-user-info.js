import React, { useState } from 'react';
import ProfileUserInfoUI from './profile-user-info.ui';

const ProfileUserInfo = () => {
    const [openDialog, setOpenDialog] = useState(false);
    return <ProfileUserInfoUI openDialog={openDialog} setOpenDialog={() => setOpenDialog(!openDialog)} />;
};

export default ProfileUserInfo;
