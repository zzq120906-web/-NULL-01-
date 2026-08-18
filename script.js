// NULL-01 主程序


console.log(
"NULL-01 SYSTEM ONLINE"
);


// 打开第一份日志

function openLog(){


    localStorage.setItem(
        "NULL01_progress",
        "LOG-000"
    );


    window.location.href =
    "pages/log.html";


}



// 检查玩家进度

function checkProgress(){


    let progress =
    localStorage.getItem(
        "NULL01_progress"
    );


    return progress;


}



// 解锁记录

function unlock(id){


    localStorage.setItem(
        "NULL01_unlock",
        id
    );


}



// 获取解锁状态

function getUnlock(){


    return localStorage.getItem(
        "NULL01_unlock"
    );


}
