function jianche(){
	var flag=true;
	var name =document.querySelectorAll("input")[0];
	var psd =document.querySelectorAll("input")[1];
	var user="12345678";
	var pass="12345678";
	if(name.value==user)
		{
			if(psd.value==pass)
			{
				return flag;
				}
			else
			{
				alert("密码错误，请重新输入");
				flat=false;
				return flag;
			}
		}
		else{
			alert("账号或者密码错误!");
			flag=false;
			return flag;
		}
}