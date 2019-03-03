import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from './container/Home';

import BlogsList from './container/BlogsList';
import BlogDetail from './container/BlogDetail';

import EntriesList from './container/EntriesList';
import EntryDetail from './container/EntryDetail';

import AuthorsList from './container/AuthorsList';
import AuthorDetail from './container/AuthorDetail';

import CommentsList from './container/CommentsList';
import CommentDetail from './container/CommentDetail';

import NotFound from './container/NotFound';

const BaseRouter = () => (
  <div>
    <Switch>
    <Route exact path="/" component={Home} />{" "}

    <Route exact path="/blogs" component={BlogsList} />{" "}
    <Route exact path="/blogs/:blogID" component={BlogDetail} />{" "}

    <Route exact path="/entries" component={EntriesList} />{" "}
    <Route exact path="/entries/:entryID" component={EntryDetail} />{" "}

    <Route exact path="/authors" component={AuthorsList} />{" "}
    <Route exact path="/authors/:authorID" component={AuthorDetail} />{" "}
    <Route exact path="/authors/entries/:entryID" component={EntryDetail} />{" "}

    <Route exact path="/comments" component={CommentsList} />{" "}
    <Route exact path="/comments/:commentID" component={CommentDetail} />{" "}

    <Route component={NotFound} />{" "}
    </Switch>
  </div>
);

export default BaseRouter;