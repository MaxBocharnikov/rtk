import React, { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { userSlice } from "./store/reducers/UserSlice";
import { fetchUsers } from "./store/reducers/ActionCreators";
import PostContainer from './components/PostContainer';
import PostContainer2 from './components/PostContainer2';

function App() {
  return (
    <div className="App">
      <PostContainer />
      <PostContainer2 />
    </div>
  );
}

export default App;
