import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {useGetPostByIdQuery} from "../../features/gettingPosts/api/apiPosts";
import {Button} from "antd";
import Collapses from "../../widgets/postAbout/Collapse";


function PostAbout() {
    const { postId } = useParams();
    const { data: post, isLoading, isError } = useGetPostByIdQuery(postId);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading post</div>;
    }

    return (
        <div>
            <Collapses id={post.id} title={post.title} body={post.body} userId={post.userId} ></Collapses>
            <Link to="/">
                <Button type="primary" style={{background: '#ff43a4',marginLeft:"3%"}}>Назад</Button>
            </Link>
        </div>
    );
}

export default PostAbout;