import React from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";

import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
import Nav from "./Nav";
import history from "../history";

const App = () => {
  return (
    <Router history={history}>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact ><StreamList/></Route>
          <Route path="/streams/new" exact ><StreamCreate/>/</Route>
          <Route path="/streams/edit/:id" exact ><StreamEdit/></Route>
          <Route path="/streams/delete/:id" exact ><StreamDelete/></Route>
          <Route path="/streams/:id" exact ><StreamShow/></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
