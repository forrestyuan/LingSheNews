$(window).load(function(){
	//关闭遮罩层
	$('#closeLog').click(function(){
		$('.login_wrap').animate({width:'0px',height:'auto'});
		$('.zhezhaoceng').hide("fast");
		$('#user_register').hide();
		$('#user_login').show();
	});
	//显示遮罩层
	$('#SLZ').click(function(){
		$('.zhezhaoceng').show("slow");
		$('.login_wrap #user_login').hide("slow");
		$('.login_wrap').animate({width:'400px',height:'auto'});
		$('.login_wrap #user_login').show("slow");
		$('#user_login #username').focus();
	});
	//登陆区到达注册区
	$('#GTR').click(function(){
		$('#user_login').hide("slow");
		$('#user_register').show("slow");
		$('#user_register #username').focus();
	});
	//注册区返回登陆区
	$('#BTL').click(function(){
		$('#user_register').hide("slow");
		$('#user_login').show("slow");
		$('#user_login #username').focus();
	});	
	
	//切换为卡片
	$('#styleToggle1').click(function(){
		$('#sec section').removeClass("content2").addClass("content").removeAttr("style");
		waterfall('sec','content');
		$('#styleToggle1').css("background-color","deepskyblue");
		$('#styleToggle2').css("background-color","#9D9D9D");
	});
	//切换为列表
	$('#styleToggle2').click(function(){
		$('#sec section').removeClass("content").addClass("content2").removeAttr("style");
		waterfall('sec','content2');
		$('#styleToggle2').css("background-color","deepskyblue");
		$('#styleToggle1').css("background-color","#9D9D9D");
	});	
	//显示二级分类列表
	$('#nav_list li:nth-child(n+2)').mouseover(function(){
		var that=$(this);			//得到当前鼠标悬停的标签
		var reg=/cont\d*/;
		var issub=reg.test(that.attr('id'));
		if(issub){
			var id="ul#"+that.attr('id');	//得到id属性
			$('<span class="point"></span>').appendTo($(this));//添加三角标号
			$('.subType').show();								//显示二级分类容器
			$(id).show();										//显示二级分类内容
			$('.subType').mouseover(function(){					//鼠标悬停在二级分类容器中
				$('#nav_list li:nth-child(n+2)').children('.point').remove();	//删除所有三角标号
				$('.subType ul').hide();										//隐藏所有二级分类
				$('<span class="point"></span>').appendTo(that);				//重新添加三角标号
				that.children('.point').show();									//显示三角标号（默认是隐藏）
				$(id).show();													//显示对应id的二级分类内容
				$('.subType').show();											//显示二级分类容器
			}).mouseout(function(){								//鼠标离开在二级分类容器
				that.children('.point').remove();				//删除对应的三角标号
				$(id).hide();									//隐藏二级分类内容
				$('.subType').hide();							//隐藏二级分类容器
			});
		}
		}).mouseout(function(){									//鼠标离开标签
			var id2="ul#"+$(this).attr('id');					//得到id属性
			$(this).children('.point').remove();			    //删除所有三角标号
			$(id2).hide();										//隐藏二级分内容
			$('.subType').hide();								//隐藏二级分类内容的容器
		});
		
	/*显示回到顶部&&固定导航的事件轮询器*/
	setInterval(aboutScroll,500);
});


/*与滚动条相关的动作函数*/
function aboutScroll(){
	var nav=document.getElementsByClassName('header')[0]; //拿到导航栏
	var totopshow=document.getElementById("gotop");		//拿到回到顶部的飞机
	var offsetHeight=$(document).scrollTop(); //document.body.scrollTop;当前滚动条距离顶部距离
	//大于75px时
	if(offsetHeight>=75){	
		nav.style.position="fixed";
		nav.style.zIndex="1000";
		nav.style.width="100%";
	}else{
		nav.style.position="inherit";
		}
	//大于400px时
	if(offsetHeight>400){
		totopshow.style.display="block";
		totopshow.style.position="fixed";
	}else{
		$('#gotop').fadeOut();
		totopshow.style.transition="ease-in-out all 1s";
		totopshow.style.transform="translateY(140px)";
	}
		
}

/*slow up to top*/
function flytotop(){
		var totopshow=document.getElementById("gotop");
	totopshow.style.transition="ease-in-out all 2s";
	totopshow.style.transform="translateY(-300px)";
	$('html,body').animate({scrollTop: '0px'},2000);return false;
}

