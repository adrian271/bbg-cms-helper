$(document).ready(function(){
    var templateEng = function($selection) {
        var template = $selection.find('script').html();
        var output = template;
        $selection.find('label').each(function(){
          var replacer = $(this).find('input').val();
          var word = $(this).text();
          var regexp = new RegExp("{{"+word+"}}","gim");
          output = output.replace(regexp,replacer);
        });
        return output;
    }

    $('label').each(function(){
        var what = $(this).text();
        $(this).append('<input id="'+what+'" type="text">');
        $('input').val('test');
    });
    $('section').each(function(){
        var output = templateEng($(this));
        console.log(output)
        $(this).find('.copy-text').text(output);
        $(this).find('.live-example').html(output);
    });
});