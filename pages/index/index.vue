<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area" hover-class="text-hover" hover-start-time="0" hover-stay-time="0">
			<text class="title" user-select>{{title}}</text>
		</view>
		<!-- 注意：如果小程序显示组件被过滤，但是h5显黑正常，就清空微信小程序工具缓存再试一下 -->
		<user-info></user-info>
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
			<view >view是块状元素</view>
		</scroll-view>
		 <!-- 注意： open-type 不同，页面路由的变化不同，执行的生命周期钩子不同 -->
		<navigator url="/pages/mine/mine?name=yaru&age=12" open-type="switchTab">mine</navigator>
		<button @click="refresh">点击刷新</button>
	</view>
</template>

<script setup>
	// 注意： 使用了 unplugin-auto-import/vite ，引用会被自动引入
	// import {ref} from 'vue';
	// import { onReady } from '@dcloudio/uni-app'
	
	const title = ref(90);
	
	const refresh = () => {
		uni.startPullDownRefresh();
		setTimeout(() => {
			uni.stopPullDownRefresh();
			}, 3000)
	}
	// 和refresh其实是一样的
	// function onPullDownRefresh() {
	// 	console.log('refresh');
	// 	setTimeout(function () {
	// 		uni.stopPullDownRefresh();
	// 	}, 1000);
	// }
	
	onReady(() => {
	      console.log('onReady')
		  uni.showToast({
			  // 注意： title 文本在小程序平台最多显示 7 个汉字长度
			  title: '欢迎进入uni-start',
			  icon: 'success',
			  duration: 3000,
		  });
		  uni.setTabBarBadge({
			  index: 0,
			  text: '99',
		  });
	    });
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
