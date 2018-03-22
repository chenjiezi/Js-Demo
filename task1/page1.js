// 全局变量
// 定义超时变量
var time;
//定义一个数组来存储小宫格元素
var box = [];

// 获取全部小宫格的元素
box = document.getElementsByClassName("box");

// 点击开始闪按钮，触发此函数。
function start () {
    // 定义存储随机三个不同数的数组
    var threeBox = [];
    
    // 随机获取三个不同的数值并存入threeBox数组 
    while(threeBox.length != 3 ) {
        var i;

        // 随机范围在0~8的一个整数
        i = Math.floor(Math.random() * 9);
        
        // 用indexof方法判断存入的数是否相同，如果不相同就存入，相同就在此循环
        if(threeBox.indexOf(i) < 0) {
            threeBox.push(i);
        }        
    }
    
    // 每次循环完，进行第二次时，重置宫格的颜色
    for (var j = 0; j < box.length;j++) {
        box[j].style.backgroundColor = "rgb(254,165,0)";
    }
    
    // 定义一个存储颜色的数组
    var color = [];

    // 随机颜色
    for(var i = 0; i < 9; i++) {
        color[i] = Math.floor(Math.random() * 256);
    }
    
    // 将随机的颜色设置到三个随机的小宫格上
    box[threeBox[0]].style.backgroundColor = "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";
    box[threeBox[1]].style.backgroundColor = "rgb(" + color[3] + "," + color[4] + "," + color[5] + ")";
    box[threeBox[2]].style.backgroundColor = "rgb(" + color[6] + "," + color[7] + "," + color[8] + ")";
    
    // 如果这里不设置清除超时，会导致start函数叠加超时循环，越闪越快
    clearInterval(time);
    time = setInterval("start()",1000);
}

// 点击结束闪按钮，触发此函数
function stop () {
    //清除超时
    clearInterval(time);
    // 重置九宫格的颜色
    for (var j = 0; j < box.length;j++) {
        box[j].style.backgroundColor = "rgb(254,165,0)";
    }
}