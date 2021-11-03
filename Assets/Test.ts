import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class Test extends ZepetoScriptBehaviour {
    Start() {
        console.log("START")
        this.TestFun();
    }

    TestFun() {
        console.log("TEST FUN")
        const promise = new Promise((resolve, _) => {
            setTimeout(() => resolve("DELAY TEST"), 5000)
        })
        promise.then((res) => {
            console.log(res)
        })
    }
}
