define(["jquery","template"],function($,template){
   $.ajax({
   	  type:"get",
   	  url:"/api/teacher",
   	  dataType:"json",
   	  success:function(data){
   	  	// 解析数据 渲染页面
   	  	var html = template("teacherTpl",{list:data.result});
   	  	$("#teacherInfo").html(html);
   	  	// 编辑启用和注销功能
   	  	$(".eod").click(function(){
   	  		var that =this;
   	  		var td = $(this).parent();
   	  		var tcId = td.attr("data-csId");
   	  		var status = td.attr("data-status");
   	  		$.ajax({
   	  			type:"post",
   	  			url:"/api/teacher/handle",
   	  			data:{tc_id:tcId,tc_status:status},
   	  			success:function(data){
   	  				if(data.code == 200){
   	  					// 修改页面的状态 启用或者注销
   	  				   td.attr("data-status",data.result.tc_status);
   	  				   // 判断页面的状态是启用还是注销
   	  				   if(data.result.tc_status == 0){
                          $(that).text("注销")
   	  				   }else {
   	  				   	 $(that).text("启用")
   	  				   }
   	  				}
   	  			}
   	  		})
   	  	});
   	  }
   });
})