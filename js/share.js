function showShare(contId,title,picUrl,portalUrl){
  title = "'"+title+"'";
  picUrl = "'"+picUrl+"'";
  portalUrl = "'"+portalUrl+"'";
  $("#cont"+contId).css({ background: "#f1f1f1" });
  $("#index"+contId).append('<div class="share_live24" id="share"><a href="javascript:showTorenren('+contId+','+title+','+picUrl+','+portalUrl+');" id="share_share01"></a><a href="javascript:showToTencent('+contId+','+title+','+picUrl+','+portalUrl+');" id="share_share02" ></a><a href="javascript:showToSina('+contId+','+title+','+picUrl+','+portalUrl+');" id="share_share03"></a><span>分享到&nbsp;&nbsp;</span></div>');
}

function removeShare(contId){
  $("#cont"+contId).css({ background: "none" });
  $("#share").remove();
}

function showAttentionCancel(contId){
       $('#guanzhu'+contId).show();
       $("#gz"+contId).css({ background: "#f1f1f1" });
}

function hideAttentionCancel(contId){
       $('#guanzhu'+contId).hide();
       $("#gz"+contId).css({ background: "none" });
}

function ToTencent(title,picUrl){
    var _url = encodeURIComponent(document.location);
        var pp = encodeURI("我读澎湃");
        var _t = encodeURI("【澎湃直播："+title+"】(分享自@澎湃新闻)");
    var _appkey = encodeURI("801495950");//你从腾讯获得的appkey
    var _pic = encodeURI(picUrl);//（例如：var _pic='图片url1|图片url2|图片url3....）
    var _site = '';//你的网站地址
    var _u = 'http://v.t.qq.com/share/share.php?url='+_url+'&appkey='+_appkey+'&site='+_site+'&pic='+_pic+'&title='+_t+'%23'+pp+'%23';
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function ToSina(title,picUrl){
    var _url = encodeURIComponent(document.location);
        var pp = encodeURI("我读澎湃");
        var _t = encodeURI("【澎湃直播："+title+"】(分享自@澎湃新闻)");
    var _appkey = encodeURI("441808809");//你从微薄获得的appkey
    var _pic = encodeURI(picUrl);
    var _site = '';//你的网站地址
    var _u = 'http://service.weibo.com/share/share.php?url='+_url+'&appkey='+_appkey+'&pic='+_pic+'&title='+_t+'%23'+pp+'%23';
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function Torenren(title,picUrl,description){
    var _url = encodeURIComponent(document.location);
        var _t = encodeURI("【澎湃直播："+title+"】");
    var _appkey = encodeURI("266744");//你从微薄获得的appkey
    var _pic = encodeURI(picUrl);
    var _site = '';//你的网站地址
    var _d = !description? _t : encodeURI(description);
    //var _u = 'http://share.renren.com/share/buttonshare.do?title='+_t+'&link='+_url+'&pic='+_pic;
    var _u = 'http://widget.renren.com/dialog/share?resourceUrl='+_url+'&srcUrl='+_url+'&title='+_t+'&pic='+_pic+'&description='+_d;
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function Tozone(title,picUrl,description){
    var _url = encodeURIComponent(document.location);
        var _t = encodeURI("【澎湃直播："+title+"】");
        var _pic = encodeURI(picUrl);
    var _site = '';//你的网站地址
        var _d = !description? _t : encodeURI(description);
    var _u = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+_url+'&title='+_t+'&pics='+_pic+'&desc='+_d+'&summary='+_d;
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function Todouban(title,picUrl,description){
    var _url = encodeURIComponent(document.location);
        var _t = encodeURI("【直播："+title+"】");
    var _appkey = encodeURI("266744");//你从微薄获得的appkey
    var _pic = encodeURI(picUrl);
    var _site = '';//你的网站地址
    var _d = !description? _t : encodeURI(description);
        var _u = 'http://www.douban.com/share/service?text='+_d+'&name='+_t+'&title='+_t+'&href='+_url+'&url='+_url+'&image='+_pic+'&bm=1&v=1';
        window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function showToTencent(contId,title,picUrl,portalUrl){
    var localurl = portalUrl+"/newsDetail_forward_"+contId;
        var pp = encodeURI("我读");
        var _t = encodeURI("【灵蛇新闻："+title+"】(分享自@灵蛇新闻)");
    var _url = encodeURIComponent(localurl);
    var _appkey = encodeURI("801495950");//你从腾讯获得的appkey
    var _pic = encodeURI(picUrl);//（例如：var _pic='图片url1|图片url2|图片url3....）
    var _site = '';//你的网站地址
    var _u = 'http://v.t.qq.com/share/share.php?url='+_url+'&appkey='+_appkey+'&site='+_site+'&pic='+_pic+'&title='+_t+'%23'+pp+'%23';
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function showToSina(contId,title,picUrl,portalUrl){
        var localurl = portalUrl+"/newsDetail_forward_"+contId;
        var pp = encodeURI("我读澎湃");
        var _url = encodeURIComponent(localurl);
        var _t = encodeURI("【澎湃新闻："+title+"】(分享自@澎湃新闻)");
    var _appkey = encodeURI("441808809");//你从微薄获得的appkey
    var _pic = encodeURI(picUrl);
    var _site = '';//你的网站地址
    var _u = 'http://service.weibo.com/share/share.php?url='+_url+'&appkey='+_appkey+'&pic='+_pic+'&title='+_t+'%23'+pp+'%23';
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function showTorenren(contId,title,picUrl,portalUrl,description){
    var localurl = portalUrl+"/newsDetail_forward_"+contId;
        var _t = encodeURI("【澎湃新闻："+title+"】");
    var _url = encodeURIComponent(localurl);
    var _appkey = encodeURI("266744");//你从微薄获得的appkey
    var _pic = encodeURI(picUrl);
    var _site = '';//你的网站地址
    var _d = !description? _t : encodeURI(description);
    //var _u = 'http://share.renren.com/share/buttonshare.do?title='+_t+'&link='+_url+'&pic='+_pic;
    var _u = 'http://widget.renren.com/dialog/share?resourceUrl='+_url+'&srcUrl='+_url+'&title='+_t+'&pic='+_pic+'&description='+_d;
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function showToZone(contId,title,picUrl,portalUrl,description){
    var localurl = portalUrl+"/newsDetail_forward_"+contId;
        var _t = encodeURI("【澎湃新闻："+title+"】");
    var _url = encodeURIComponent(localurl);
    var _appkey = encodeURI("266744");//你从微薄获得的appkey
    var _pic = encodeURI(picUrl);
    var _site = '';//你的网站地址
    var _d = !description? _t : encodeURI(description);
    var _u = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+_url+'&title='+_t+'&pics='+_pic+'&desc='+_d+'&summary='+_d;
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function showTodouban(contId,title,picUrl,portalUrl,description){
    var localurl = portalUrl+"/newsDetail_forward_"+contId;
        var _t = encodeURI("【澎湃新闻："+title+"】");
    var _url = encodeURIComponent(localurl);
    var _appkey = encodeURI("266744");//你从微薄获得的appkey
    var _pic = encodeURI(picUrl);
    var _site = '';//你的网站地址
    var _d = !description? _t : encodeURI(description);
    var _u = 'http://www.douban.com/share/service?text='+_d+'&name='+_t+'&title='+_t+'&href='+_url+'&url='+_url+'&image='+_pic+'&bm=1&v=1';
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function topicToTencent(title,picUrl){
    var _url = encodeURIComponent(document.location);
        var pp = encodeURI("我读澎湃");
        var _t = encodeURI("【澎湃专题："+title+"】(分享自@澎湃新闻)");
    var _appkey = encodeURI("801495950");//你从腾讯获得的appkey
    var _pic = encodeURI(picUrl);//（例如：var _pic='图片url1|图片url2|图片url3....）
    var _site = '';//你的网站地址
    var _u = 'http://v.t.qq.com/share/share.php?url='+_url+'&appkey='+_appkey+'&site='+_site+'&pic='+_pic+'&title='+_t+'%23'+pp+'%23';
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function topicToSina(title,picUrl){
    var _url = encodeURIComponent(document.location);
        var pp = encodeURI("我读澎湃");
        var _t = encodeURI("【澎湃专题："+title+"】(分享自@澎湃新闻)");
    var _appkey = encodeURI("441808809");//你从微薄获得的appkey
    var _pic = encodeURI(picUrl);
    var _site = '';//你的网站地址
    var _u = 'http://service.weibo.com/share/share.php?url='+_url+'&appkey='+_appkey+'&pic='+_pic+'&title='+_t+'%23'+pp+'%23';
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function topicTorenren(title,picUrl,description){
    var _url = encodeURIComponent(document.location);
        var _t = encodeURI("【澎湃专题："+title+"】");
    var _appkey = encodeURI("266744");//你从微薄获得的appkey
    var _pic = encodeURI(picUrl);
    var _site = '';//你的网站地址
    var _d = !description? encodeURI(title) : encodeURI(description);
    //var _u = 'http://share.renren.com/share/buttonshare.do?title='+_t+'&link='+_url+'&pic='+_pic;
    var _u = 'http://widget.renren.com/dialog/share?resourceUrl='+_url+'&srcUrl='+_url+'&title='+_t+'&pic='+_pic+'&description='+_d;
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function topicToZone(title,picUrl,description){
    var _url = encodeURIComponent(document.location);
        var _t = encodeURI("【澎湃专题："+title+"】");
    var _d = !description? encodeURI(title) : encodeURI(description);
    var _pic = encodeURI(picUrl);//（例如：var _pic='图片url1|图片url2|图片url3....）
    var _site = '';//你的网站地址
    var _u = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+_url+'&title='+_t+'&pics='+_pic+'&desc='+_d+'&summary='+_d;
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function topicTodouban(title,picUrl,description){
    var _url = encodeURIComponent(document.location);
        var _t = encodeURI("【澎湃专题："+title+"】");
    var _appkey = encodeURI("266744");//你从微薄获得的appkey
    var _pic = encodeURI(picUrl);
    var _site = '';//你的网站地址
    var _d = !description? encodeURI(title) : encodeURI(description);
    var _u = 'http://www.douban.com/share/service?text='+_d+'&name='+_t+'&title='+_t+'&href='+_url+'&url='+_url+'&image='+_pic+'&bm=1&v=1';
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function askToTencent(contId,title,picUrl,portalUrl){
    var localurl = portalUrl+"/asktopic_detail_"+contId;
        var pp = encodeURI("我读澎湃");
        var _t = encodeURI("【澎湃问吧："+title+"】(分享自@澎湃新闻)");
    var _url = encodeURIComponent(localurl);
    var _appkey = encodeURI("801495950");//你从腾讯获得的appkey
    var _pic = encodeURI(picUrl);//（例如：var _pic='图片url1|图片url2|图片url3....）
    var _site = '';//你的网站地址
    var _u = 'http://v.t.qq.com/share/share.php?url='+_url+'&appkey='+_appkey+'&site='+_site+'&pic='+_pic+'&title='+_t+'%23'+pp+'%23';
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function askToSina(contId,title,picUrl,portalUrl){
        var localurl = portalUrl+"/asktopic_detail_"+contId;
        var pp = encodeURI("我读澎湃");
        var _url = encodeURIComponent(localurl);
        var _t = encodeURI("【澎湃问吧："+title+"】(分享自@澎湃新闻)");
    var _appkey = encodeURI("441808809");//你从微薄获得的appkey
    var _pic = encodeURI(picUrl);
    var _site = '';//你的网站地址
    var _u = 'http://service.weibo.com/share/share.php?url='+_url+'&appkey='+_appkey+'&pic='+_pic+'&title='+_t+'%23'+pp+'%23';
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function askTorenren(contId,title,picUrl,portalUrl,description){
    var localurl = portalUrl+"/asktopic_detail_"+contId;
        var _t = encodeURI("【澎湃问吧："+title+"】");
    var _url = encodeURIComponent(localurl);
    var _appkey = encodeURI("266744");//你从微薄获得的appkey
    var _pic = encodeURI(picUrl);
    var _site = '';//你的网站地址
    var _d = !description? _t : encodeURI(description);
    //var _u = 'http://share.renren.com/share/buttonshare.do?title='+_t+'&link='+_url+'&pic='+_pic;
    var _u = 'http://widget.renren.com/dialog/share?resourceUrl='+_url+'&srcUrl='+_url+'&title='+_t+'&pic='+_pic+'&description='+_d;
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function askTodouban(contId,title,picUrl,portalUrl,description){
    var localurl = portalUrl+"/asktopic_detail_"+contId;
        var _t = encodeURI("【澎湃问吧："+title+"】");
    var _url = encodeURIComponent(localurl);
    var _appkey = encodeURI("266744");//你从微薄获得的appkey
    var _pic = encodeURI(picUrl);
    var _site = '';//你的网站地址
    var _d = !description? _t : encodeURI(description);
    var _u = 'http://www.douban.com/share/service?text='+_d+'&name='+_t+'&title='+_t+'&href='+_url+'&url='+_url+'&image='+_pic+'&bm=1&v=1';
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function askToZone(contId,title,picUrl,portalUrl,description){
    var localurl = portalUrl+"/asktopic_detail_"+contId;
        var _t = encodeURI("【澎湃问吧："+title+"】");
    var _url = encodeURIComponent(localurl);
    var _appkey = encodeURI("266744");//你从微薄获得的appkey
    var _pic = encodeURI(picUrl);
    var _site = '';//你的网站地址
    var _d = !description? _t : encodeURI(description);
    var _u = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+_url+'&title='+_t+'&pics='+_pic+'&desc='+_d+'&summary='+_d;
    window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}