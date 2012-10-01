
$(function () {

  $('.montage').masonry({
    itemSelector: '.img-box',
    isAnimated: true
  });
  $('.menu-button').click(function () {
    var name = $(this).attr('id').replace('button', '');
    $('.category-content-content').hide();
    $('#' + name + 'content').show();
    $('.category-content').addClass('category-content-open');
    $('.montage').addClass('montage-minified');
    $('.montage').masonry('reload');
  })
  $('#close-button').click(function () {
    $('.category-content').removeClass('category-content-open');
    $('.montage').removeClass('montage-minified');
    $('.montage').masonry('reload');

  })

});