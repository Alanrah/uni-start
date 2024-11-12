<script>
	// 应用生命周期 https://uniapp.dcloud.net.cn/collocation/App.html#applifecycle  
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "common/scss/common-style.scss"
</style>
