<template>
	<view>
		<view class="fui-wrap">
			<view class="fui-banner__box">
				<image :src="bannerSrc" class="fui-banner" mode="widthFix"></image>
			</view>
			<view class="fui-page__desc">
				这里为你推荐一些其他与苏打绿 aka 鱼丁糸、吴青峰有关的链接。如果你有推荐的链接，可以给我留言。
			</view>
			<view class="fui-list__view">
				<fui-list-cell arrow :padding="[0,'32rpx']" :bottomBorder="false" radius="16rpx" marginTop="24"
					v-for="(item,index) in types" :key="index" :index="index" @click="href(item.alias)">
					<view class="fui-list__item fui-align__center">
						<image class="fui-item__icon" :src="`/static/if/${item.alias}${item.alias==='bilibili'?'.png':'-icon.jpg'}`">
						</image>
						<view class="fui-item__title">
							{{item.title}}
						</view>

					</view>
				</fui-list-cell>
			</view>
		</view>

		<fui-footer :navigate="sgFooterNavigate" :text="sgFooterText"></fui-footer>
		<fui-backtop :scrollTop="scrollTop" name="top"></fui-backtop>
	</view>
</template>

<script>
	import $fui from '@/components/firstui/fui-clipboard';
	export default {
		data() {
			return {
				name: "",
				types: [
					{
						title: "苏打绿官方",
						alias: "official"
					},
					{
						title: "粉丝制作",
						alias: "fans"
					},
					{
						title: "b 站 up 主",
						alias: "bilibili"
					},
				],
				bannerSrc: "https://picbed-1300227887.cos.ap-shanghai.myqcloud.com/sodaguide-weapp/links/links-banner.jpg",

				sgFooterNavigate: [{
					text: "回到首页",
					openType: "switchTab",
					url: '/pages/index/index'
				}],
				sgFooterText: "Together With Sodagreen 💚💚💚💚💚💚\nCopyright © Carlo 2023-now",
				scrollTop: 0,
			}
		},
		methods: {
			href(alias) {
				this.fui.href(`detail?alias=${alias}`)
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		}
	}
</script>

<style>
	.fui-banner__box {
		width: 100%;
		/* 		height: 420rpx; */
		background: #EDF9FF;
	}

	.fui-banner {
		width: 100%;
		/* height: 420rpx; */
		display: block;
	}
	
	.fui-page__desc {
		padding: 20rpx 32rpx 8rpx;
	}

	.fui-list__view {
		width: 100%;
		padding: 8rpx 32rpx 32rpx;
		box-sizing: border-box;
	}

	.fui-list__item {
		width: 100%;
		height: 112rpx;
	}

	.fui-item__title {
		padding-left: 24rpx;
		padding-right: 16rpx;
	}

	.fui-item__desc {
		color: #B2B2B2;
		font-size: 20rpx;
	}

	.fui-item__icon {
		width: 60rpx;
		height: 60rpx;
	}
</style>