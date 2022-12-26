import React from 'react';
import { postAPi } from '../services/PostService';
import PostItem from './PostItem';

const PostContainer = () => {
    const { error, isLoading, data: posts } = postAPi.useFetchAllPostsQuery(100);
    const [updatePost] = postAPi.useUpdatePostMutation();
    const [deletePost] = postAPi.useDeletePostMutation();
    return (
        <div className="post__list">
            { isLoading && <h4>Loading...</h4> }
            {error && <h4>Ошибка</h4> }
            {posts && posts.map(post => (
                <PostItem
                    key={post.id}
                    post={post}
                    update={updatePost}
                    remove={deletePost}
                />
            ))}
        </div>
    );
};

export default PostContainer;