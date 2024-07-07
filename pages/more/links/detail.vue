<template>
	<view class="fui-wrap">
		<view class="fui-banner__box">
			<image :src="bannerSrc" class="fui-banner" v-if="type!=='bilibili'" mode="widthFix"></image>
		</view>
		<view v-if="type!=='bilibili'" class="fui-page__bd">
			<fui-grid square>
				<fui-grid-item v-for="(item,index) in links" :key="index" :index="index" :highlight="item.title!==''"
					@click="open(item)">
					<view class="fui-grid__cell" v-if="item.title!==''">
						<view class="fui-icon__wrap">
							<image :src="item.icon" class="fui-icon" mode="widthFix"></image>
						</view>
						<view class="fui-title">{{item.title}}</view>
					</view>
				</fui-grid-item>
			</fui-grid>
		</view>

		<view v-else class="fui-page__bd">
			<view class="fui-bilibili__part" v-for="sec in ['me','must','music','opinion','inst']" :key="sec">
				<fui-section class="fui-bilibili__section" :title="bilibiliMap[sec]" isLine line-width="8rpx" size="35"></fui-section>
				<fui-grid square>
					<fui-grid-item v-for="(item,index) in links[sec]" :key="index" :index="index"
						:highlight="item.title!==''" @click="open(item)">
						<view class="fui-grid__cell" v-if="item.title!==''">
							<view class="fui-icon__wrap">
								<image :src="item.icon" class="fui-icon" mode="widthFix"></image>
							</view>
							<view class="fui-title">{{item.title}}</view>
						</view>
					</fui-grid-item>
				</fui-grid>
			</view>
		</view>

		<fui-dialog :show="dlVisible" :title="dlTitle" :content="dlContent" maskClosable :buttons="dlButtons"
			@click="onDlClick" @close="onDlClose"></fui-dialog>

		<fui-footer :navigate="sgFooterNavigate" :text="sgFooterText"></fui-footer>
		<fui-backtop :scrollTop="scrollTop" name="top"></fui-backtop>
	</view>
</template>

<script>
	import links from "@/data/links.js";
	import $fui from '@/components/firstui/fui-clipboard';
	export default {
		data() {
			return {
				type: "",
				typeMap: {
					official: "苏打绿官方",
					fans: "粉丝制作",
					bilibili: "b 站 up 主"
				},
				bilibiliMap: {
					me: "卡洛的 b 站账号",
					must: "入站必看",
					music: "视频及音乐搬运／二创",
					opinion: "解读与创作",
					inst: "翻弹／翻唱"
				},
				bannerSrc: "",
				links: [],
				itemTmp: {},

				dlVisible: false,
				dlTitle: "",
				dlContent: "",
				dlButtons: [{
					text: '取消',
					color: '#BBB'
				}, {
					text: '访问',
					color: '#3EAF7C'
				}],

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
			open(item) {
				this.dlVisible = true;
				this.dlTitle = item.title;
				this.dlContent = item.desc;
				this.itemTmp = item;
			},
			onDlClick(btns) {
				if (btns.index === 0) {
					this.onDlClose();
				} else {
					if (this.itemTmp.linkType === "weapp") {
						const appId = this.itemTmp.link[0];
						const path = this.itemTmp.link[1];
						wx.navigateToMiniProgram({
							appId: appId,
							path: path,
						});
					} else {
						const url = this.itemTmp.link;
						$fui.getClipboardData(url, res => {
							this.fui.toast(`网址复制成功！`);
						});
					}
				}
			},
			onDlClose() {
				this.dlVisible = false;
			}
		},
		onLoad(e) {
			this.type = e.alias || "official";
			uni.setNavigationBarTitle({
				title: this.typeMap[this.type]
			});
			if (this.type !== 'bilibili') {
				this.bannerSrc =
					`https://picbed-1300227887.cos.ap-shanghai.myqcloud.com/sodaguide-weapp/links/${this.type}-banner.jpg`
			}
			this.links = links[this.type];
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		}
	}
</script>

<style>
	page {
		background-color: #FFFFFF;
	}

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

	.fui-grid__cell {
		/* 		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		flex: 1; */
		font-size: 28rpx;
		font-weight: 400;
	}
	
	.fui-bilibili__part {
		margin-top: 50rpx;
	}
	
	.fui-bilibili__section {
		margin-bottom: 20rpx !important;
	}

	.fui-icon__wrap {
		/* width: 100%; */
		/* height: 100%; */
		overflow: hidden;
		margin: 20rpx 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.fui-icon {
		width: 120rpx;
		height: 120rpx;
		border-radius: 24rpx;
	}

	.fui-title {
		height: 30%;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>