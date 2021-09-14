let vm = null;
function resetScroll() {
    var contentInfo = document.getElementById("content-info")
    if (contentInfo.scrollHeight) {
        contentInfo.scrollTop = contentInfo.scrollHeight;
    }
    var msgList = document.getElementById("msg-list")
    if (msgList.scrollHeight) {
        msgList.scrollTop = msgList.scrollHeight;
    }
}

const sendThis = (_this) => {
    vm = _this;
};
export function connect(){
    console.log("socket连接成功")
    this.bus.$emit('loading', "服务器连接成功");
    if (localStorage.getItem("t") && localStorage.getItem("r")) {
        let loginData = {
            "command": "login",
            "r": localStorage.getItem("r"),
            "t": localStorage.getItem("t")
        }
        this.send(JSON.stringify(loginData));
    } else {
        localStorage.removeItem("t")
        localStorage.removeItem("r")
        location.reload();
    }
}




export function listenMsg(msg) {
    console.log("收到消息：", msg.data, typeof msg.data)
    var obj = JSON.parse(msg.data);
    if (obj.code === "200") {
        if (obj.command === "add msg") { // 聊天室消息添加
            vm.msgList.push({
                nickname: obj.nickname,
                msg: obj.msg
            })
            resetScroll();
        } else if (obj.command === "login") { // 登录返回
            vm.role = obj.roleInfo.property
            vm.contentList.push(obj.msg)
        } else if (obj.command === "other login") { // 异地登录提示
            console.log(obj.msg)
            vm.contentList.push(obj.msg)
        } else if (obj.command === "add content info") { // 添加 content info
            vm.contentList.push(obj.msg)
            resetScroll();
        }
    } else {
        vm.bus.$emit("loading", obj.msg)
    }
}

export default sendThis