<template>
	<view class="fui-wrap fui-page__bd">
		<fui-list-cell bottom-right="32" arrow v-for="(item,index) in logs" :key="index"
			@click="detail(index)">
			<view>
				<view class="fui-title">苏打盖 Sodaguide 小程序 V{{item.version}} 主要更新</view>
				<view class="fui-date">{{item.date}}</view>
			</view>
		</fui-list-cell>
	</view>
</template>

<script>
	import logs from "@/data/logs.js"
	export default {
		data() {
			return {
				logs: logs
			}
		},
		methods: {
			detail(index) {
				const item = this.logs[index];
				this.fui.href(`detail?index=${index}`);
			}
		}
	}
</script>

<style>
	page {
		background-color: #fff;
		font-weight: normal;
		padding-bottom: 64rpx;
	}

	.fui-wrap {
		padding-top: 32rpx;
	}

	.fui-title {
		font-size: 28rpx;
		font-weight: 500;
	}

	.fui-date {
		font-size: 24rpx;
		color: #B2B2B2;
		padding-top: 8rpx;
	}
</style>