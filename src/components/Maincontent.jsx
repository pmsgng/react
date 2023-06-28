import React from 'react';
import './css/MainContent.css'
import PostsCreator from './PostsCreator';
import User from './User';


const MainContent = () => {
    return (
        <div className='content'>
            <div className='content__background'>
                <img className='content__background-img' src="https://phonoteka.org/uploads/posts/2021-04/1619059091_9-phonoteka_org-p-razmitii-fon-nochnogo-goroda-10.jpg" alt="" />
            </div>
            <User />
            <PostsCreator />
        </div>
    );
};

export default MainContent;