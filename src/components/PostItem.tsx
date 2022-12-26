import React from 'react';
import { IPost } from '../types/post';

type Props = {
    post: IPost;
    update: (post: IPost) => void;
    remove: (post: IPost) => void;
}

const PostItem: React.FC<Props> = ({post, remove, update}) => {
    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation();
        remove(post);
    }

    const handleUpdate = (event: React.MouseEvent) => {
        const title = prompt() || '';
        update({...post, title})
    }

    return (
        <div className='post' onClick={ handleUpdate }>
            {post.id} {post.title}
            <button onClick={ handleRemove }>delete</button>
        </div>
    );
};

export default PostItem;