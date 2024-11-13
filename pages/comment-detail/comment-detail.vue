<template>
	<view class="box">
		<view class="list-item">
			<view class="title">{{item.title}}</view>
			<view class="body">{{item.content}}</view>
		</view>
	</view>
</template>

<script setup>
const item = ref({})
onLoad(async(hook) => {
	// 这是页面的query参数
	console.log(hook);
	const res = await uni.request({
		url: `https://tea.qingnian8.com/xzs/news/detail`,
		method: 'POST',
		data: {
			id: hook.id
		},
		header:{
			"access-key":"486972"
		}
	});
	item.value = res.data.data;
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
