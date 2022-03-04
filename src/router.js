import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import Home from "pages/Home";
import BrowseBy from "pages/BrowseBy";
import DetailBrowseBy from "pages/BrowseBy/Detail";
import Checkout from "pages/Checkout";

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

const SetupRouter = () => {
  return (
    <Router history={history} basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/browse-by" component={BrowseBy} />
        <Route exact path="/browse-by/:id" component={DetailBrowseBy} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </Router>
  );
};

export default SetupRouter;
