import React, { useState } from 'react';
import './css/PostItem.css'

const PostItem = ({ message, img, deletePost, id }) => {
    const [likeCount, setLikeCount] = useState(0)

    return (
        <div className='content__posts-item'>
            <div className='content__posts-item-foto-text-wrap'>
                <img className='content__posts-item-img' src={img} alt="" />
                <div className="content__posts-item-description">{message}</div>
            </div>
            <div className='content__posts-item-like-btns-wrap'>
                <div className="content__posts-item-like-count">{likeCount}</div>
                <button className='content__posts-item-like-btn' onClick={() => setLikeCount(likeCount + 1)}>♡</button>
                <button className='content__posts-item-remove-btn' onClick={() => deletePost(id)}>✖</button>
            </div>
        </div>
    );
};

export default PostItem;