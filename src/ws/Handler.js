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
    console.log("loing", obj)
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
    console.log("package equipmentList", obj.equipmentList)
    console.log("package itemList", obj.itemList)

    vm.itemList = obj.itemList
    // 0 称号 1 武器 2 头部 3 衣服 4披风 5 护腕 6 腰带 7 鞋子 8 戒指 9项链 10 饰品
    obj.equipmentList.forEach(e => {
        switch (e.type) {
            case 0:
                vm.equipment.cheng_hao = e;
                break;
            case 1:
                vm.equipment.wu_qi = e;
                break;
            case 2:
                vm.equipment.tou_bu = e;
                break;
            case 3:
                vm.equipment.yi_fu = e;
                break;
            case 4:
                vm.equipment.pi_feng = e;
                break;
            case 5:
                vm.equipment.hu_wang = e;
                break;
            case 6:
                vm.equipment.yao_dai = e;
                break;
            case 7:
                vm.equipment.xie_zi = e;
                break;
            case 8:
                vm.equipment.jie_zhi = e;
                break;
            case 9:
                vm.equipment.xiang_liang = e;
                break;
            case 10:
                vm.equipment.shi_ping = e;
                break;
        }
    })

}
export default sendThis