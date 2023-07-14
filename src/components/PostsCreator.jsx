import React, { useState } from 'react';
import PostItem from './PostItem';
import './css/PostsCreator.css'

const PostsCreator = () => {
    const [inputValue , setInputValue] = useState('')
    const [posts, setPosts] = useState([])


    function addPost(e) {
        let newPost = {
            message: inputValue,
            img: 'https://avatars.mds.yandex.net/i?id=5ccd4245265bff420a240099860ce351f20ad5d1-8991021-images-thumbs&n=13',
        }
        if(newPost.message && newPost.message !== ' ') {
            setPosts([...posts,newPost])
        } else {
            return null;
        }
        
        setInputValue('')
    }

    function deletePost(id) {
        setPosts(prev => [...prev.filter((post,index) => index !== id)] )
    }

    return (
        <div className='content__post-creator'>
            <div className='content__post-creator-header-text'>My posts:</div>
            <div className='content__post-creator-input-wrap'>
                <input className='content__post-creator-input' placeholder='Write a text...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" />
                <button className='content__post-creator-btn content__post-creator-btn-add' onClick={() => addPost()}>✚</button>
            </div>
            <div className='content__post-creator-posts'>
                {posts.map( (post, index) => {
                    return <PostItem id={index} posts={posts} key={Math.random() + index} deletePost={deletePost}  img={post.img}  message={post.message} />
                })}
            </div>
        </div>
    );
};

export default PostsCreator;