let vm = null;
import Handler, {
    add_content_info,
    add_msg, login, look, other_login

} from "./Handler"

const sendThis = (_this) => {
    vm = _this;
    Handler(vm)
};

export function connect() {
    console.log("服务连接成功")
    vm.bus.$emit('loading', "服务器连接成功");
    if (localStorage.getItem("t") && localStorage.getItem("r")) {
        let loginData = {
            "command": "login",
            "r": localStorage.getItem("r"),
            "t": localStorage.getItem("t")
        }
        send(JSON.stringify(loginData));
    } else {
        localStorage.removeItem("t")
        localStorage.removeItem("r")
        location.reload();
    }
}

export function listenMsg(msg) {
    var obj = JSON.parse(msg.data);
    if (obj.code === "200") {
        if (obj.command === "add msg") { // 聊天室消息添加
            add_msg(obj)
        } else if (obj.command === "login") { // 登录返回
            login(obj)
        } else if (obj.command === "other login") { // 异地登录提示
            other_login(obj)
        } else if (obj.command === "add content info") { // 添加 content info
            add_content_info(obj)
        } else if (obj.command === "look") {
            look(obj)
        }
    } else {
        vm.bus.$emit("loading", obj.msg)
    }
}

export function send(params) {
    vm.socket.send(params)
}

export default sendThis