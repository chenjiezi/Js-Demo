
/*
 * @Author: chenjiezi 
 * @Date: 2018-05-11 14:44:25 
 * @Last Modified by: chenjiezi
 * @Last Modified time: 2018-05-11 23:38:59
 */
 
'use strict';

// 当点击指定图片时,会获取该元素
function fun(image){
    // 获取image元素的src和alt
    var source = image.getAttribute('src');
    var text = image.getAttribute('alt');    
    // 获取#pic元素
    var pic = document.getElementById('pic');
    // 修改pic元素的src和alt
    pic.setAttribute('src', source);
    pic.setAttribute('alt', text);
    // 获取#para元素
    var para = document.getElementById('para');
    // 修改para的文本节点的值
    para.innerHTML = text;
    // para.firstChild.nodeValue =text;
}

// DOM提供了insertBefore()方法，即把新元素插到指定的元素之前(这里的新元素和指定的元素是兄弟元素)；
// 但没有提供insertAfter()方法，可以通过已有的DOM方法和属性来实现这个方法。
function insertAfter(newElement, targetElement){
    // 第一步：先找到目标元素的父元素
    var parent = targetElement.parentNode;
    // 第二步：分为两小步，如果目标元素是父元素的最后一个元素，那么新元素用appendChild插在目标元素的后面，
    // 如果目标元素不是父元素的最后一个元素，那么把新元素用insertBefore()方法插在目标元素.nextSibling上。
    if(targetElement === parent.lastChild){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

// 还没不太清楚此方法的意图,回校查查资料?
// 添加加载事件
function addLoadEvent(func){
    var oldOnload = window.onload;
    if(window.onload != 'function'){
        window.onload = func;
    }else{
        oldOnload();
        func();
    }
}

// 属性是默认存在的，只是空值，而节点是默认不存在的，得创建
// 生成展示图和文本两个元素
function shengcheng(){
    // 创建展示图pic及它的src和id
    var pic = document.createElement('img');
    pic.setAttribute('id', 'pic');
    pic.setAttribute('src', './image/5.jpg');
    // 创建para及它的text和id
    var para = document.createElement('p');
    para.setAttribute('id', 'para');
    var text = document.createTextNode('TomorrowLand');
    para.appendChild(text);
    // 将pic和para插到文档中(四个小图后面#list)
    var list = document.getElementById('list');
    insertAfter(pic, list);
    insertAfter(para, pic);
}

// 将参杂在html文档的js抽离到js文件里
function fenli(){
    // 获取#list元素
    var list = document.getElementById('list');
    // 获取#list元素里的img元素集合,遍历全部img元素集合
    // 遍历到被点击的img元素就触发该元素执行fun()方法
    var imgs = list.getElementsByTagName('img');
    for(var i = 0; i < imgs.length; i++){
        imgs[i].onclick = function(){
            return fun(this);
        }
    }
}

// 加载方法
addLoadEvent(shengcheng());
addLoadEvent(fenli());