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
            <PostItem likeCount={3} img={'https://i.pinimg.com/originals/01/c7/b1/01c7b181419e15cc614b2297a0e0b959.jpg'} message={'Hi! How are u?'}/>
            <PostItem likeCount={2} img={'https://avatars.mds.yandex.net/i?id=5ccd4245265bff420a240099860ce351f20ad5d1-8991021-images-thumbs&n=13'} message={"It's my first post"}/>
            <PostItem likeCount={12} img={'https://avatars.mds.yandex.net/i?id=9682272ee70ee163f608d79e79db98e9260562a0-9224110-images-thumbs&n=13'} message={'Do u want to be my friend?'} />    
            </div>
        </div>
    );
};

export default PostsCreator;