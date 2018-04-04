// validata 验证v.
// validator 验证器n.
// valid 合法的,验证通过的adj.
// invalid 不合法的,验证未通过的adj.



$(function() {
    
    'use strict';
    
    
    // 分析main.js得是个什么结构
    
    
    // 为什么有写变量是$a,还写变量直接a就可以？？？
    // 答： $a是jQuery对象（后面把jq对象和dom对象详细的说一下）
    
    // 这里是已属性来获取元素的吗？？？？？   
    // 答：jQuery的属性选择器，选择含有data-rule属性的元素
    
    
     /* 1.选中页面中所有的input[data-rule] */
    // 获取验证规则data-rule的元素，此时的data-rule内容还是字符串，得通过Input()来解析字符串成对象 
    var $inputs = $('[data-rule]')  
    , $form = $('#signup')  // 表单元素
    , inputs = [];  // 存放验证规则对象(rule)，一一检测
    
    // each是什么方法，第一个传参是什么意思？？？
    // index是选择器的位置
    // node是选择器的代码

    $inputs.each(function (index, node) {
        /* 2.解析每一个input的验证规则 */
        var tmp = new Input(node);
        inputs.push(tmp);
    }) 

    // 提交表单事件
    $form.on('submit', function (e) {
        // 阻止浏览器的默认行为
        e.preventDefault();
        
        // 当点击提交的时候，blur一下全部的输入框，不符合验证规则会显示提示信息
        $inputs.trigger('blur');
        // trigger()： 触发被选元素的指定事件类型 
        // toggle(): 显示/隐藏
        
        /* 3.验证 */
        // 检查用户输入的每个信息是否符合验证规则
        for(var i = 0; i < inputs.length; i++) {
            
            var item = inputs[i];
            
            // username_input.validator.is_valid
            // 如果存在一条不符合验证规则的话，直接返回，并显示提示信息
            var r = item.validator.is_valid();
            if(!r) {
                return;
            }
        }
        
        // 所有的信息都符合验证规则，那么弹出“注册成功”的信息。
        alert('注册成功');
    })
    
});

// 思路
// Validator(val, rule);
// val:用户传进来的值,是个字符串.要注意类型的转换
// rule:验证规则,是个对象

// var validator = new Validator('sdasdsdsdDs', {
//     pattern: '^[a-zA-Z0-9]*$'
// })

// // var result = validator.validata_max();
// // var result = validator.validata_min();
// // var result = validator.validata_maxlength();
// // var result = validator.validata_minlength();
// // var result = validator.validata_numeric();
// // var result = validator.validata_required(); 
// var result = validator.validata_pattern(); 
// console.log(result);

// 思路2
// var valid = test.validator.is_valid();
// console.log(valid);
// var test = new Input('#test');





