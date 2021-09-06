$(document).ready(function()
{

var scroll = $("#scrollTop a");
$(window).scroll(function()
      {

         $(this).scrollTop() >= 500 ? scroll.show(1000) : scroll.hide(1000);

          scroll.click(function()
          {
               $("html , body").animate({ scrolltoTop : 0} , 700);
          });
      });

});
 // loading
 $(window).on('load' ,function()
 {

 $(".load img").fadeOut(3000 ,
       function()
     {
       $(this).parent().fadeOut(100 ,
          function()
                    {
                         $("body").css("overflow" , "auto");
                    });
     });

 });
