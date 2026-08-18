// NULL-01 CORE SYSTEM


window.onload = function(){

    const box = document.getElementById("typing");

    if(box){

        const text =
        "正在启动 NULL-01 系统...\n\n" +
        "检查核心文件...\n\n" +
        "发现异常记录...\n\n" +
        "恢复协议加载中...";


        let i = 0;


        function type(){

            if(i < text.length){

                box.innerHTML += text[i];

                i++;

                setTimeout(type,50);

            }

        }


        type();

    }

};




// 进入系统

function startGame(){


    localStorage.setItem(
        "NULL01_PROGRESS",
        "START"
    );


    window.location.href =
    "pages/log.html";


}




// 保存线索

function saveClue(clue){


    let data =
    JSON.parse(
        localStorage.getItem("NULL01_CLUES")
        || "[]"
    );


    if(!data.includes(clue)){


        data.push(clue);


        localStorage.setItem(
            "NULL01_CLUES",
            JSON.stringify(data)
        );


    }


}
