import * as React from "react";
import { Button, Icon } from "antd";

interface Props {}
interface State {}
class Test extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    state: State = {};

    render() {
        return (
            <div>
                <Icon type="step-backward" />
                <Button type="primary">Primary</Button>
            </div>
        );
    }
}

export default Test;
