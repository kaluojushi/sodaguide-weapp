<template>
	<view>
		<fui-footer isFixed :navigate="navigate" :text="text"></fui-footer>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navigate: [{
					text: "回到首页",
					openType: "switchTab"
				}],
				text: "Copyright © Carlo 2023-now"
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
