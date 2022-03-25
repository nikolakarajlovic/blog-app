import './styles/App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AppPosts from './pages/AppPosts';
import SinglePost from './components/SinglePost';
import AddPost from './pages/AddPost';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to='/add'>Add</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/posts">
            <AppPosts />
          </Route>
          <Route exact path='/edit/:id'>
            <SinglePost />
          </Route>
          <Route exact path='/add'>
            <AddPost />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
