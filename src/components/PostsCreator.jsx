import React from 'react';
import PostItem from './PostItem';
import './css/PostsCreator.css'

const PostsCreator = () => {
    return (
        <div className='content__post-creator'>
            <div className='content__post-creator-header'>My posts</div>
            <div className='content__post-creator-input-block'>
                <input className='content__post-creator-input' type="text" />
                <button className='content__post-creator-btn-add'>Add post</button>
                <button className='content__post-creator-btn-remove'>Remove</button>
            </div>
            <div className='content__post-creator-posts'>
            <PostItem />
            <PostItem />
            <PostItem />    
            </div>
        </div>
    );
};

export default PostsCreator;