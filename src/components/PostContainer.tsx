import React, { useEffect } from 'react';
import { postAPi } from '../services/PostService';
import PostItem from './PostItem';
import { IPost } from '../types/post';

const PostContainer = () => {
    const [flag, setFlag] = React.useState(false);
    const { error, isLoading, data: posts } = postAPi.useFetchAllPostsQuery(100, {
        // pollingInterval: flag ? undefined : 1000
    });
    const [createPost] = postAPi.useCreatePostMutation();
    const [updatePost] = postAPi.useUpdatePostMutation();
    const [deletePost] = postAPi.useDeletePostMutation();

    const handleAddPost = async () => {
        const title = prompt();
        await createPost({title, body: title} as IPost)
    }

    useEffect(() => {
        setTimeout(() => {
            setFlag(true)
        }, 4000)
    }, [])

    return (
        <div className="post__list">
            <button onClick={ handleAddPost }>Add Post</button>
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