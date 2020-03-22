**uni-app  悬浮球**
![image](https://github.com/18212297551/float-ball-demo/blob/master/demo.gif)
+ 属性

    |参数|默认值|类型|说明|
    |:---|:---|:---|:---|
    |ballOpacity|0.9|Number|悬浮球不透明度,范围（完全透明）0->1（完全不透明）|
    |items|[]|Array|悬浮球子选项|[{borderRadius: 'item边框半径，默认与ball相同', backgroundColor: 'item背景颜色，默认与ball相同',iconClass:'iconfont图标',fontSize:'字体或者图标大小',}]
	|ball|{width:'50px',height:'50px',top:'0',left:'-25px',color:'#000000',backgroundColor: 'grey',borderRadius:'25px'}|Object|悬浮球属性设置|
	|area|{width:'100%',height:'100%',left:0,top:0}|Object|悬浮球活动区域设置|
    |damping|30|Number|阻尼系数，uni-app官方movable-view组件属性|
    |showCover|''|String|ball完整显示时封面的url|
    |hideCover|''|String|ball半隐藏时封面url|

+ 事件
	
    |名称|参数|说明|
    |:---|:---|:---|
	|itemsTap|itemIndex|返回当前被点击的item的序号，序号与属性中的items一致，第一项为0|
	|ballClick|status|悬浮球被点击触发,返回此时悬浮球的状态,show或者hide|
	