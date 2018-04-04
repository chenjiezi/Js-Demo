// 不污染全局变量
// 原生js写法:  ;()();

// 思路：1.先定义validator验证器；2.写验证规则；3.写一个方法验证全部的规则是否合法


$(function() {
    // 严格模式
    'use strict';

    // 验证器
    window.Validator = function(val, rule) {

        // {
        //     max: 10,
        //     min: 2
        // }
        // 判断是否合法
        this.is_valid = function (new_val) {
            var key;

            // 有个坑
            // 当有数一个合法的值，之后又删除，输入另外一个值无论是否合法，验证器会默认第一个输入的值。
            // 这样的后果会产生bug。当输入一个合法的值，然后再删除，点击注册，会通过验证。       
            // val = new_val || val;

            // 因为是严格模式，所以是undefined
            if(new_val !== undefined)
            val = new_val;
            
            
            // 如果不是必填项 且 值为空 直接pass
            // 不同满足两个条件就得进行下面的程序
            if(!rule.required && !val)
                return true;

            for(key in rule) {
                // 防止重复检查
                if(key === 'required')
                    continue;
                
                // 调用rule中相对应的方法
                // 坑了我一下  
                var r = this['validata_' + key]();
                if(!r) return false;
            }

            return true;
        }

        // 验证数值的大小
        // 传进来的val值是个字符串,因为input的类型为text的时候,所以
        // 这里得转换一下val的值
        this.validata_max = function () {
            pre_max_min();
            return val <= rule.max;
        }

        this.validata_min = function () {
            pre_max_min();
            return val >= rule.min;
        }

        // 验证字符串的长度
        // 返回值比较的是长度,而val是字符串,所以返回值应该是val.length
        this.validata_maxlength = function () {
            pre_length();
            return val.length <= rule.maxlength;
        },

        this.validata_minlength = function () {
            pre_length();
            return val.length >= rule.minlength;
        }

        // 验证是否为数值
        this.validata_numeric = function () {
            return $.isNumeric(val);
        }

        // 验证值是否为空或者为0
        this.validata_required = function () {
            // 用户真正输入的值
            var real = $.trim(val);
            // 空值相对的布尔值boolean为false
            // 所以!real为true
            if(!real && real !== 0) {
                return false;
            }
            return true;
        }

        this.validata_pattern = function () {
            var reg = new RegExp(rule.pattern);
            return reg.test(val);
        }

        // 私有函数,把相同的代码封装起来
        // 用于完成this.validata_max或this.validata_min的前置工作
        function pre_max_min() {
            val = parseFloat(val);
        }

        // 用于完成this.validata_maxlength或this.validata_minlength的前置工作
        function pre_length() {
            val = val.toString();
        }


    }

});