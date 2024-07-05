<template>
	<view class="fui-wrap">
		<view class="fui-logo__box">
			<image :src="logoSrc" class="fui-logo" mode="widthFix"></image>
			<view class="fui-title">苏打盖 Sodaguide</view>
			<view class="fui-version">Version {{version}}</view>
		</view>

		<view class="fui-page__bd">
			<view class="fui-desc">
				<text class="fui-mr fui-bold">苏打盖 Sodaguide</text> 是一份有关 <text class="fui-bold">苏打绿 aka 鱼丁糸</text> 和
				<text class="fui-bold">吴青峰</text> 的追星百科，让打粉老师们更好地了解他们的历史、音乐和各种有趣的小故事。
			</view>
			<view class="fui-about-list">
				<fui-list-cell topBorder arrow @click="href('sodaguide')">
					关于苏打盖 Sodaguide
				</fui-list-cell>
				<fui-list-cell arrow @click="href('web')">
					关于项目（web）
				</fui-list-cell>
				<fui-list-cell arrow @click="href('weapp')">
					关于项目（小程序）
				</fui-list-cell>
				<fui-list-cell bottomLeft="0" arrow @click="href('author')">
					关于作者
				</fui-list-cell>
			</view>

			<fui-footer :navigate="sgFooterNavigate" :text="sgFooterText"></fui-footer>
			<fui-backtop :scrollTop="scrollTop" name="top"></fui-backtop>

		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import $fui from '@/components/firstui/fui-clipboard';
	export default {
		computed: mapState(['version']),
		data() {
			return {
				logoSrc: "https://picbed-1300227887.cos.ap-shanghai.myqcloud.com/sodaguide-weapp/logo.jpg",

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
			getLink(e) {
				// #ifdef MP-BAIDU
				if (this.status == 0) {
					this.fui.toast('暂不支持此功能~')
					return;
				}
				// #endif
				$fui.getClipboardData('https://github.com/FirstUI/FirstUI', res => {
					this.fui.toast('GitHub地址复制成功');
				}, e);
			},
			href(page) {
				this.fui.href(page)
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		}
	}
</script>

<style>
	.fui-logo__box {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		padding-top: 64rpx;
		padding-bottom: 64rpx;
	}

	.fui-logo {
		width: 200rpx;
		height: 200rpx;
		border-radius: 40rpx;
	}

	.fui-title {
		font-size: 36rpx;
		padding-top: 24rpx;
	}

	.fui-version {
		padding-top: 8rpx;
		font-size: 24rpx;
		font-weight: 400;
	}

	.fui-desc {
		font-size: 28rpx;
		line-height: 56rpx;
		padding: 0 65rpx;
		margin-bottom: 64rpx;
		box-sizing: border-box;
		font-weight: 400;
	}
	
	.fui-about-list {
		margin-bottom: 60rpx;
	}

	.fui-mr {
		margin-right: 8rpx;
		color: #3EAF7C;
	}

	.fui-bold {
		font-weight: bold;
	}
</style>