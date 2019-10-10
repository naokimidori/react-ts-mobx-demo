import * as React from "react";
import { observer, inject } from "mobx-react";
import { Button } from "antd";
import { hot } from "react-hot-loader";
// interface IGlobalStore {
//     increase: () => void;
//     decrease: () => void;
//     num: number;
// }
interface IProps {
    globalStore?: IGlobalStore.GlobalStore;
}

@hot(module)
@inject("globalStore")
@observer
class Counter extends React.Component<IProps> {
    increase = () => {
        this.props.globalStore.increase();
    };
    decrease = () => {
        this.props.globalStore.decrease();
    };
    render() {
        const { num } = this.props.globalStore;
        return (
            <div>
                <div>{num}</div>
                <Button onClick={this.increase}>增加</Button>
                <Button onClick={this.decrease}>减少</Button>
            </div>
        );
    }
}

export default Counter;
