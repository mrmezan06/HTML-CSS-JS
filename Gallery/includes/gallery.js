$(document).ready(function(){

    $('.gallery_thumbnails a').click(function(e){
        e.preventDefault();
        $('.gallery_thumbnails a').removeClass('selected');
        $('.gallery_thumbnails a').children().css('opacity','1');
        $(this).addClass('selected');
        $(this).children().css('opacity','0.4');

        var photo_caption = $(this).attr('title');
        var photo_fullsize = $(this).attr('href');
        var photo_preview = photo_fullsize.replace('_fullsize','_preview');

        $('.gallery_preview').html('<a href="'+photo_fullsize+'" title="'+photo_caption+'" style="background-image:url('+photo_preview+');"></a>');
        $('.gallery_caption').html('<p><a href="'+photo_fullsize+'" title="'+photo_caption+'">View larger</a></p><p>'+photo_caption+'</p>')
    });

});