<?php
   // 默认目录名称
   $dir = "main";
   // 默认文件名称
   $filename = "index";
   // 处理url路径
   if(array_key_exists("PATH_INFO",$_SERVER)){
   	  // 如果PATH_INFO 存在
   	  // 获取请求路径
   	  $path = $_SERVER["PATH_INFO"]; //  /main/index'
     // 去掉第一个斜杠
      $str = substr("$path", 1); // main/index
   	  // 字符串分割
   	  $ret = explode("/",$str); 
     //  判断路由有几层
   	  if(count($ret) == 2){
   	  	// 如果路由有两层
   	  	$dir = $ret[0]; // 覆盖目录
   	  	$filename = $ret[1];// 覆盖文件名称
   	  }else{
   	  	// 其它情况全部跳转到登录页面
   	  	$filename = "login";	  	
   	  }
   }

   include("./views/".$dir."/".$filename.".html");
?>
 