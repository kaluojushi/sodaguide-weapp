<template>
	<view>
		<view class="fui-working">
			<fui-result :type="type" :title="title" :descr="descr" background="#BBB">
				<fui-button width="400rpx" height="84rpx" text="返回" type="gray" color="#999" bold @click="back"></fui-button>
			</fui-result>
		</view>

		<fui-footer :navigate="sgFooterNavigate" :text="sgFooterText"></fui-footer>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 'waiting',
				title: '施工中……',
				descr: '该页面仍在施工中，你可以先浏览其他内容',

				sgFooterNavigate: [{
					text: "回到首页",
					openType: "switchTab",
					url: '/pages/index/index'
				}],
				sgFooterText: "Together With Sodagreen 💚💚💚💚💚💚\nCopyright © Carlo 2023-now"
			}
		},
		methods: {
			back() {
				uni.navigateBack();
			}
		}
	}
</script>

<style>
	.fui-working {
		margin-bottom: 50rpx;
	}
</style>