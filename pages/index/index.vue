<template>
  <view class="homeLayout">
    <view class="banner">
      <swiper
        class="swiper"
        circular
        :indicator-dots="true"
        indicator-color="rgba(255,255,255,0.5)"
        indicator-active-color="rgba(255,255,255,0.5)"
        :autoplay="true"
        :interval="3000"
        :duration="1000"
      >
        <swiper-item>
          <image
            src="../../common/images/banner1.jpg"
            mode="aspectFill"
          ></image>
        </swiper-item>
        <swiper-item>
          <image
            src="../../common/images/banner2.jpg"
            mode="aspectFill"
          ></image> </swiper-item
        ><swiper-item>
          <image
            src="../../common/images/banner3.jpg"
            mode="aspectFill"
          ></image>
        </swiper-item>
      </swiper>
    </view>
	
	<view class="notice">
	    <view class="left">
	      <uni-icons type="sound-filled" size="20" color="#28b389"></uni-icons>
	      <text class="text">公告</text>
	    </view>
	    <view class="center">
	      <swiper vertical autoplay interval="1500" duration="300" circular>
	        <swiper-item v-for="item in 4">
				文字内容文字内容
			</swiper-item>
	      </swiper>
	    </view>
	    <view class="right">
	      <uni-icons type="right" size="16" color="#333"></uni-icons>
	    </view>
	  </view>
	  <view class="select">
		  <common-title>
			  <template #name>每日推荐</template>
			  <template #custom>
				  <view class="date">
					  <uni-icons type="calendar" size="18" color="#28b389"></uni-icons>
					  <view class="text">
						  <uni-dateformat :date="Date.now()" format="dd"></uni-dateformat>
						  日
					  </view>
						
				  </view>
			  </template>
		  </common-title>
		  <view class="content">
			  <scroll-view scroll-x>
				  <view class="box"  v-for="item in 8">
					  <image
					    src="../../common/images/preview_small.webp"
					    mode="aspectFill"
					  ></image>
				  </view>
			  </scroll-view>
			</view>
	  </view>
	  
	  <view class="theme">
	  		  <common-title>
	  			  <template #name>专题精选</template>
	  			  <template #custom>
					  <navigator url="" class="more">More+</navigator>
				  </template>
	  		  </common-title>
	  		  <view class="content">
					<theme-item v-for="item in 8"></theme-item>
					<theme-item :is-more="true"></theme-item>
	  			</view>
	  </view>
  </view>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../common/scss/common-style.scss";

.homeLayout {
  width: 750rpx;
  .banner {
    width: 750rpx;
    padding: 30rpx 0px;
    swiper {
      width: 750rpx;
      height: 340rpx;
      &-item {
        width: 100%;
        height: 100%;
        padding: 0px 30rpx;
        box-sizing: border-box;
        image {
          width: 100%;
          height: 100%;
          border-radius: 10rpx;
        }
      }
    }
  }
  .notice {
    width: 690rpx;
    height: 80rpx;
    line-height: 80rpx;
    display: flex;
    align-items: center;
	justify-content: space-between;
    background-color: #f0f0f9;
    margin: 0px auto;
    box-sizing: border-box;
    border-radius: 10rpx;
    .left {
      width: 140rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      .text {
        font-size: 28rpx;
		font-weight: 600;
        color: #28b389;
        margin-left: 10rpx;
      }
    }
    .right {
      width: 70rpx;
      display: flex;
      align-items: center;
	  height: 100%;
      .text {
        font-size: 28rpx;
      }
    }
    .center {
      flex: 1;
	  height: 100%;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  swiper {
		  width: 100%;
		  height: 100%;
		  swiper-item {
			  height: 100%;
			  font-size: 30rpx;
			  color: #666;
			  overflow: hidden;
			  white-space: nowrap;
			  text-overflow: ellipsis;
		  }
	  }
    }
  }
  .select {
	  padding-top: 50rpx;
	  .date{
		  color: #28b389;
		  display: flex;
		  align-items: center;
		  .text {
			  margin-left: 15rpx;
		  }
	  }
	  .content{
		width: 720rpx;
		margin-top: 30rpx; 
		margin-left: 30rpx;
		scroll-view {
			white-space: nowrap;
			.box {
				width: 200rpx;
				height: 430rpx;
				display: inline-block;
				margin-right: 15rpx;
				image {
				  width: 100%;
				  height: 100%;
				  border-radius: 10rpx;
				}
			}
			.box:last-child{
				margin-right: 30rpx
			}
		}
	  }
  }
	.theme{
		padding:50rpx 0;
		.more{
			font-size: 32rpx;
			color:#888;
			
		}
		.content{
			margin-top:30rpx;
			padding:0 30rpx;
			// 注意: 网格布局
			display: grid;
			gap:15rpx;
			grid-template-columns: repeat(3,1fr);
		}
	}
}
</style>
