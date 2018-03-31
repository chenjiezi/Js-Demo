// validata 验证v.
// validator 验证器n.
// valid 合法的,验证通过的adj.
// invalid 不合法的,验证未通过的adj.


// 分析main.js得是个什么结构

$(function() {
    
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

    'use strict';

    // 选中页面中所有的input[data-rule]

    var $inputs = $('[data-rule]')
      , $form = $('#signup')
      , inputs = [];
    $inputs.each(function (index, node) {
        // 解析每一个input的验证规则
        var tmp = new Input(node);
        inputs.push(tmp);
    }) 

    $form.on('submit', function (e) {
        e.preventDefault();
        $inputs.trigger('blur');
        for(var i = 0; i < inputs.length; i++) {
            var item = inputs[i];
            var r = item.validator.is_valid();
            if(!r) {
                alert('注册失败');
                return;
            }

        }
        alert('注册成功');
    })

    // username_input.validator.is_valid

    // 思路
    // var test = new Input('#test');
    // var valid = test.validator.is_valid();
    // console.log(valid);
    


    // 验证

    

});