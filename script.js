let bootText = [

"正在启动 NULL-01 系统...",
"检查数据完整性...",
"发现异常文件...",
"尝试恢复...",
"",
"警告：部分档案已被删除"

];


let index=0;



function boot(){

if(index < bootText.length){


document.getElementById("boot").innerHTML 
+= "<br>" + bootText[index];


index++;

setTimeout(boot,600);


}

}


boot();



function login(){


let code=
document.getElementById("password").value;



if(code==="0818"){


document.getElementById("login")
.style.display="none";


document.getElementById("menu")
.classList.remove("hide");



document.getElementById("screen")
.innerHTML=

`
<p>
身份确认成功。
</p>

<p>
用户编号：UNKNOWN
</p>

<p>
欢迎访问 NULL-01 数据库。
</p>
`;



}

else{


document.getElementById("screen")
.innerHTML +=

`
<br>
> 错误代码：
${code}

<br>
> 访问记录已保存。

`;

}



}



function openArchive(){


localStorage.setItem(
"archive",
"true"
);


location.href="pages/archive.html";


}



function openTerminal(){


location.href=
"pages/terminal.html";


}
