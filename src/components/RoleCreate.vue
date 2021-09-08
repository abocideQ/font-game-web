<template>
	<div class="home-title">
		<div class="welcome">
			<p>创建角色</p>
		</div>
		<div class="roleCreater">
			<p>角色名称：<input id="nickname" type="text" v-model="nickname" placeholder="请输入2-4个文字" maxlength="4" />
				<span class="pointer" @click="genName">生成</span>
			</p>
			<p>性别:
				&nbsp;&nbsp;
				<label><input v-model="sex" :checked="sex ==1" type="radio" name="sex" value="1">男性</label>
				&nbsp;&nbsp;&nbsp;&nbsp;
				<label><input v-model="sex" :checked="sex ==0" type="radio" name="sex" value="0">女性</label>
			</p>
			<p>初始属性：</p>
			<p>
				武力：<input type="number" v-model="WL" max="30" min="15" />&nbsp;&nbsp;&nbsp;&nbsp;
				根骨：<input type="number" v-model="GG" max="30" min="15" /></p>
			<p>
				悟性：<input type="number" v-model="WX" max="30" min="15" />&nbsp;&nbsp;&nbsp;&nbsp;
				身法：<input type="number" v-model="SF" max="30" min="15" /></p>
			<p class="error-text" v-show="showMsg!=''">{{showMsg}}</p>
			<p>每项不低于15点，不高于30点，合计80点</p>
		</div>
		<div class="options">
			<span class="pointer" @click="signIn()">创建</span>
			<span class="pointer" @click="toRole()">选择角色</span>
		</div>
	</div>
</template>
<!-- 
TODO：
	1、属性随机设置一些值，目前是固定 20
	2、nickname 需要默认随机名称
 -->
<script>
	import randomName from '../assets/js/random-name.js'
	import {
		createRoleApi
	} from '../api/UserApi.js'

	function Chinasimple(str) {
		var strs = str.replace(/(^\s+)|(\s+$)/g, ""); //去除前后的空格
		if (!strs.match(/^[\u4e00-\u9fa5]{2,4}$/)) { //我习惯用match
			return false;
		}
		return true;
	}
	export default {
		name: 'RoleCreate',
		data() {
			return {
				showMsg: "",
				sex: 1,
				WL: 20,
				GG: 20,
				WX: 20,
				SF: 20,
				nickname: "",
			}
		},
		watch: {
			WL(newValue, oldValue) {
				console.log(newValue, oldValue)
				if (newValue < 15 || newValue > 30) {
					this.showMsg = "武力超过合理范围"
				} else {
					this.showMsg = ''
				}
			},
			GG(newValue, oldValue) {
				console.log(newValue, oldValue)
				if (newValue < 15 || newValue > 30) {
					this.showMsg = "根骨过合理范围"
				} else {
					this.showMsg = ''
				}
			},
			WX(newValue, oldValue) {
				console.log(newValue, oldValue)
				if (newValue < 15 || newValue > 30) {
					this.showMsg = "悟性超过合理范围"
				} else {
					this.showMsg = ''
				}
			},
			SF(newValue, oldValue) {
				console.log(newValue, oldValue)
				if (newValue < 15 || newValue > 30) {
					this.showMsg = "身法超过合理范围"
				} else {
					this.showMsg = ''
				}
			},
			nickname(newValue, oldValue) {
				console.log(newValue, oldValue, Chinasimple(newValue))
				if (!Chinasimple(newValue)) {
					this.showMsg = "昵称只能2-4个汉字～"
				} else {
					this.showMsg = ''
				}
			}
		},
		methods: {
			async signIn() {
				if (this.nickname == "") {
					this.showMsg = "昵称只能2-4个汉字～"
				}
				if (this.showMsg != "") {
					alert(this.showMsg)
				} else {
					this.bus.$emit('loading', "创建角色中...");
					await createRoleApi({
						"sex": this.sex,
						"wl": this.WL,
						"gg": this.GG,
						"wx": this.WX,
						"sf": this.SF,
						"nickname": this.nickname
					}).then((res) => {
						if (res.data.code === 200) {
							this.bus.$emit('loading', "创建成功...");
							this.$emit("show-view", 3)
						} else {
							this.showMsg = res.data.msg
						}
					})
				}
			},
			toRole() {
				this.$emit("show-view", 3)
			},
			toRegister() {},
			genName() {
				this.nickname = randomName.getName()
			},
			ramdomData(list,min,max,currentMax){
				if(list.length == 4)
					return list
				if(list.length ==3){
					list.push(80-(list[0]+list[1]+list[2]))
					return list
				}
				 
				var num = RandomNumBoth(min,max)
				list.push(num)
				currentMax = currentMax-num
				return ramdomData(list,min,currentMax-max,currentMax)
			},
			RandomNumBoth(Min,Max){            
			    var Range = Max - Min;            
			    var Rand = Math.random();            
			    var num = Min + Math.round(Rand * Range); //四舍五入            
			    return num;
			}
		}
	}
</script>

<style scoped="scoped">
	.roleCreater {
		padding-top: 10px;
	}

	.roleCreater>p {
		padding: 7px 0;
	}

	.roleCreater input {
		padding: 2px 4px;
	}
</style>
