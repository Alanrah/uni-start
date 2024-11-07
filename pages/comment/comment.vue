<template>
	<view>
		<view @click="goDetail">这是去详情的页面</view>
	</view>
</template>

<script setup>

const goDetail = () => {
	uni.navigateTo({
		url: '/pages/comment-detail/comment-detail?source=comment'
	})
}
</script>

<style>
	       
</style>
