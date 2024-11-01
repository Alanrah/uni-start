<template>
	<view>
		<!-- uni-app的comp不需要注册，只要写在components目录下的，都可以直接使用 -->
		<!-- uni 的 easycom 组件模式：https://uniapp.dcloud.net.cn/collocation/pages.html#easycom -->
		<view>这是user-info组件</view>
	</view>
</template>

<script>
	export default {
		name:"user-info",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
@import "../../common/scss/user.scss";

</style>