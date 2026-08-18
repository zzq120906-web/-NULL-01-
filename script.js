// NULL-01 SYSTEM CORE


window.onload = function(){

    let box = document.getElementById("typing");

    if(box){

        let text = 
        "正在启动 NULL-01 系统...\n\n检查核心文件...\n\n发现异常记录...\n\n恢复协议加载中...";


        let i = 0;


        function type(){

            if(i < text.length){

                box.innerHTML += text[i];

                i++;

                setTimeout(type,60);

            }

        }


        type();

    }

};





function startGame(){

    window.location.href = "pages/log.html";

}
