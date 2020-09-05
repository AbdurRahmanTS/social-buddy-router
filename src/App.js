import React from 'react';
import './App.css';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './component/NoMatch/NoMatch';
import PostDetail from './component/PostDetail/PostDetail';



function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/post/:postId">
          <PostDetail />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
