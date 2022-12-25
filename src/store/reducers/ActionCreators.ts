import axios, { AxiosError } from "axios";
import { AppDispatch } from "../store";
import { IUser } from "../../types/user";
import { userSlice } from "./UserSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Simulate } from 'react-dom/test-utils';
import animationStart = Simulate.animationStart;

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   const { userFetching, userFetchingSuccess, userFetchingError } =
//     userSlice.actions;
//   try {
//     dispatch(userFetching());
//     const response = await axios.get<IUser[]>(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     dispatch(userFetchingSuccess(response.data));
//   } catch (e) {
//     const error = e as AxiosError;
//     dispatch(userFetchingError(error.message));
//   }
// };

export const fetchUsers = createAsyncThunk(
    "user/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get<IUser[]>(
                "https://jsonplaceholder.typicode.com/users"
            );
            return response.data;
        } catch (e) {
            const error = e as AxiosError;
            throw rejectWithValue(error.message)
        }
    }

);
