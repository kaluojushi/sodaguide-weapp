<template>
	<view>
		<view class="fui-page__bd">
			<fui-section title="关于项目（小程序）" line-width="3px" size="48" margin-top="96"></fui-section>
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
	import web from '@/data/about/weapp.js';
	import $fui from '@/components/firstui/fui-clipboard';
	export default {
		data() {
			return {
				mds: web,

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

	.fui-paragraph {
		margin: 50rpx 25rpx;
	}
</style>