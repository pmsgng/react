import React from 'react';
import './css/PostItem.css'

const PostItem = ({message,img}) => {

    return (
        <div className='content__posts-item'>
            <img className='content__posts-item-img' src={img} alt="" />
            <div className="content__posts-item-description">{message}</div>
            <div className="content__posts-item-like-count">{0}</div>
            <button className='content__posts-item-like'>♡</button>
        </div>
    );
};

export default PostItem;