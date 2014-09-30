$( document ).ready(function() {
  $('#portfolio .slide').click(function(){
    $('.slide').removeClass('active');
    $(this).addClass('active');
  });

});
