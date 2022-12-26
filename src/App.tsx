import React from "react";
import "./App.css";
import PostContainer from './components/PostContainer';
import PostContainer2 from './components/PostContainer2';
import UsersContainer from './components/UsersContainer';

function App() {
      return (
        <div className="App">
            <div className='posts'>
                <PostContainer />
                <PostContainer2 />
            </div>
            <UsersContainer />
        </div>
      );
}

export default App;
