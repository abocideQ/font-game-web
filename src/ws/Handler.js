let vm = null

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

export function add_msg(obj) {
    vm.msgList.push({
        nickname: obj.nickname,
        msg: obj.msg
    })
    resetScroll();
}

export function other_login(obj) {
    vm.contentList.push(obj.msg)
}

export function add_content_info(obj) {
    vm.contentList.push(obj.msg)
    resetScroll();
}

export function login(obj) {
    vm.roleBase = {
        level: obj.roleBaseInfo.level,
        nickname: obj.roleBaseInfo.nickname,
        exp: obj.roleBaseInfo.exp,
        nextExp: obj.roleBaseInfo.nextExp,
        hp: obj.roleBaseInfo.hp,
        mp: obj.roleBaseInfo.mp,
        maxMp: obj.roleBaseInfo.maxMp,
        maxHp: obj.roleBaseInfo.maxHp
    }
    vm.contentList.push(obj.msg)
}


export function look(obj) {
    vm.role = {
        sex: obj.roleInfo.sex,
        level: obj.roleInfo.level,
        nickname: obj.roleInfo.nickname,
        property: obj.roleInfo.property,
        exp: obj.roleInfo.exp,
        nextExp: obj.roleInfo.nextExp,
        hp: obj.roleInfo.hp,
        mp: obj.roleInfo.mp,
    }
}

export function _package(obj) {
    console.log(obj)
}

export default sendThis