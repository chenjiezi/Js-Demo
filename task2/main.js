// 选择器
// document
// .getElementById('a')
// .style
// .background = "red";

// jQuery('#b')
// .css('color', 'gray');

// $('#b')
// .css('background', 'yellow');

// // $('div')
// //     .css('display', 'inline-block');

// $('div:first')
//     .css('border', '3px solid black');

// $('div p')
//     .css('border', '3px solid black');

// 过滤器
// $('.grandpa')
//     .find('.child')
//     .css('border','2px solid #999');

// $('.child')
//     .parent()
//     .css('border','2px solid #666');

// $('.child')
//     .parents('.grandpa')
//     .css('border','2px solid #333');

// $('.child')
//     .filter('.not-gay')
//     .css('background','red');
    

// 过滤器：在相同类种，选出含有过滤器含有的类，进行样式的操作
// .filter()
// 父元素选择器
// .parent()
// 爷爷元素选择器
// .parents()



// 写多个样式的时候，可以用对象来编写样式
// $('.box1')
    // .css({
    //     color: '#fff',
    //     background: '#000',
    // })
    // .addClass('a');
    // .removeClass('a');
    // ps: 使用增加类或者移除类方法，给个类名就好，不用加个点。

    // var box1 = $('.box1');
    // ps: 先获取该元素然后赋值到一个变量上
    // console.log(box1.hasClass('a'));    
    // 隐藏
    // box1.hide();
    // 显示
    // box1.show(1000);
    // 淡入
    // box1.fadeOut(3000);
    // 淡出
    // box1.fadeIn(3000);
    // 卷起
    // box1.slideUp(1000);
    // 拉出
    // box1.slideDown(1000);

// 计时器
// var box = $('.box');

// 用超时计时器调用该函数
// function foo () {
//     if(!box.hasClass('a')){
//         box.addClass('a');
//     }else {
//         box.removeClass('a');
//     }
// }

// 超时计时器
// setInterval(foo, 500);
// 倒数计时器
// setTimeout(foo, 3000);

// var a = $('#a');
// a.css('font-size', '100px');
// var i = 3;
// function foo() {
//     a.text("还有"+ i +"秒关机！！！！");

//     if(i == -1) {
//         a.text("逗你的啦");
//         clearInterval(time);
//     }
    
//     i--;
// }


// var time = setInterval(foo, 1000);


// 操作DOM 
// var a = $('#a');
// 在a元素的子元素后面添加子元素
// a.append('<div>append</div>');
// 在a元素的子元素前面添加子元素
// a.prepend('<div>prepend</div>');
// 选中元素，然后使用remove（）方法就可以删除
// $('#a').remove();
// console.log(a);
// console.log($('#a'));
// $('#a div').remove();



// 事件

// var cardTrigger = $('#card-trigger');
// var card = $('#card');

// cardTrigger.on('click', foo);

// function foo() {
//     if (card.is(':visible')){
//         card.slideUp();
//     }else {
//         card.slideDown();
//     }
// }

// card.on('mouseenter', yo1);
// card.on('mouseleave', yo2);

// function yo1() {
//     card.addClass('active');
// }

// function yo2() {
//     card.removeClass('active');
// }


// 操作属性

// console.dir(document.getElementById('a'));

// 隐性属性，元素固定有的属性，不可自定义
// var t = $('#a').prop('innerText');
// console.log(t);

// 显性属性，可以自定义
// $('#a').attr('asdf', '4321');


// 表单及输入

// var nn = $('#nickname').val();
// console.log(nn);

// 可以向输入框传参
// $('#nickname').val('wanghuahua');

//聚焦
// $('#nickname').focus();
// 不聚焦
// $('#nickname').blur();
// 全选value值
// $('#nickname').select();

// 提交
// $('form').submit();

// 当点击提交，就跳转页面
// $('#trigger').click(
//     function () {
//         // 这里可以放验证输入框是否输入正确
//         $('form').submit();
//     }
// );


// var trigger = $('#trigger');
// var card = $('#card');
// var loaded = false;


// trigger.on('click',
    // function () {
        // if(card.is(':visible')) {
        //     card.slideUp();
        // } else {
        //     if(!loaded) {
        //         card.load('card.html');
        //         loaded = true;
        //     }
        //     card.slideDown();
        // }

        // 跟上面的代码功能相似
        // 这样会导致多次请求文件，降低了性能
        // card.load('card.html');
        // card.toggle();
//     }
// );

// trigger.on('mouseenter',
//     function () {
//         if(!loaded) {
//             card.load('card.html');
//             loaded = true;
//         }
//         card.slideDown();
//     }
// )

// trigger.on('mouseleave',
//     function () {
//         card.slideUp();
//     }
// )


// ajax


// $.ajax({
//     url: 'https://api.github.com/users/biaoyansu',
//     // post:是提交一张表单或者给服务器发送一些信息
//     // get:是获取一段数据
//     method: 'get',
//     data: {
//         username: 'whh',
//         password: 'asdf',
//     },
//     // 回调函数，当这个请求成功的时候，我们要做什么事情的时候
//     // 根据服务器下发的数据，我们可以做一些事情
//     success: function(data) {
//         console.log('成功');
//     },
//     error: function() {
//         console.log('失败');
//     }
// })

// // ajax快捷方法
// $.post('post', {
//     username: '...',
//     password: '...',
// })

// $.get('url');
// // 获取数据
// $.getJson('url');
// // 获取代码
// $.getScript('url');



// ajax实现功能
// ajax实现输入'gayhub用户名'异步来获取该用户的
// 基本信息。eg：昵称，简介。。。。。


var form = $('#search');
var input = $('input#username');
var result = $('#result');
var username;

form.on('submit',
    function (e) {
        // 打断浏览器默认的行为
        e.preventDefault();
        // 获取填入输入框的username
        username = input.val();
        // 用ajax异步请求url的信息
        // 用户名为动态的
        $.ajax('https://api.github.com/users/' + username)       
        // 当这个请求完成的时候，接下来要做的事情
            .done(function(data) {
                var html = 
                '<div>昵称：' + data.name + '</div>' +
                // 如果没有简介，会显示null，改为自己想要的形式显示
                '<div>介绍：' + (data.bio || '-') + '</div>';          
                result.html(html); 
            })
    }
)
