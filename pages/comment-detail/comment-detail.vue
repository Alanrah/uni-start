<template>
	<view class="box">
		<view class="list-item">
			<view class="title">{{item.title}}</view>
			<view class="body">{{item.body}}</view>
		</view>
	</view>
</template>

<script setup>
const item = ref({title: '', body: ''})
onLoad((hook) => {
	// 这是页面的query参数
	console.log(hook);
	item.value = hook;
	uni.setStorageSync('title', hook.title);
});
</script>

<style lang="scss" scoped>
.box {
	padding: 30rpx;
	.list-item {
		padding: 20rpx 0;
		font-size: 32rpx;
		.title {
			font-weight: 600;
			margin-right: 10rpx;
		}
		.body {
			font-size: 32rpx;
			color:#ccc;
		}
	}
}

</style>
