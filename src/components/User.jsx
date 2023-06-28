import React from 'react';
import './css/User.css'

const User = () => {
    return (
        <div className='content__user'>
            <img className='content__user-avatar' src="https://cdn.dribbble.com/users/2495677/screenshots/5039870/js-ninja-01.png" alt="" />
            <div className="content__user-description">
                <div className="content__description-user-name">Kate Larson</div>
                <div className="content__description-user-birthday">Date of Birth: 3 April</div>
                <div className="content__description-user-adress">City: Moscow</div>
                <div className="content__description-user-education">Education: MSU</div>
                <div className="content__description-user-website">Web Site: //link</div>
            </div>
        </div>
    );
};

export default User;