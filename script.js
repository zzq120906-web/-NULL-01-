// NULL-01 SYSTEM CORE


// 启动文字

const text = 
`
正在启动 NULL-01 系统...

检查核心文件...

发现异常记录...

恢复协议加载中...

`;



let index = 0;



function typeText(){


let box =
document.getElementById("typing");



if(!box) return;



if(index < text.length){


box.innerHTML += 
text[index];


index++;


setTimeout(
typeText,
60
);


}


}



window.onload=function(){


typeText();


};





// 进入系统


function startGame(){


localStorage.setItem(

"NULL01_PROGRESS",

"START"

);



window.location.href=

"pages/log.html";


}





// 获取玩家进度


function getProgress(){


return localStorage.getItem(

"NULL01_PROGRESS"

);


}





// 保存线索


function saveClue(clue){


let clues =

JSON.parse(

localStorage.getItem(
"NULL01_CLUES"
)

|| "[]"


);



if(!clues.includes(clue)){


clues.push(clue);



localStorage.setItem(

"NULL01_CLUES",

JSON.stringify(clues)

);


}



}




// 检查线索


function hasClue(clue){


let clues =

JSON.parse(

localStorage.getItem(
"NULL01_CLUES"
)

|| "[]"


);



return clues.includes(clue);


}
