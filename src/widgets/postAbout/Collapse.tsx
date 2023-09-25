import type {CollapseProps} from 'antd';
import {Button, Card, Collapse, List, Spin} from 'antd';
import {PostsList} from "../../shared/types/postsList";
import React, {useEffect, useState} from "react";
import {Post} from "../../shared/types/post";
import InfiniteScroll from "react-infinite-scroll-component";
import {Link} from "react-router-dom";


function Collapses(post:Post) {
    const title = (
        <p style={{paddingLeft: 24}}>
            {post.title}
        </p>
    );
    const body = (
        <p style={{paddingLeft: 24}}>
            {post.body}
        </p>
    );
    const user = (
        <p style={{paddingLeft: 24}}>
            {post.userId}
        </p>
    );


    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: `Это пост - ${post.id}`,
            children: title,
        },
        {
            key: '2',
            label: 'Текст поста',
            children: body,
        },
        {
            key: '3',
            label: 'Номер пользователя создавшего',
            children: user,
        },
    ];


    return (
        <Collapse style={{backgroundColor:"white", width: "70%",margin:"2%"}} items={items} bordered={false} defaultActiveKey={['1']}/>

    );
}


export default Collapses;