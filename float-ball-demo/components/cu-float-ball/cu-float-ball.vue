<template>
	<view class="cu-float-main":style="{width:mainW,height:mainH,top:mainT,left:mainL}">
		<movable-area class="cu-float-movarea" :style="{'pointer-events':pointerEvents,width:areaW,height:mainH,left:areaL}"  @tap="cuFloatClick" >
			<movable-view class="cu-float-ball" animation="false" :style="{opacity:ballOpacity,width:ballW,height:ballH,'background-color':ballBGC,'border-radius':ballBR}"  :damping="damping" :x="cuBallX" :y="cuBallY" :direction="moveDirection" @tap.stop="ballClick" @touchstart="ballHideDelayClear" @touchcancel="ballHideDelay" @change="ballChange" @touchend="ballHideDelay">
				<view >
					<image v-if="showCover" class="ball-cover" :style="{width:ballW,height:ballH,'background-color':ballBGC,'border-radius':ballBR}" :src="showCover"></image>
					<view v-else class="ball-core" :style="{width:ballW,height:ballH,'background-color':ballBGC,'border-radius':ballBR}">
					  <view></view>
					  <view></view>
					</view>
					<view v-if="ballShow" class="cu-float-ball-items" :style="{top:ballItemsT,left:ballItemsL}">
						<view v-for="(item, index) in items" :key="index" :style="{left: ballItemL(index * 180 / (items.length - 1)),top:ballItemT(index * 180 / (items.length - 1)),width:ballW,height:ballH,'background-color':item.backgroundColor || ballBGC ,'border-radius':item.borderRadius || ballBR}">
							<view :class="item.iconClass" :style="{fontSize: item.fontSize || ballH}" :data-index="index" @tap.stop="itemClick">{{ item.iconClass ? '' : item.text || ''}}</view>
						</view>
					</view>
				</view>
			</movable-view>
		</movable-area>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				pointerEvents: 'none',
				moveDirection: 'all',
				cuBallX: 0,
				cuBallY: 0,
				old: {
					cuBallX: 0,
					cuBallY: 0,
				},
				scale: 1,
				ballShow: false,
				ballPos: 'left',
				ballHideProcess: null,
				ballTouch:false,
				ballView: {
					width: 0,
					height:0,
				},
				cuBall:{
					width:'50px',
					height:'50px',
					top:'0',
					left:'-25px',
					color:'#000000',
					backgroundColor: 'grey',//'inherit',
					borderRadius:'25px',
				},
				cuArea:{
					width:'100%',
					height:'100%',
					left:0,
					top:0,
					right: 'auto',
					bottom: 'auto'
				},
				screen:{
					width:0,
					height:0,
				},
				window: {
					width:0,
					height:0,
					top:0,
					bottom:0
				},
			}
		},
		props: {
			ballOpacity:{
				default: 0.9,
				type:[Number,String]
			},
			items:{
				default: function(){return Array},
				type: Array
			},
			damping: {
				default: 30,
				type: [String, Number]
			},
			showCover: {
				default: '',
				type: String
			},
			hideCover: {
				default: '',
				type: String
			},
			area: {
				default:function (){ return {} },
				type: Object
				
			},
			ball: {
				default:function (){ return {} },
				type: Object
			},
		},
		beforeMount() {
			const info = uni.getSystemInfoSync()
			this.scale = 750 / info.windowWidth;
			this.screen.height = info.windowHeight;
			this.screen.width = info.windowWidth;
			this.window.top = info.windowTop
			this.cuArea = Object.assign(this.cuArea,this.area)
			this.cuBall = Object.assign(this.cuBall,this.ball)
		},
		mounted: function() {
			this.$nextTick(function(){
				this.cuBallX = this.sizeDeal(this.cuBall.left)[0]
				this.cuBallY = this.sizeDeal(this.cuBall.top)[0]
				const query = uni.createSelectorQuery().in(this)
				query.select(".cu-float-main").boundingClientRect(data => {
					this.cuArea.width = data.width
					this.cuArea.height = data.height
					this.cuArea.top = data.top
					this.cuArea.bottom = data.bottom
					this.cuArea.left = data.left
					this.cuArea.right = data.right
				}).exec()
				query.select(".cu-float-ball").boundingClientRect(data => {
					this.cuBall.width = data.width
					this.cuBall.height = data.height
					this.cuBall.top = data.top
					this.cuBall.bottom = data.bottom
					this.cuBall.left = data.left
					this.cuBall.right = data.right
					// 初始化this.ballView
					this.ballItemL()
					this.ballItemT()
				}).exec()
			})
		},
		computed:{
			ballItemsT() {
				let l = this.sizeDeal(this.cuBall.height)
				return l[0]/2 + l[1]
			},
			ballItemsL (){
				let l = this.sizeDeal(this.cuBall.width)
				return l[0]/2 + l[1]
			},
			ballL() {
				let bl = this.sizeDeal(this.cuBall.left)
				return bl[2]
			},
			ballT() {
				let bb = this.sizeDeal(this.cuBall.top)
				return bb[2]
			},
			ballW(){
				let bw = this.sizeDeal(this.cuBall.width)
				return bw[2]
			},
			ballH() {
				let bh = this.sizeDeal(this.cuBall.height)
				return bh[2]
			},
			ballBGC() {
				return this.cuBall.backgroundColor
			},
			ballC() {
				return this.cuBall.color
			},
			ballBR() {
				let br = this.sizeDeal(this.cuBall.borderRadius)
				return br[2]
			},
			areaW() {
				let w = this.sizeDeal(this.cuArea.width)
				let bw = this.sizeDeal(this.cuBall.width)
				return 'calc( ' + w[2] + ' + ' + bw[2] + ' )'
			},
			areaL(){
				let l = this.sizeDeal(this.cuBall.width)
				return -l[0]/2 + l[1]
			},
			mainH() {
				let h = this.sizeDeal(this.cuArea.height)
				return h[2]
			},
			mainW() {
				let w = this.sizeDeal(this.cuArea.width)
				return w[2]
			},
			mainL(){
				let l = this.sizeDeal(this.cuArea.left)
				return l[2]
			},
			mainT(){
				let t = this.sizeDeal(this.cuArea.top)
				return t[2]
			},
		},
		watch: {
			ball: function (v){
				this.cuBall = Object.assign(this.cuBall,v)
			},
			area: function (v){
				this.cuArea = Object.assign(this.cuArea, v)
			}
		},
		methods: {
			ballItemL(deg) {
				let w = this.sizeDeal(this.cuBall.width)
				let h = this.sizeDeal(this.cuBall.height)
				let l = w[0] > h[0] ? w[0] * 1.25 : h[0] + w[0] * 0.25
				let r
				if (this.items.length > 4){
					r = l * (this.items.length - 1) / Math.PI
				}
				else{
					r = 1.25 * w[0]
				}
				this.ballView.width = 2 * r
				let x = Math.sin(deg/180*Math.PI) * r
				if (this.ballPos == 'left'){
					return x - w[0]/2 + w[1]
				}
				else{
					return -x - w[0]/2 + w[1]
				}
			},
			ballItemT(deg) {
				let w = this.sizeDeal(this.cuBall.width)
				let h = this.sizeDeal(this.cuBall.height)
				let l = w[0] > h[0] ? w[0] + h[0] * 0.25 : h[0] * 1.25
				let r
				if (this.items.length > 4){
					r = l * (this.items.length - 1) / Math.PI
				}
				else{
					r = 1.25 * h[0]
				}
				this.ballView.height =  2 * r
				let x = Math.abs(Math.cos(deg/180*Math.PI) * r)
				if (deg > 90){
					return x - h[0]/2 + h[1]
				}
				else{
					return -(x + h[0]/2) + h[1]
				}
			},
			itemClick(e){
				this.$emit('itemsTap', {itemIndex: e.currentTarget.dataset.index})
			},
			cuFloatClick() {
				this.ballHide()
			},
			sizeDeal(size) {
				// 分离字体大小和单位,rpx 转 px
				let s = Number.isNaN(parseFloat(size)) ? 0 : parseFloat(size)
				let u = size.toString().replace(/[0-9]/g, '').replace('-','')
				if (u == 'rpx') {
					s /= this.scale
					u = 'px'
				} else if (u == '') {
					u = 'px'
				}else if (u == 'vw') {
					u = 'px'
					s = s / 100 * 750 / this.scale
				}
				return [s, u, s + u]
			},
			ballChange: function(e) {
				this.old.cuBallX = e.detail.x;
				this.old.cuBallY = e.detail.y;
			},
			ballHide(delay){
				// ball隐藏执行
				if ((!this.ballShow && delay) || !delay){
					this.pointerEvents = 'none'
					this.ballShow = false
					if (this.cuBallX <= this.cuArea.width/2){
						this.cuBallX = 0
					}else{
						this.cuBallX = this.cuArea.right;
					}
				}

			},
			ballHideDelayClear: function(){
				// ball隐藏清除
				if (this.ballHideProcess){
					clearTimeout(this.ballHideProcess)
				}
			},
			ballHideDelay: function(e){
				// ball隐藏触发
				let h = this.sizeDeal(this.cuBall.height)
				this.cuBallX = this.old.cuBallX;
				this.old.cuBallY = this.old.cuBallY < this.cuArea.height - h[0] ? this.old.cuBallY : this.old.cuBallY - 1
				this.old.cuBallY = this.old.cuBallY > 0 ? this.old.cuBallY : 1
				this.cuBallY = this.old.cuBallY 
				if (this.cuBallX <= this.cuArea.width/2){
					this.ballPos = 'left'
				}else{
					this.ballPos = 'right'
				}
				this.ballHideProcess = setTimeout(this.ballHide,3000,true);
			},
			ballClick(){
				this.ballShow = !this.ballShow
				let h = this.sizeDeal(this.cuBall.height)
				if (this.cuBallX >= this.cuBall.width/2 && this.cuBallX <= this.cuArea.width - this.cuBall.width/2 && this.cuBallY < this.cuArea.height - this.ballView.height/2 - h[0] && this.cuBallY > this.ballView.height/2){}
				else{
					if (this.cuBallX <= this.cuBall.width/2){
						this.cuBallX = this.cuBall.width
					}
					else if(this.cuBallX > this.cuArea.width - this.cuBall.width/2){
						this.cuBallX = this.cuArea.width - this.cuBall.width
					}
					if (this.cuBallY <= this.ballView.height/2){
						this.cuBallY = this.ballView.height/2 
					}
					else if(this.cuBallY > this.cuArea.height - this.ballView.height/2 - h[0]){
						this.cuBallY = this.cuArea.height - this.ballView.height/2 - h[0]
					} 
				}
				if (this.ballShow){
					this.pointerEvents = 'all'
				}
				else{
					this.pointerEvents = 'none'
					this.ballHide()
				}
				this.$emit('ballClick',{'status':this.ballShow ? 'show' : 'hide'})
			}
		}
	}
</script>

<style>
	@keyframes fadein{
		from{opacity: 0;}
		to{opacity: 1;}
	}
	@keyframes fadeout{
		from{opacity: 1;}
		to{opacity: 0.2;}
	}
	@keyframes rotate{
		from{transform: rotate(-90deg);}
		to{transform: rotate(0deg);}
	}
	.cu-float-main {
		position: absolute;
		pointer-events: none;
		z-index: 888;
		overflow: hidden;
	}
	.cu-float-movarea {
		overflow: hidden;
		height: 100%;
		pointer-events: all;
	}

	.cu-float-ball{
		display: inline-flex;
		align-items: center;
		pointer-events: all;
		z-index: 889;
		justify-content: space-around;
	}
	.ball-cover {
		position: absolute;
		top: 0;
		left: 0;
	}
	.ball-core{
		position: absolute;
		top: 0;
		left: 0;
		width: 50px;
		display: flex;
		align-items: center;
		justify-content: space-around;
		overflow: hidden;
	}
	.ball-core view{
		position: absolute;
		border-radius: 999px;
	}
	.ball-core view:first-child{
		width: 60%;
		height: 60%;
		border: rgba(255,255,255,0.6) solid 2px;
	}
	.cu-float-ball-items {
		position: absolute;
		animation-name: fadein;
		animation-timing-function: ease-in;
		animation-duration: 0.5s;
	}
	.cu-float-ball-items view {
		position: absolute;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		overflow: hidden;
		animation-name: rotate;
		animation-timing-function: ease-in;
		animation-duration: 0.5s;
	}
	.cu-float-ball-items view:active {
		opacity: 0.8;
	}
</style>
