import React from 'react';
import './css/PostItem.css'

const PostItem = () => {
    return (
        <div className='content__posts-item'>
            <img className='content__posts-item-img' src="https://i.pinimg.com/originals/01/c7/b1/01c7b181419e15cc614b2297a0e0b959.jpg" alt="" />
            <div className="content__posts-item-description">Post</div>
            <button className='content__posts-item-like'>♡</button>
        </div>
    );
};

export default PostItem;