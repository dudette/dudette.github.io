$( document ).ready(function() {
  $('#portfolio .slide').click(function(){
    $('.slide').removeClass('active');
    $(this).addClass('active');
  });

  //SVGMagic
  $('img.case').svgmagic({
     forceReplacements: true,
     additionalRequestData: true
  });

});
