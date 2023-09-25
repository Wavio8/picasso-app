import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, List, Spin} from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import {Post} from "../../shared/types/post";
import {PostsList} from "../../shared/types/postsList";

function PostList({posts}: PostsList) {
    const [page, setPage] = useState(1);
    const [visiblePosts, setVisiblePosts] = useState<Post[]>([]);
    const [hasMore, setHasMore] = useState(true);
    useEffect(() => {
        if (posts) {
            setVisiblePosts(posts.slice(0, page * 10));
        }
    }, [posts, page]);
    const loadMore = () => {
        if (page * 10 < posts.length) {
            setPage(page + 1);
        } else {
            setHasMore(false);
        }
    };
    if (!visiblePosts.length) {
        return null;
    }

    return (
        <InfiniteScroll
            dataLength={visiblePosts.length}
            next={loadMore}
            hasMore={hasMore}
            loader={<h4><Spin></Spin></h4>}
        >
            <List
                dataSource={visiblePosts}
                renderItem={(post) => (
                    <List.Item>
                        <Card title={
                            <>
                                <span>{post.id}. </span>
                                <span>{post.title}</span>
                            </>}
                              style={{
                                  width: '65%',
                                  marginLeft: "2%"
                              }}

                        >
                            <p style={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}>{post.body}

                            </p>
                            <Link to={`/post/${post.id}`}>
                                <Button type="primary" style={{background: '#ff43a4'}}>Просмотр</Button>
                            </Link>

                        </Card>

                    </List.Item>
                )}
            />
        </InfiniteScroll>

    );
}

export default PostList;