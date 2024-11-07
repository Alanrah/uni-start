<template>
	<view class="">
		
	</view>
</template>

<script setup>

onLoad((hook) => {
	// 这是页面的query参数
	console.log(hook);
	uni.setStorageSync('comment_source', hook.source);
});
</script>

<style lang="scss" scoped>

</style>
