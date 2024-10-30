<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area" hover-class="text-hover" hover-start-time="0" hover-stay-time="0">
			<text class="title" selectable="true">{{title}}</text>
		</view>
		<!--  view.box2 enter 自动补全 -->
		<view class="box2"></view>
		<scroll-view class="scroll-i" scroll-y scroll-with-animation>
			<view >view是块状元素</view>
			<view >view是块状元素</view>
			<view >view是块状元素</view>
			<view >view是块状元素</view>
			<view >view是块状元素</view>
			<view >view是块状元素</view>
			<view >view是块状元素</view>
			<view >view是块状元素</view>
			<view >view是块状元素</view>
			<view >view是块状元素</view>
			<view >view是块状元素{{a}}</view>
		</scroll-view>
	</view>
</template>

<script setup>
	import {ref} from 'vue';
	const a = ref(9);
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.text-hover {
		background-color: #8f8f94;
	}
	.scroll-i {
		width: 80%;
		height: 220px;
		border: 1px solid #8f8f94;
	}
</style>
