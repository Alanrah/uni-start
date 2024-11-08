<template>
	<view class="box">
		<view v-for="item in list" :key="item.id"  class="list-item" @click="goDetail(item._id)">
			<view class="title">{{item.title}}</view>
			<view class="body">{{item.content}}</view>
		</view>
	</view>
</template>

<script setup>

const list = ref([]);
const  getList = async () => {
	// 1.回调请求方法
	// uni.request({
	// 	url: 'https://jsonplaceholder.typicode.com/posts',
	// 	method: 'GET',
	// 	header: {},
	// 	success: (res) => {
	// 		list.value = res.data;
	// 	}
	// });  
	// 2.异步then
	// uni.request({
	// 	url: 'https://jsonplaceholder.typicode.com/posts',
	// 	method: 'GET',
	// 	header: {},
	// }).then((res) => {
	// 		list.value = res.data;
	// 	});
	// 3.async await 
	const res = await uni.request({
		url: 'https://tea.qingnian8.com/xzs/news/get',
		method: 'POST',
		data: {
			limit: 100,
		},
		header:{
			"access-key":"095060"
		}
	});
	list.value = res.data.data;
}
const goDetail = (id) => {
	uni.navigateTo({
		url: `/pages/comment-detail/comment-detail?id=${id}`
	})
}

getList();

</script>

<style lang="scss" scoped>
.box {
	padding: 30rpx;
	.list-item {
		border-bottom: 1px solid #cfcfcf;
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
