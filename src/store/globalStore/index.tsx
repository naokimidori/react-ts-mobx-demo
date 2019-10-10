import { observable, action } from "mobx";

export class GlobalStore {
    // 测试用
    @observable
    num: number = 0;

    // 增加
    @action
    increase = () => {
        this.num += 1;
    };

    // 减少
    @action
    decrease = () => {
        this.num -= 1;
    };
}

// 导出实例
export default new GlobalStore();
