import React from 'react';
import PropTypes from 'prop-types';
import CmsDialog from '../../../custom-elements/cms-dialogs/cms-dialog';

const ProfileUserInfoUI = ({ openDialog, setOpenDialog }) => {
    return (
        <div className="profile-info">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-md-offset-1 text-left">
                        <div className="avatar-box">
                            <div className="img">
                                <img src="/images/user/no-avatar.png" alt="" />
                            </div>
                            {/* <button type="button" className="btn btn-primary btn-cirlce">
                                <i className="icon-pencil-1" />
                            </button> */}
                        </div>
                    </div>
                    <div className="col-md-9 text-left">
                        <div className="user-info-box">
                            <p>Larry Garza Aviron</p>
                            <p>Gabriel Salazar Tomy</p>
                            <ul>
                                <li>
                                    <img src="/images/user/achievement.png" alt="" />
                                    <p>Professional</p>
                                </li>
                                <li role="presentation" className="pointer" onClick={setOpenDialog}>
                                    <p>
                                        <i className="icon-users-mm" />
                                        <span>12 friends</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <CmsDialog open={openDialog}>
                        <div id="dialog-friend-list">
                            <div className="friend-list-header">
                                <span>Friend (12)</span>
                                <i role="presentation" className="icon-close" onClick={setOpenDialog} />
                            </div>
                            <div className="friend-list-content">
                                <div className="friend-item">
                                    <div className="img">
                                        <img src="/images/user/no-avatar.png" alt="" />
                                    </div>
                                    <p className="name">Gabriel Aviron</p>
                                    <p>Gabriel Salazar</p>
                                </div>
                                <div className="friend-item">
                                    <div className="img">
                                        <img src="/images/user/no-avatar.png" alt="" />
                                    </div>
                                    <p className="name">Jack Aviron</p>
                                    <p>Jack Potter</p>
                                </div>
                                <div className="friend-item">
                                    <div className="img">
                                        <img src="/images/user/no-avatar.png" alt="" />
                                    </div>
                                    <p className="name">Sue Aviron</p>
                                    <p>Sue Hughes</p>
                                </div>
                                <div className="friend-item">
                                    <div className="img">
                                        <img src="/images/user/no-avatar.png" alt="" />
                                    </div>
                                    <p className="name">Gertrude Aviron</p>
                                    <p>Gertrude Bowers</p>
                                </div>
                                <div className="friend-item">
                                    <div className="img">
                                        <img src="/images/user/no-avatar.png" alt="" />
                                    </div>
                                    <p className="name">Victor Aviron</p>
                                    <p>Victor Evans</p>
                                </div>
                                <div className="friend-item">
                                    <div className="img">
                                        <img src="/images/user/no-avatar.png" alt="" />
                                    </div>
                                    <p className="name">Sue Aviron</p>
                                    <p>Sue Hughes</p>
                                </div>
                            </div>
                        </div>
                    </CmsDialog>
                </div>
            </div>
        </div>
    );
};
ProfileUserInfoUI.propTypes = {
    openDialog: PropTypes.bool,
    setOpenDialog: PropTypes.func
};

ProfileUserInfoUI.defaultProps = {
    openDialog: false,
    setOpenDialog: () => {}
};
export default ProfileUserInfoUI;
