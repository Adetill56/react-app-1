import './App.css';

import Header from './Header/Header';
import Main from './Main/Main';
import UserInfo from './UserInfo/UserInfo';
import List from './List/List';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/user">
            <UserInfo />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
