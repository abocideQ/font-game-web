import WS ,{connect,listenMsg} from "../ws/WebSocket"

export default {
    vm:{},
    ws: {},
    path: "ws://127.0.0.1:8080/ws?r=",
    init: function (vm) {
        if (typeof (WebSocket) === "undefined") {
            alert("您的浏览器不支持socket")
        } else {
            // 实例化socket
            this.ws = new WebSocket(this.path + localStorage.getItem("r"))
            // 监听socket连接
            this.ws.onopen = this.open
            // 监听socket错误信息
            this.ws.onerror = this.error
            // 监听socket消息
            this.ws.onmessage = this.getMessage
            WS(vm)
        }
    },
    open: function () {
        connect()
    },
    error: function (event) {
        console.log('WebSocket error: ', event);
    },
    getMessage: function (msg) {
        listenMsg(msg)
    },
    send: function (params) {
        this.ws.send(params)
    },
    close: function () {
        this.vm.contentList.push("服务器连接已关闭，请尝试重新登录")
    },
}

