<template>
	<view>
		<view style="margin: 10rpx 20rpx">
			<fui-list bottomBorder title="社交网站">
				<fui-list-cell arrow @click="this.fui.href('social?name=sodagreen')">
					<view class="fui-align__center">
						<image class="fui-list__icon" src="/static/if/icon-sodagreen.jpg" mode="widthFix">
						</image>
						<text>苏打绿 aka 鱼丁糸</text>
					</view>
				</fui-list-cell>
				<fui-list-cell arrow @click="this.fui.href('social?name=wqf')">
					<view class="fui-align__center">
						<image class="fui-list__icon" src="/static/if/icon-wqf.jpg" mode="widthFix">
						</image>
						<text>吴青峰</text>
					</view>
				</fui-list-cell>
				<fui-list-cell arrow @click="this.fui.href('social?name=esnyk')">
					<view class="fui-align__center">
						<image class="fui-list__icon" src="/static/if/icon-esnyk.jpg" mode="widthFix">
						</image>
						<text>苏打绿二十年一刻巡回演唱会</text>
					</view>
				</fui-list-cell>
			</fui-list>
		</view>
		
		<view style="margin: 10rpx 20rpx">
			<fui-list bottomBorder title="关于">
				<fui-list-cell arrow @click="this.fui.href('about/about')">
					<view class="fui-align__center">
						<image class="fui-list__icon" src="/static/if/about.png" mode="widthFix">
						</image>
						<text>关于小程序</text>
					</view>
				</fui-list-cell>
				<fui-list-cell arrow @click="this.fui.href('about/about')">
					<view class="fui-align__center">
						<image class="fui-list__icon" src="/static/if/history.png" mode="widthFix">
						</image>
						<text>更新日志</text>
					</view>
				</fui-list-cell>
				<fui-list-cell arrow @click="this.fui.href('about/about')">
					<view class="fui-align__center">
						<image class="fui-list__icon" src="/static/if/contribute.png" mode="widthFix">
						</image>
						<text>贡献指南</text>
					</view>
				</fui-list-cell>
				<fui-list-cell arrow @click="this.fui.href('about/about')">
					<view class="fui-align__center">
						<image class="fui-list__icon" src="/static/if/links.png" mode="widthFix">
						</image>
						<text>推荐链接</text>
					</view>
				</fui-list-cell>
				<fui-list-cell arrow @click="this.fui.href('about/about')">
					<view class="fui-align__center">
						<image class="fui-list__icon" src="/static/if/setting.png" mode="widthFix">
						</image>
						<text>小程序设置</text>
					</view>
				</fui-list-cell>
			</fui-list>
		</view>

		<fui-footer :navigate="sgFooterNavigate" :text="sgFooterText"></fui-footer>
		<fui-backtop :scrollTop="scrollTop" name="top"></fui-backtop>
	</view>
</template>

<script>
	export default {
		data() {
			return {


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

		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		}
	}
</script>

<style>
	.fui-list__icon {
		width: 60rpx;
		height: 60rpx;
		margin-right: 24rpx;
	}
</style>