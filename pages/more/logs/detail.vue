<template>
	<view class="fui-wrap">
		<fui-list-cell bottom-right="32" :highlight="false">
			<text class="fui-title">V{{version}}（{{date}}）</text>
		</fui-list-cell>
		<view class="fui-content">
			<view class="fui-p" v-for="(item,index) in logList" :key="index">
				<text class="fui-sign" v-if="logList.length>1">-</text>
				<text>{{item}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import logs from "@/data/logs.js"
	export default {
		data() {
			return {
				version: '',
				date: '',
				logList: []
			}
		},
		methods: {

		},
		onLoad(e) {
			const log = logs[e.index];
			this.version = log.version;
			this.date = log.date; 
			this.logList = log.logList;
		}
	}
</script>

<style>
	page {
		font-weight: normal;
		background-color: #fff;
	}

	.fui-title {
		font-weight: 600;
	}

	.fui-content {
		width: 100%;
		padding: 32rpx;
		box-sizing: border-box;
		font-size: 28rpx;
	}

	.fui-p {
		width: 100%;
		padding-bottom: 32rpx;
		word-break: break-all;
		display: flex;
		line-height: 44rpx;
	}

	.fui-sign {
		padding-right: 8rpx;
	}
</style>