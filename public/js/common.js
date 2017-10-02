define(["jquery","template","cookie"],function($,template){

	// NProgress.start();

	// NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	// 设置主页退出功能
	$("#logoutBtn").click(function(){
		$.ajax({
			type:"post",
			url:"/api/logout",
			typeData:"json",
			success:function(data){
				if(data.code == 200){
					location.href = "/main/login"
				}
			}
		})
	})

	// 判断 PHPSESSID是否存在  可以获取登录时的PHPSESSID
	var flag  = $.cookie("PHPSESSID");
	if(!flag && location.pathname != "/main/login"){
		// 如果没有存在就 跳转不到在别的页面
		location.href = "/main/login"
	}
    
    // 获取到登陆页面的 cookie信息
	var loginInfo =  $.cookie("loginInfo");
	// JSON.parse(loginInfo) 把字符串在转换为对象
	loginInfo = loginInfo && JSON.parse(loginInfo)
    // 设置用户的头像信息
	// $(".aside .profile img").attr("src",loginInfo.tc_avatar)
	// $(".aside .profile h4").attr(loginInfo.tc_name)
	// 动态渲染 头像信息
	var tpl = "<div class='avatar img-circle'><img src='{{tc_avatar}}'></div><h4>{{tc_name}}</h4>";
	var html = template.render(tpl,loginInfo)
	$(".aside .profile").html(html)
})