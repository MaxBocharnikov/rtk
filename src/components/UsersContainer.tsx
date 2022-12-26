import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchUsers } from '../store/reducers/ActionCreators';

const UsersContainer = () => {
    const dispatch = useAppDispatch();
    const {isLoading, error, users} = useAppSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [])
    return (
        <div>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>{error}</h1>}
            {JSON.stringify(users, null, 2)}
        </div>
    );
};

export default UsersContainer;