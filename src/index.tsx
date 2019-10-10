import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.scss";
import { configure } from "mobx";
import { Provider } from "mobx-react";
import * as store from "./store";
import Test from "@components/test";
import Counter from "@views/Counter";
import Routes from "@shared/Routes";

/**  这里面的configure({enforceActions: 'observed'})用于限制被observable
(也就是store中添加了@observable)的数据的修改方式，
让其只能添加了@action的函数中进行修改。
*/
configure({ enforceActions: "observed" });

const render = () => {
    ReactDOM.render(
        <Provider {...store}>
            <Counter />
        </Provider>,
        document.getElementById("app")
    );
};
render();
