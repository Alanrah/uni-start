
const BASE_URL = 'https://tea.qingnian8.com/api/bizhi';

export function request(config={}){	
	let {
		url,
		data={},
		method="GET",
		header={}
	} = config
	
	url = BASE_URL+url
	header['access-key'] = "161287"
	
	
	return new Promise((resolve,reject)=>{
		// uni.showLoading({
		// 			title: "加载中..."
		// 		})
		uni.request({
			url,
			data,
			method,
			header,
			success:res=>{
				// uni.hideLoading();
				if(res.data.errCode===0){
					resolve(res.data)
				}else if(res.data.errCode === 400){
					uni.showModal({
						title:"错误提示",
						content:res.data.errMsg,
						showCancel:false
					})
					reject(res.data)
				}else{
					uni.showToast({
						title:res.data.errMsg,
						icon:"none"
					})
					reject(res.data)
				}				
			},
			fail:err=>{
				// uni.hideLoading();
				reject(err)
			}
		})
	});
}
