<template>
	<view>
		<view class="fui-page__bd">
			<fui-section title="关于作者" line-width="3px" size="48" margin-top="96"></fui-section>
			
			<view class="fui-avatar__box">
				<image :src="avatarSrc" class="fui-avatar" mode="widthFix"></image>
				<view class="fui-title">卡洛 Carlo</view>
			</view>
			
			<fui-parse-group v-for="md in mds" @atap="getLink">
				<view class="fui-paragraph">
					<fui-parse :nodes="md" language="md"></fui-parse>
				</view>
			</fui-parse-group>
		</view>

		<fui-footer :navigate="sgFooterNavigate" :text="sgFooterText"></fui-footer>
		<fui-backtop :scrollTop="scrollTop" name="top"></fui-backtop>
	</view>
</template>

<script>
	import author from '@/data/about/author.js';
	import $fui from '@/components/firstui/fui-clipboard';
	export default {
		data() {
			return {
				avatarSrc: "https://picbed-1300227887.cos.ap-shanghai.myqcloud.com/sodaguide-weapp/avatar.jpg",
				mds: author,

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
			getLink(url, e) {
				$fui.getClipboardData(url, res => {
					this.fui.toast(`${url} 复制成功`);
				}, e);
			},
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		}
	}
</script>

<style>
	.fui-page__bd {
		width: 100%;
		padding: 20rpx 32rpx 96rpx;
		box-sizing: border-box;
	}
	
	.fui-avatar__box {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		padding-top: 64rpx;
	}
	
	.fui-avatar {
		width: 200rpx;
		height: 200rpx;
		border-radius: 40rpx;
	}
	
	.fui-title {
		font-size: 36rpx;
		padding-top: 24rpx;
	}

	.fui-paragraph {
		margin: 50rpx 25rpx;
	}
</style>