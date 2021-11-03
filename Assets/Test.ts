import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class Test extends ZepetoScriptBehaviour {
    Start() {
        this.TestFun();
    }

    TestFun() {
        console.log("LOG")
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("TETE"), 5000)
        })
        promise.then((res) => {
        })
    }
}