<template> 
	<view class="out" ref="viewRef">
		<input type="text" :value="iptValue" @focus="isActive=true" @blur="isActive=false">
		<image src="../../static/chicken.gif" mode="" class="pic" :class="isActive ? 'active' : '' "></image>
		
		<view v-for="item in 100" :key="item">{{item}}</view>
		
		<image v-if="isScroll" src="../../static/chicken.gif" mode="" class="fixed"></image>
	</view>
</template>

<script setup>
import {ref} from "vue";
import { onLoad, onReady, onShow, onHide, onUnload, onPageScroll, onReachBottom } from '@dcloudio/uni-app'

const iptValue = ref("");
const isActive = ref(false);
const viewRef = ref(null); // 注意：这个ref在onReady阶段开始渲染有值
const isScroll = ref(false);

// 页面生命周期：https://uniapp.dcloud.net.cn/tutorial/page.html#lifecycle
// 注意：query 在 hook 这里
// 注意： 监听页面加载，该钩子被调用时，响应式数据、计算属性、方法、侦听器、props、slots 已设置完成，其参数为上个页面传递的数据
onLoad((hook) => {
	// hook = {name: 'yaru', age: '12'}
	console.log('onLoad hook', hook)
});

onShow(() => {
	// 从后台进入前台、页面切换等场景，只要页面出现在屏幕上，就会触发
	console.log('mine 页面 show');
});

onHide(() => {
	// 从后台进入前台，就会触发
	console.log('mine 页面 hide');
});

//注意：页面初次渲染完成，此时组件已挂载完成，DOM 树($el)已可用
// 这里回调函数没有参数
onReady(() => {
	console.log('mine 页面 ready');
});

// 监听页面卸载
onUnload(() => {
	// 页面返回时候会触发
	console.log('mine 页面 unload');
});

// option = { scrollTop }
onPageScroll((option) => {
	if(option.scrollTop > 50) {
		isScroll.value = true;
	} else {
		isScroll.value = false;
	}
});
onReachBottom(() => {
	
})

</script>

<style lang="scss" scoped>
.out{
	padding:0 20px;
	margin-top:40px;
	position: relative;
	input {
		border: 1px solid #ccc;
		height: 40px;
		position: relative;
		z-index: 2;
		background-color: #fff;
	}
	.pic{
		width: 24px;
		height: 24px;
		z-index: 1;
		position: absolute;
		top: 0px;
		left:calc(50% - 12px);
		transition: top 0.3s;
	}
	.pic.active{
		top: -24px;
	}
	.fixed {
		width: 24px;
		height: 24px;
		position: fixed;
		right: 20rpx;
		bottom: 20rpx;
		transition: left 0.3s;
	}
}
</style>
