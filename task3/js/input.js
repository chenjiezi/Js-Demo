$(function () {
    'use strict';

    window.Input = function (selector) {
        var $ele
          , $error_ele
          , me = this
          , rule = {
              required: true
            };
            
        function init () {
            // 找到选择器
            find_ele();
            // 解析input的rule
            parse_rule();
            me.load_validator();
            get_error_ele();
            listen();
        }
            
        // 找到选择器
        function find_ele () {
            if(selector instanceof jQuery) {
                $ele = selector;
            } else {
                $ele = $(selector);
            }
        }
        
        // 解析rule
        function parse_rule () {
            var i;
            var rule_str = $ele.data('rule');
            if(!rule_str) return;
            
            var rule_arr = rule_str.split('|'); // ['max:100', 'min:10']
            
            // 大坑！！！！！！！！！！！！！！！！！！！
            for(i = 0; i < rule_arr.length; i++) {
                var item_str = rule_arr[i];     // ['max:100']
                var item_arr = item_str.split(':');  // ['max', '100]
                // 把字符串转换为数值
                rule[item_arr[0]] = JSON.parse(item_arr[1]);   // {max:100}
            }
            
        }

        // 加载验证器
        this.load_validator = function () {
            var val = this.get_val();
            this.validator =new Validator(val, rule);
        }

        // 获取用户输入的值
        this.get_val = function () {
            return $ele.val();
        }
        
        // 获取提示信息的元素
        function get_error_ele () {
            $error_ele = $(get_error_selector());
        }
        function get_error_selector() {
            return '#' + $ele.attr('name') + '-input-error';
        }

        // 监听
        function listen () {
            $ele.on('blur', function () {
            var valid = me.validator.is_valid(me.get_val());
            if(valid)                
                $error_ele.hide();
            else
                $error_ele.show();
            })
        }
        
        init();
        
    }
    
});