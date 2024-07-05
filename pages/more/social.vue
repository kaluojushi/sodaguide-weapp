<template>
	<view>
		<view class="fui-wrap">
			<view class="fui-banner__box">
				<image :src="bannerSrc" class="fui-banner" mode="widthFix"></image>
			</view>
			<view class="fui-list__view">
				<fui-list-cell arrow :padding="[0,'32rpx']" :bottomBorder="false" radius="16rpx" marginTop="24"
					v-for="(item,index) in links" :key="index" :index="index" @click="getLink">
					<view class="fui-list__item fui-align__center">
						<image class="fui-item__icon" :src="`/static/if/${item.icon}.png`">
						</image>
						<view class="fui-item__title">
							{{item.text}}
							<view class="fui-item__desc">{{show(item.link, 45)}}</view>
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
	import social from "@/data/social.js";
	import $fui from '@/components/firstui/fui-clipboard';
	export default {
		data() {
			return {
				name: "",
				links: [],
				map: {
					sodagreen: "苏打绿 aka 鱼丁糸",
					wqf: "吴青峰",
					esnyk: "苏打绿二十年一刻巡回演唱会"
				},
				bannerSrc: "",

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
			show(link, len) {
				if (link.length >= len) {
					link = link.slice(0, len) + "……";
				}
				return link;
			},
			getLink(e) {
				const item = this.links[e.index];
				$fui.getClipboardData(item.link, res => {
					this.fui.toast(`${item.text} 复制成功`);
				}, e);
			}
		},
		onLoad(obj) {
			this.name = obj.name;
			this.links = social[this.name];
			uni.setNavigationBarTitle({
				title: this.map[this.name]
			});
			this.bannerSrc = `https://picbed-1300227887.cos.ap-shanghai.myqcloud.com/sodaguide-weapp/social/social-${this.name}.jpg`
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