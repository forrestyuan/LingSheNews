$(window).load(function(){
		$('#load').click(function(){
			var attr=$('#sec section').attr("class");
			loadNews(attr)
		});
		$(window).scroll( function() { 
   			 //console.log("滚动条到顶部的垂直高度: "+$(document).scrollTop()); 
   	 		 //console.log("页面的文档高度 ："+$(document).height());
   			 //console.log('浏览器的高度：'+$(window).height());
    		var attr=$('#sec section').attr("class");
   		dynamicLoad(attr);
	}); 
});

/*
 * 原生js实现瀑布流
 */
window.onload=function(){
	waterfall('sec','content2');
}
/*
 *@参数：parent 父容器id; className:要查找的容器的类名
 *@功能：实现瀑布流
 *@返回： 无返回值
 * */
function waterfall(parent,className){
	var oParent=document.getElementById(parent); //获得父容器对象
	var oBoxs=getByClassName(oParent,className);//得到类名为className 的所有元素对象
	var hArr=new Array();						//存放高度
	var oBoxW=oBoxs[0].offsetWidth+8;				//数据块的宽度
	var cols=Math.floor(oParent.offsetWidth/oBoxW);//计算列数
	var maxHeight=getMaxHeight(className);		//计算所有数据块中高度值最大的
	var minHeight=getMinHeight(className);		//计算所有数据块中高度值最小的
	var rows=Math.floor(oBoxs.length/cols);		//计算行数
	if((oBoxs.length%cols)!=0){
		rows++;
	}
	if(className=="content2"){
		var oHeight=rows*maxHeight+rows*10;		//计算父容器应设的高度
		document.getElementById("sec").style.height=(oHeight)+"px";//设置父容器高度
		document.getElementById("wrap_all").style.height=(400+oHeight)+"px";//设置父容器高度
		//alert("rows="+rows+"maxHeight="+maxHeight+"wrap_all="+(oHeight+400)+"sec="+oHeight);
	}else{
		
		//var oHeight=((rows)*((maxHeight-minHeight)>minHeight?(maxHeight-minHeight):Math.floor(Math.sqrt(maxHeight*minHeight)))-(rows*5));		//计算父容器应设的高度
		var oHeight=rows*maxHeight;
		document.getElementById("sec").style.height=(oHeight)+"px";//设置父容器
		document.getElementById("wrap_all").style.height=(800+oHeight)+"px";//设置父容器高度
		//alert("rows="+rows+"maxHeight="+maxHeight+"wrap_all="+(oHeight+800)+"sec="+(oHeight));
	}
	
	
	
	//document.getElementById("sec").style.height=(oHeight+200)+"px";//设置父容器宽度
	var initH=new Array();//c存放最初每个数据块的高度
	for(var j=0;j<oBoxs.length;j++){
		initH[j]=oBoxs[j].offsetHeight;
	}
	for(var i=0;i<oBoxs.length;i++){	
		initH[i]+=10;
		if(i<cols){
			hArr.push(initH[i]);
		}else{
			var minH=Math.min.apply(null,hArr);
			var index=getIndex(minH,hArr);
			oBoxs[i].style.position="absolute";
			oBoxs[i].style.top=(5+minH)+"px";
			oBoxs[i].style.left=(10+(oBoxW*index))+"px";
			hArr[index]+=initH[i];//oBoxs[i].offsetHeight;
		}
	}
	rows=0;

}
/*
 *@参数： dest所要找的元素；arr：在哪个数组查找
 *@功能：得到minH的下标
 *@返回：所查找的元素下标
 * */
function getIndex(dest,arr){
	for(var i in arr){
		if(arr[i]==dest){
			return i;
		}
	}
}
/*
 *@参数： pt父元素；clsName 要查找的类名
 *@功能：得到某容器下的类名为 clsName的容器
 *@返回：所查找的元素数组
 */
function getByClassName(pt,clsN){
	var oElements=pt.getElementsByTagName('*');
	var boxs=new Array();
	for(var i=0;i<oElements.length;i++){
		if(oElements[i].className==clsN){
			boxs.push(oElements[i]);
		}
	}
	return boxs;
}
/*
 *@参数： cls要查找的类名
 *@功能：得到数据块的最大高度
 *@返回：所查高度
 * */
function getMaxHeight(cls){
	var boxs=document.getElementsByClassName(cls);
	var hArray=new Array();
	for(var i=0;i<boxs.length;i++){
		hArray.push(boxs[i].offsetHeight);
	}
	var maxH=Math.max.apply(null,hArray);
	return maxH;
}

/*
 *@参数： cls要查找的类名
 *@功能：得到数据块的最小高度
 *@返回：所查高度
 * */
function getMinHeight(cls){
	var boxs=document.getElementsByClassName(cls);
	var hArray=new Array();
	for(var i=0;i<boxs.length;i++){
		hArray.push(boxs[i].offsetHeight);
	}
	var minH=Math.min.apply(null,hArray);
	return minH
}


/*--------------------动态添加----------------*/
/*loade*/
//Childattr 为子元素的class值
var shortcut=new Array("十八届六中全会正在召开，继续聚焦全面从严治党重大问题。然而，有些人却对此不以为然，觉得这些都离自己太遥远，从严治党是党员干部的事，不关老百姓的事.",
				"十八届六中全会正在召开，继续聚焦全面从严治党重大问题。然而太遥远，从严治党是党员干部的事，不关老百姓的事。",
				"十八届六中全会正在召开，继续聚焦全面从严治党重大问题。然而太遥远，从严治党是党员干部的事，不关老百姓的事。十八届六中全会正在召开，继续聚焦全面从严治党重大问题。",
				"十八届六中全会正在召开，继续聚焦全面从严治党重大问题。然而太遥远，从严治党是党员干部的事，不关老百姓的事。","十八届六中全会太遥远，从严治党是党员干部的事，");

function loadNews(Childattr){
	var st="<section class='"+Childattr+"'><div class='img_wrap'><a href='#' target='_blank'><img src='img/imgTest/63.jpg' alt='flower' /></a></div>";
		st+="<div class='shortcut'><div><h4><a href='#' target='_blank'>从严治党跟老百姓没关系？请看看这些变化</a></h4>";
		st+="<p>"+shortcut[Math.floor(Math.random()*4)]+"</p>";
		st+="</div><div class='property'><a href='#' target='_blank'><i class='glyphicon glyphicon-tag'></i>中国政库</a><span><i class='glyphicon glyphicon-eye-open'></i>200</span>";
		st+="<span><i class='glyphicon glyphicon-comment'></i>128</span><span><i class='glyphicon glyphicon-edit'></i>2016-10-26</span>";
		st+="<div class='tag'>专题</div></div></div></section>";
		for(var j=0;j<18;j++){
			$(st).appendTo('#sec');
		}
		//for(var i=0;i<1;i++){
			waterfall('sec',Childattr);
		//}
	}


var totalheight = 0;     //定义一个总的高度变量
var loadTimes=0;
function dynamicLoad(childAttr)
{ 
	
	loadTimes++;
    totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());     //浏览器的高度加上滚动条的高度 
    if (($(document).height()-50) <= totalheight)     //当文档的高度小于或者等于总的高度的时候，开始动态加载数据
    { 
//      if(loadTimes==3){
//      	alert("已加载全部");
//      }else if(loadTimes>3){
//      	document.getElementById('load').innerHTML="已加载全部";
//      }else{
        	//加载数据
        	loadNews(childAttr);
        //}
        
    } 
} 