<template>
	<!--本文件由FirstUI授权予马*健（会员ID：315   6，身份证尾号：  01 0 43X）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view>
		<view class="sg-banner__box">
			<fui-card :margin="['20rpx','20rpx']" :show-border="true">
				<image class="sg-banner" :src="heroBg" mode="aspectFill"></image>
				<view class="sg-banner__content">
					<image class="sg-hero-image" :src="logoSrc" mode="widthFix"></image>
					<view class="sg-hero-title">苏打盖 Sodaguide</view>
					<view class="sg-hero-desc">苏打绿 aka 鱼丁糸、吴青峰的观光导览地图🧭</view>
				</view>
			</fui-card>
		</view>

		<view class="sg-banner__box">
			<fui-card :margin="['20rpx','20rpx']" :show-border="true">
				<image class="sg-banner" :src="heroBg" mode="aspectFill"></image>
				<view class="sg-banner__content">
					<image class="sg-hero-image" :src="logoSrc" mode="widthFix"></image>
					<view class="sg-hero-title">苏打盖 Sodaguide</view>
					<view class="sg-hero-desc">苏打绿 aka 鱼丁糸、吴青峰的观光导览地图🧭</view>
				</view>
			</fui-card>
		</view>

		<view class="sg-banner__box">
			<fui-card :margin="['20rpx','20rpx']" :show-border="true">
				<image class="sg-banner" :src="heroBg" mode="aspectFill"></image>
				<view class="sg-banner__content">
					<image class="sg-hero-image" :src="logoSrc" mode="widthFix"></image>
					<view class="sg-hero-title">苏打盖 Sodaguide</view>
					<view class="sg-hero-desc">苏打绿 aka 鱼丁糸、吴青峰的观光导览地图🧭</view>
				</view>
			</fui-card>
		</view>

		<view class="sg-banner__box">
			<fui-card :margin="['20rpx','20rpx']" :show-border="true">
				<image class="sg-banner" :src="heroBg" mode="aspectFill"></image>
				<view class="sg-banner__content">
					<image class="sg-hero-image" :src="logoSrc" mode="widthFix"></image>
					<view class="sg-hero-title">苏打盖 Sodaguide</view>
					<view class="sg-hero-desc">苏打绿 aka 鱼丁糸、吴青峰的观光导览地图🧭</view>
				</view>
			</fui-card>
		</view>

		<view class="sg-banner__box">
			<fui-card :margin="['20rpx','20rpx']" :show-border="true">
				<image class="sg-banner" :src="heroBg" mode="aspectFill"></image>
				<view class="sg-banner__content">
					<image class="sg-hero-image" :src="logoSrc" mode="widthFix"></image>
					<view class="sg-hero-title">苏打盖 Sodaguide</view>
					<view class="sg-hero-desc">苏打绿 aka 鱼丁糸、吴青峰的观光导览地图🧭</view>
				</view>
			</fui-card>
		</view>

		<fui-footer :text="sgFooterText"></fui-footer>
		<fui-backtop :scrollTop="scrollTop" name="top"></fui-backtop>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				heroBg: "https://cdn.jsdelivr.net/gh/kaluojushi/sodaguide@picbed/bg/4-light.svg",
				logoSrc: "https://picbed-1300227887.cos.ap-shanghai.myqcloud.com/sodaguide-weapp/logo.jpg",
				sgFooterText: "Together With Sodagreen 💚💚💚💚💚💚\nCopyright © Carlo 2023-now",
				scrollTop: 0,

			}
		},
		onLoad() {

		},
		methods: {
			itemClick() {

			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		}
	}
</script>

<style>
	.fui-wrap {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 0 32rpx;
		box-sizing: border-box;
	}

	.sg-banner__box {
		width: 100%;
		height: 530rpx;
		position: relative;
		background-color: #EDF9FF;
	}

	.sg-banner {
		width: 100%;
		height: 530rpx;
		display: block;
	}

	.sg-banner__content {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 2;
		left: 0;
		top: 0;
		padding: 80rpx 32rpx 0;
		box-sizing: border-box;
	}

	.sg-hero-image {
		width: 260rpx;
		height: 260rpx;
		border-radius: 16rpx;
		display: block;
	}

	.sg-hero-title {
		font-size: 40rpx;
		line-height: 40rpx;
		padding: 24rpx 0 40rpx;
		box-sizing: border-box;
		color: #4abf8a;
		font-weight: bold;
	}

	.sg-hero-desc {
		width: 280rpx;
		font-size: 24rpx;
		line-height: 40rpx;
		color: #333333;
	}
</style>