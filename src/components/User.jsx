import React from 'react';
import './css/User.css'

const User = ({user}) => {
    return (
        <div className='content__user'>
            <img className='content__user-avatar' src="https://avatars.mds.yandex.net/i?id=5ccd4245265bff420a240099860ce351f20ad5d1-8991021-images-thumbs&n=13" alt="" />
            <div className="content__user-description">
                <div className="content__description-user-name">{user.name}</div>
                <div className="content__description-user-birthday">{user.birthday}</div>
                <div className="content__description-user-adress">{user.address}</div>
                <div className="content__description-user-education">{user.education}</div>
                <div className="content__description-user-website">WEB: <a href={user.web}>My link</a></div>
            </div>
        </div>
    );
};

export default User;