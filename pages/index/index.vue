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
		  <common-title></common-title>
		  <view class="content">
			  <scroll-view scroll-x>
				  <view class="box">
					  <image
					    src="../../common/images/banner1.jpg"
					    mode="aspectFill"
					  ></image>
				  </view>
			  </scroll-view>
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
}
</style>
