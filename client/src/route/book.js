import { Route, Switch } from "react-router-dom";
import Index from "../pages/Book";
import Show from "../pages/Book/Show";
import Create from "../pages/Book/Create";
import Edit from "../pages/Book/Edit";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/create" component={Create} />
      <Route path="/show/:id" component={Show} />
      <Route path="/edit/:id" component={Edit} />
    </Switch>
  );
};

export default Router;
