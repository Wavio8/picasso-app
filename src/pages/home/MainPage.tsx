import React, {useEffect, useState} from 'react';
import PostList from "../../widgets/postList/PostList";
import {useGetPostsQuery} from "../../features/gettingPosts/api/apiPosts";
import ResultLoading from "../../widgets/loading/ResultLoading";
import SpinLoading from "../../widgets/loading/SpinLoading";
import StartLoading from "../../widgets/loading/StartLoading";
import Welcome from "../../widgets/welcome/Welcome";


function MainPage() {
    const { data: posts, isLoading, isError } = useGetPostsQuery("");

    if (isLoading) {
        return <StartLoading></StartLoading>;
    }

    if (isError) {
        return <ResultLoading></ResultLoading>;
    }

    return (
        <div>
            <Welcome></Welcome>
            <h1 style={{ color: '#ff69b4', textShadow: '2px 2px 0px white', marginLeft:"5%"}}>Posts</h1>
            <PostList posts={posts} />
        </div>
    );
}

export default MainPage;