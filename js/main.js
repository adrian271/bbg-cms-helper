$(document).ready(function(){
    var templateEng = function($selection) {
        var template = $selection.find('template').html();
        var output = template;
        $selection.find('label').each(function(){
          var replacer = $(this).find('input').val();
          var word = $(this).text();
          var regExp = new RegExp("{{"+word+"}}","gim");
          output = output.replace(regExp,replacer);
        });
        return output;
    }

    $('label').each(function(){
        var labelName = $(this).text();
        $(this).append('<input id="'+labelName+'" type="text">');
    });
    $('section').each(function(){
        var output = templateEng($(this));
        //console.log(output)
        $(this).find('.copy-text').text(output);
        $(this).find('.live-example').html(output);
    });
    $('body').on('keyup','input',function(){
        var target = $(this).parents('section').eq(0);
        var changed = templateEng(target);
        target.find('.copy-text').text(changed);
        target.find('.live-example').html(changed);
    });





    //Fill with sample dummydata
    var counter = 0
    $('#Photo-Left-w-text input').each(function(){
        $(this).val(dummy[counter]);
        console.log(dummy[counter]);
        counter++;
    });

    $('section').each(function(){
        var output = templateEng($(this));
        console.log(output)
        $(this).find('.copy-text').text(output);
        $(this).find('.live-example').html(output);
    });
});