import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AppPosts from './pages/AppPosts';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
        <p>Home Page</p>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/posts">
            <AppPosts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
