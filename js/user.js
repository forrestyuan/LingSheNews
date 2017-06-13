$(window).load(function() {
	//显示我的动态
	$('#1').click(function() {
		$('#activity').show("slow");
		$('#restore').hide("slow");
		$('#message').hide("slow");
		$('#setting').hide("slow");
	});
	//显示我的收藏
	$('#2').click(function() {
		$('#activity').hide("slow");
		$('#restore').show("slow");
		$('#message').hide("slow");
		$('#setting').hide("slow");;
	});
	//显示我的消息
	$('#3').click(function() {
		$('#activity').hide("slow");
		$('#restore').hide("slow");
		$('#message').show("slow");
		$('#setting').hide("slow");
	});
	//显示我的设置
	$('#4').click(function() {
		$('#activity').hide("slow");
		$('#restore').hide("slow");
		$('#message').hide("slow");
		$('#setting').show("slow");
	});
	//在消息栏下重置发送框内容
	$('#btnsend,#reset').click(function() {
		$('#saytext').val("");
	});
	//在消息栏下显示小秘书消息
	$('#secretary').click(function() {
		$(this).css({
			"background-color": "black",
			"color": "deepskyblue"
		});
		$('#PM').css({
			"background-color": "white",
			"color": "black"
		});
		$('#world').css({
			"background-color": "white",
			"color": "black"
		});
		$('#secretaryBox').show("slow");
		$('#PMBox').hide("slow");
		$('#MSGBOX').hide("slow");
	});
	//在消息栏下显示程序员消息
	$('#PM').click(function() {
		$(this).css({
			"background-color": "black",
			"color": "deepskyblue"
		});
		$('#secretary').css({
			"background-color": "white",
			"color": "black"
		});
		$('#world').css({
			"background-color": "white",
			"color": "black"
		});
		$('#secretaryBox').hide("slow");
		$('#PMBox').show("slow");
		$('#MSGBOX').hide("slow");
	});
	//在消息栏下显示全服交流
	$('#world').click(function() {
		$(this).css({
			"background-color": "black",
			"color": "deepskyblue"
		});
		$('#PM').css({
			"background-color": "white",
			"color": "black"
		});
		$('#secretary').css({
			"background-color": "white",
			"color": "black"
		});
		$('#secretaryBox').hide("slow");
		$('#PMBox').hide("slow");
		$('#MSGBOX').show("slow");
	});
	/*websocket*/
	initWebSocket();
	/*走马灯*/
	runColor();
});

$(function() {
	/*全服*/
	$('.worldEmotion').qqFace({
		id: 'facebox', //表情盒子的ID
		assign: 'saytext', //给那个控件赋值
		path: 'img/face/' //表情存放的路径
	});
	var contentH = 0;
	$(".btsend").click(function() {
		var str = $("#saytext").val();
		var transformStr = replace_em(str);
		$("#showContents").append("<div><div class='theytalk'><span class='mesay'>" + transformStr + "</span><img class='me' src='img/bg.jpg'><div/><div>");
		$("#showContents").append("<div><div class='talk'><span class='mesay'>" + transformStr + "</span><img class='me' src='img/bg.jpg'><div/><div>");
		var chatwindow = $('#showContents');
		var windowH = chatwindow.height();
		var contentH = chatwindow[0].scrollHeight;
		var needScrollH = contentH - windowH;
		chatwindow.scrollTop(needScrollH);
	});
	/*小秘书*/
	$('.secretEmotion').qqFace({
		id: 'facebox', //表情盒子的ID
		assign: 'secret', //给那个控件赋值
		path: 'img/face/' //表情存放的路径
	});
	$('#secretSend').click(function(){
		var str = $("#secret").val();
		var transformStr = replace_em(str);
		$("#secretaryBox").append("<div align='right' class='lineCommon'>"
									+"<span>"+transformStr+"</span>"
									+"<span><img class='img' src='img/head.jpg'/></span>"
									+"<div><span>来自：forrestYuan</span><span>2016/10/20 17:20</span></div>"
									+"</div>");
	})
	/*程序员*/
	$('.pmEmotion').qqFace({
		id: 'facebox', //表情盒子的ID
		assign: 'programer', //给那个控件赋值
		path: 'img/face/' //表情存放的路径
	});
	$('#pmSend').click(function(){
		var str = $("#programer").val();
		var transformStr = replace_em(str);
		$("#PMBox").append("<div align='right' class='lineCommon'>"
							+"<span>"+transformStr+"</span>"
							+"<span><img class='img' src='img/head.jpg'/></span>"
							+"<div><span>来自：forrestYuan</span><span>2016/10/20 17:20</span></div>"
							+"</div>");
	})
});
//查看结果
function replace_em(str) {
	str = str.replace(/\</g, '&lt;');
	str = str.replace(/\>/g, '&gt;');
	str = str.replace(/\n/g, '<br/>');
	str = str.replace(/\[em_([0-9]*)\]/g, '<img src="img/face/$1.gif" border="0" />');
	return str;
}
/*改变颜色走马灯函数*/
function runColor(){
	var colorString="#FFFFFF#DDDDDD#AAAAAA#888888#666666#444444#000000#FFB7DD#FF88C2#FF44AA#FF0088#C10066#A20055#8C0044#FFCCCC#FF8888#FF3333#FF0000#CC0000#AA0000#880000#FFC8B4#FFA488#FF7744#FF5511#E63F00#C63300#A42D00#FFDDAA#FFBB66#FFAA33#FF8800#EE7700#CC6600#BB5500#FFEE99#FFDD55#FFCC22#FFBB00#DDAA00#AA7700#886600#FFFFBB#FFFF77#FFFF33#FFFF00#EEEE00#BBBB00#888800#EEFFBB#DDFF77#CCFF33#BBFF00#99DD00#88AA00#668800#CCFF99#BBFF66#99FF33#77FF00#66DD00#55AA00#227700#99FF99#66FF66#33FF33#00FF00#00DD00#00AA00#008800#BBFFEE#77FFCC#33FFAA#00FF99#00DD77#00AA55#008844#AAFFEE#77FFEE#33FFDD#00FFCC#00DDAA#00AA88#008866#99FFFF#66FFFF#33FFFF#00FFFF#00DDDD#00AAAA#008888#CCEEFF#77DDFF#33CCFF#00BBFF#009FCC#0088A8#007799#CCDDFF#99BBFF#5599FF#0066FF#0044BB#003C9D#003377#CCCCFF#9999FF#5555FF#0000FF#0000CC#0000AA#000088#CCBBFF#9F88FF#7744FF#5500FF#4400CC#2200AA#220088#D1BBFF#B088FF#9955FF#7700FF#5500DD#4400B3#3A0088#E8CCFF#D28EFF#B94FFF#9900FF#7700BB#66009D#550088#F0BBFF#E38EFF#E93EFF#CC00FF#A500CC#7A0099#660077#FFB3FF#FF77FF#FF3EFF#FF00FF#CC00CC#990099#770077"
	var colorarr=colorString.split("#");
	setInterval(function(){
		var target=document.getElementById("wechat-appel");
			target.style.color="#"+colorarr[Math.floor(Math.random()*148)];
	},1000);
}
/*websockte交流*/
function getWebSocketObject(){
	if(!window.WebSocket){
		var ws=null;
		alert("浏览器不支持WebSocket请升级或更换最新版浏览器！！error has been throwed!")
	}else{
		//ws =new WebSocket("ws://localhost:8080/chatws/chat");		
	}
	return ws;
}
var count=0;
function initWebSocket(){
	var myws=getWebSocketObject();
	if(myws!=null){
		/*监听onopen事件*/
		myws.onopen=function(){
			document.getElementById('showContents').innerHTML="与服务器连接成功！！请畅所欲言吧！";
			var p=document.createElement('p');
				p.setAttribute("id",(++count));
				p.style.position="absolute";
				p.innerHTML="用户"+count;
				console.log(count);
			document.getElementById('list').appendChild(p)
		}
		/*监听onmessage事件*/
		myws.onmessage=function(event){
			document.getElementById('showContents').innerHTML+="<br/>"+getDate()+"<br/>   "+event.data+"<br/>"
		}
		/*监听onerror事件*/
		myws.onerror=function(){
			document.getElementById('showContents').innerHTML="出现错误与服务器连接断开";
		}
		/*监听onclose事件*/
		myws.onclose=function(){
			myws.close();
			document.getElementById('showContents').innerHTML="与服务器连接断开";
		}
		 //发送消息
      document.getElementById('btnsend').onclick=function(){
          var message = document.getElementById('inputMessage').value;
          myws.send(message);
      }
      
      function getDate(){
      	var date=new Date();
      	var year=date.getFullYear();
      	var month=date.getMonth();
      	var day=date.getDay();
      	var hour=date.getHours();
      	var min=date.getMinutes();
      	var sec=date.getSeconds();
      	return year+"/"+month+"/"+day+"    "+hour+":"+min+":"+sec;
      }
      
	}else{
		console.log("连接服务器失败");
	}
	
}
