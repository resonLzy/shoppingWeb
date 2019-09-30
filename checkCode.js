$('#getCheckCode').on('click', function () {
    // 获取手机号码
    var phoneNum = $("input[name='phoneNum']").val();

    // 判断手机号码是否正确
    if (phoneNum == "" || phoneNum.length != 11) {
        $('.phoneTip').css('display', 'inline');
    } 
    else {
        // 修改完成Button样式
        $('.submitButton').toggleClass("selectedButton")
                          .attr("disabled","disabled");

        // 修改获取验证码Button的样式
        $('.getCheckNum').toggleClass("checkedNum")
                         .attr("disabled","disabled");

        let num = setInterval(checkNum, 1000);
        let i = 60;

        function checkNum() {

            $('.getCheckNum').val("重新获取(" + i + ")")
            i--;

            if(i == -1){
                clearInterval(num);
                // 更改获取验证码名字
                $('.getCheckNum').val("获取验证码");

                // 移除获取状态下Button的样式
                $('.getCheckNum').toggleClass("checkedNum");
                $('.getCheckNum').removeAttr("disabled");
                
                // 移除完成Button的被选样式
                $('.submitButton').toggleClass("selectedButton");
                $('.submitButton').removeAttr("disabled");
            }
        }
    }
})
