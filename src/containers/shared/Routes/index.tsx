import * as React from "react";
import { hot } from "react-hot-loader";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";

//过场组件
const Loading = () => {
    return <div>Loading...</div>;
};

const Home = Loadable({
    loader: () => import("@views/Home"),
    loading: Loading
});

const Page = Loadable({
    loader: () => import("@views/Page"),
    loading: Loading
});

// @hot(module)
class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/page" component={Page} />
                </Switch>
            </Router>
        );
    }
}
export default Routes;
