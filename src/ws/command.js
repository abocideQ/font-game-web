let vm = null;

const sendThis = (_this) => {
    vm = _this;
};

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