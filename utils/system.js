const SYSTEM_INFO = uni.getSystemInfoSync();

export const getStatusBarHeight = ()=> SYSTEM_INFO.statusBarHeight || 15;

export const getTitleBarHeight = ()=>{
	if(uni.getMenuButtonBoundingClientRect){
		let {top,height} = uni.getMenuButtonBoundingClientRect();
		return height + (top - getStatusBarHeight())*2		
	}else{
		return 40;
	}
}

export const  getNavBarHeight = ()=> getStatusBarHeight()+getTitleBarHeight();

export const getLeftIconLeft = ()=> {
	// 头条的小程序，默认左边有个小程序icon，右边还有个反馈按钮
	// #ifdef MP-TOUTIAO
		let {leftIcon:{left,width}}  = tt.getCustomButtonBoundingClientRect(); // 注意： 深度解构
		return left+ parseInt(width);
	// #endif
	
	// #ifndef MP-TOUTIAO
		return 0
	// #endif	
}