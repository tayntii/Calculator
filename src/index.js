$(document).ready (function () {

    var calc = $('.calculator');
    var calcKeys = calc.find('.calc_key');
    var calcDisplay = calc.find('.calc_display');
    var calcButton = calc.find('.calc_button');
    var calcAdd = calc.find('.calc_add');
    var calcMult = calc.find('.calc_mult');
    var calcBackspace = calc.find('.calc_backspace');
    var calcClear = calc.find('.calc_clear');
    var calcEqual = calc.find('.calc_key--equal');
    var calcPow = calc.find('.calc_sqr');
    var calcPower = calc.find('.calc_key--power');
    var calcSqrt = calc.find('.calc_sqrt');
    var power = true;
    

    calcKeys.each (function () {
        var current = $(this).attr('value');
        $(this).text(current);
    });

    calcButton.on('click', function() {
        calcDisplay.val(calcDisplay.val() + $(this).attr('value'));
    });

    calcAdd.on('click', function() {
        if (calcDisplay.val().slice(-1) === '+'|| calcDisplay.val().slice(-1) === '-')
            calcDisplay.val(calcDisplay.val().substring(0, calcDisplay.val().length - 1) + $(this).attr('value'));
        else
            calcDisplay.val(calcDisplay.val() + $(this).attr('value'));
    });

    calcMult.on('click', function() {
        if (calcDisplay.val() === ''|| calcDisplay.val() === '+' || calcDisplay.val() === '-')
            calcDisplay.val(calcDisplay.val());
        else
        if (calcDisplay.val().slice(-1)  === '+'|| calcDisplay.val().slice(-1) === '-' || calcDisplay.val().slice(-1) === '*'|| calcDisplay.val().slice(-1) === '/')
            calcDisplay.val(calcDisplay.val().substring(0, calcDisplay.val().length - 1) + $(this).attr('value'));
        else
            calcDisplay.val(calcDisplay.val() + $(this).attr('value'));  
    });


    calcBackspace.on ('click', function () {
        calcDisplay.val(calcDisplay.val().substring(0, calcDisplay.val().length - 1));
    });

    calcClear.on ('click', function() {
        calcDisplay.val('');
    });

    calcEqual.on ('click', function() {
        calcDisplay.val(eval(calcDisplay.val()));
    });

    calcPow.on('click', function() {
        calcDisplay.val(Math.pow(eval(calcDisplay.val()),2));
    });

    calcSqrt.on('click', function(){
        calcDisplay.val(Math.sqrt(eval(calcDisplay.val())));
    })

    calcPower.on('click',function() {
        if (power === true) {
            $(calc).css('background', 'grey');
            $(calcKeys).css('background', 'grey');
            $(calcKeys).prop('disabled',true);
            $(calcKeys).css('cursor', 'default');
            $(calcPower).prop('disabled', false);
            $(calcPower).css('cursor','pointer');
            $(calcPower).css('background','green');
            calcPower.text('ON');
            $('body').css('background','black');
            calcDisplay.val('');
            $(calcDisplay).css('background','grey');
            power = false;
        } else {
            $(calc).css('background', 'rgb(184, 150, 228)');
            $(calcKeys).css('background', 'rgb(228, 217, 245)');
            $(calcPower).css('background','green');
            $(calcKeys).prop('disabled',false);
            (calcKeys).css('cursor', 'pointer');
            $('body').css('background','none');
            $(calcDisplay).css('background','whitesmoke');
            calcPower.text('OFF');
            power = true;
        }
    });
});