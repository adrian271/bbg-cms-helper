$(document).ready(function(){
    var templateEng = function($selection) {
        var template = $selection.find('script').html();
        console.log(template)
        var converted = "";
        $selection.find('label').each(function(){
            var inputVal = $(this).find('input').val(); console.log(inputVal);
            var labelname = $(this).text(); console.log(labelname);
            var handlebar = '{{'+labelname+'}}'; console.log(handlebar);
            var handlebarReg = new RegExp(handlebar, "gim"); console.log(handlebarReg);
            var template = $selection.find('script').html();  console.log(template);
            converted = template.replace(handlebarReg,inputVal);  console.log(converted);
            
            // var template = "{{HE}}LLO";
            // var inputVal="shit"
            // var labelname = "he";
            // var handlebar = '{{'+labelname+'}}';
            // var handlebarReg = new RegExp(handlebar, "gim");
            // converted = template.replace(handlebarReg,inputVal);
            console.log(converted)
        });
        return converted;
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