import React, { useState } from 'react';
import PostItem from './PostItem';
import './css/PostsCreator.css'

const PostsCreator = () => {
    // const [message,setMessage] = useState('')
    const [inputValue , setInputValue] = useState('')
    const [posts, setPosts] = useState([])

    function addPost() {
        // setMessage(inputValue)

        let newPost = {
            message: inputValue,
            img: 'https://avatars.mds.yandex.net/i?id=5ccd4245265bff420a240099860ce351f20ad5d1-8991021-images-thumbs&n=13',
        }
        setPosts([...posts,newPost])
        setInputValue('')
    }



    return (
        <div className='content__post-creator'>
            <div className='content__post-creator-header'>My posts</div>
            <div className='content__post-creator-input-block'>
                <input className='content__post-creator-input' value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" />
                <button className='content__post-creator-btn-add' onClick={() => addPost()}>Add post</button>
                <button className='content__post-creator-btn-remove'>Remove</button>
            </div>
            <div className='content__post-creator-posts'>
                {posts.map((post) => {
                    return <PostItem img={post.img}  message={post.message} />
                })}
            </div>
        </div>
    );
};

export default PostsCreator;