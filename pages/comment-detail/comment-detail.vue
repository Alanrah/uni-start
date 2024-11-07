<template>
	<view class="box">
		<view class="list-item">
			<view class="title">{{item.title}}</view>
			<view class="body">{{item.body}}</view>
		</view>
	</view>
</template>

<script setup>
const item = ref({})
onLoad(async(hook) => {
	// 这是页面的query参数
	console.log(hook);
	const res = await uni.request({
		url: `https://jsonplaceholder.typicode.com/posts/${hook.id}`,
		method: 'GET',
		header: {},
	});
	item.value = res.data;
	uni.setStorageSync('title', item.value.title);
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
