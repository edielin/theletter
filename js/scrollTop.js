$(document).ready(function() {
      //視窗位移
      $(window).scroll(function() {
            var offset_height = 450;
            var bar_height = 250;
            var distance = $(window).scrollTop();

            if (distance > offset_height) {
                  $('.gototop').addClass('ons');
            } else {
                  $('.gototop').removeClass('ons');
            }

             if (distance > bar_height) {
                  $('.cartBar').css('boxShadow','0 1px 2px rgba(0,0,0,.3)');
                  $('#navlogo').css('display','block');
            } else {
                  $('.cartBar').css('boxShadow','0 1px 2px rgba(0,0,0,0)');
                  $('#navlogo').css('display','none');
            }
      });
      // 位移到最上方
      $('.gototop').on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({
                  scrollTop: 0,
            }, 1000);
      });
});