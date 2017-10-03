define(["jquery"],function($){
	return {
	   qs:function(key){
	   	 	var sea = location.search.substr(1);
			var result = null;
		    if(sea){
		    	var sub = sea.split("&");
		    	$.each(sub,function(index,item){
		    		var parm = item.split("=");
		    		if(parm[0] == key){
		               result = parm[1];
		               return false;
		    		}
		    	})
		    }
            return result;
	   } 
	}
})