
$(function () {
    
    resize();
    $(window).resize(function () {
        resize();
        $('.montage').masonry('reload');
    });
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
    setTimeout(function () {
        $('.montage').css('width', '82%').masonry('reload');
    }, 1000);

    $('.menu-button').click(function () {
        
        
        var name = $(this).attr('id').replace('button', '');
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
        $('.montage').masonry('reload');

    });

});

function resize() {
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