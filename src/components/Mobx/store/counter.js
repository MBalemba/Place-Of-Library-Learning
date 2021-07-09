import {makeAutoObservable} from "mobx";

class Counter {
    count = 0

    constructor() {
       makeAutoObservable(this)
    }

    decrement() {
        this.count = this.count - 1
    }

    increment() {
        this.count = this.count + 1
    }


}

export default new Counter()