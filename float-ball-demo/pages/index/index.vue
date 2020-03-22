<template>
	<view class="content">
		<cu-float-ball class='float-ball' :ball="ball" showCover="../../static/logo.png" :area="area" :items="items" @itemsTap="itemTap"></cu-float-ball>
		<image class="logo" src="/static/logo.png" @click="mainClick"></image>
		<view class="text-area" @click="mainClick">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				proximity:'null',
				title: 'Hello',
				area: {
					height: '500px',
					top: '20px',
					left:'20px',
					width: '300px'
				},
				ball:{
					width:'50px',
					height: '50px'
				},
				items:[
					{text:'item1',iconClass:'icon-yinyue',fontSize: '25px',backgroundColor:'orange'},
					{text:'item2',iconClass:'icon-shangyishou2',fontSize: '25px'},
					{text:'item3',iconClass:'icon-zanting2',fontSize: '58px'},
					{text:'item4',iconClass:'icon-xiayishou2'},
					{fontSize: '25px',text:'4'},
				],
				cover: '../../static/logo.png'
			}
		},
		onLoad() {
			// #ifdef APP-PLUS
			plus.proximity.getCurrentProximity(function(p){
				console.log(p)
			})
			plus.proximity.watchProximity(this.changePro)
			// #endif
		},
		
		methods: {
			itemTap(e){
				uni.showToast({
					title: 'item-' + e.itemIndex + '被点击了',
					icon: 'success'
				})
				if (e.itemIndex == 2){
					if (this.items[2].iconClass == 'icon-bofang2'){
						this.items[2].iconClass = 'icon-zanting2'
					}
					else{
						this.items[2].iconClass = 'icon-bofang2'
					}
				}
			},
			changePro(v){
				this.proximity = v
			},
			mainClick() {
				console.log('content is Clicked')
				uni.showToast({
					title: 'content is Clicked',
					icon:'none'
				})
			}
		}
	}
</script>

<style>
	@import '../../common/micon.css';
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		padding: 10px;
		color: #8f8f94;
	}
	.float-ball {
		border: #333333 solid 2px;
	}
</style>
