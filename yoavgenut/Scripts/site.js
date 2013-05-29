
$(function () {

  setElementsWithPageProportions();
  setWindowResizeHandler();
  initMasonry();
  initMenuButtons();

  function initMenuButtons() {

    //$('.menu-button, .record-niddle, .button-record, .button-text').click(function (event) {
    $('.menu-button').click(function (event) {

      //event.stopPropagation();
      if (isCategoryOpen()) {
        $('#close-button').trigger('click');
        return false;
      }
      var name = getButtonName(this);


      $('.category-content-content').hide();
      $('#' + name + 'content').show();
      $('.category-content').addClass('category-content-open');
      $('.montage').addClass('montage-minified');
      $('.montage').masonry('reload');




    });
    $('#close-button').click(function () {
      //var allBricks = $('#.img-box img').css('width', 'auto');

      $('.category-content').removeClass('category-content-open');
      $('.montage').removeClass('montage-minified');
      //$('.montage').masonry('reload');
      setTimeout(function () {
        $('.montage').css('width', '83%').masonry('reload');
        //$('.montage').masonry('reload');
      }, 1);

    });
  }
  function initMasonry() {

    setTimeout(function () {
      $('.montage').masonry({
        itemSelector: '.img-box',
        //columnWidth: function (a) {
        //    if ($('.montage.montage-minified').length > 0)
        //        return $('#.img-box img').eq(0).width;
        //    var width = (a / 3) > 500 ? 500 : (a / 3);
        //    console.log('width:' + a + ', column: ' + width);
        //    return width;
        //},
        isAnimated: true,
        isResizable: true
      });
    }, 200);
  }
  function setWindowResizeHandler() {
    $(window).resize(function () {
      setElementsWithPageProportions();
      $('.montage').masonry('reload');
    });
  }
  function setElementsWithPageProportions() {
    var columnWidth = ($(window).width() * 0.82) / 3;
    columnWidth = parseInt(columnWidth.toString());
    if (columnWidth > 500)
      columnWidth = 500;
    var allBricks = $('.img-box img');
    for (var i = 0; i < allBricks.length; i++) {
      allBricks.eq(i).css('width', columnWidth.toString());
    }
    $('#close-button').css('left', columnWidth);

  }
  function isCategoryOpen() {
    return $('.category-content.category-content-open').is(':visible');
  }
  function getButtonName(src) {
    src = $(src);
    if (!src.hasClass('menu-button')) {
      src = src.parents('.menu-button');

    }
    return src.attr('id').replace('button', '');
  }
});
