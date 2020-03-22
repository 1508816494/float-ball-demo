<template>
	<view>
		<text>{{text}}</text>
		<movable-area class="area">
			<movable-view class="view" direction="all"></movable-view>
		</movable-area>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text:''
			}
		},
		onLoad(e) {
			console.log(e)
			this.text = e.text
		},
		methods: {
			
		},
		
	}
</script>

<style>
	.area{
		position: absolute;
		width: 90vw;
		height: 90vh;
		left: 5vw;
	}
	.view{
		width: 50px;
		height: 50px;
		background-color: #333333;
	}
</style>
