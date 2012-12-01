
$(function () {

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
        //var allBricks = $('#.img-box img');
        //allBricks.css('width', allBricks[0].clientWidth.toString());
        
        var name = $(this).attr('id').replace('button', '');
        $('.category-content-content').hide();
        console.log('#' + name + 'content');
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