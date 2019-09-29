$(function () {
  // 获取屏幕高度 
  var height = $(window).height();
  $('.main').css('height', height);



  // 点击购买弹出推荐人
  $('.buy-button').click(function () {
    $('.buy-referrer').css('display', 'flex');
    $(this).css('display', 'none');
  })
  // 取消按钮
  $('.buy-referrer-button input:nth-of-type(2)').click(function () {
    $('.buy-button').css('display', 'block');
    $('.buy-referrer').css('display', 'none');
  })
})