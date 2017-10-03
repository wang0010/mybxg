define(["jquery","template","util"],function($,template,util){
   var tcId = util.qs("tcId");
   if(tcId){
   	  // 编辑讲师
   	  $.ajax({
   	  	type:"get",
   	  	url:"/api/teacher/edit",
   	  	data:{tc_id:tcId},
   	  	dataType:"json",
   	  	success:function(data){
   	  		// 解析数据，渲染页面
   	  		data.result.operse = "编辑讲师"
   	  		var html = template("teacheraddTpl",data.result)
   	  		$("#teacheraddInfo").html(html);
   	  		setForm("/api/teacher/update")
   	  	}
   	  })
   }else {
   	  // 添加讲师
   	   var html = template("teacheraddTpl",{operse:"添加讲师"});
   	   $("#teacheraddInfo").html(html);  	
   	   setForm("/api/teacher/add")
  }

  //表单添加和编辑
  function setForm(url){
  	$("#teacherBtn").click(function(){
  		$.ajax({
  			type:"post",
  			url:url,
  			data:$("#teacherForm").serialize(),
  			dataType:"json",
  			success:function(data){
  				if(data.code == 200){
  					location.href = "/teacher/list"
  				}
  			}
  		})
  	})
  }
})