/*var divide = function (a,b) {
    if (b===0) {
        return 'нельзя делить на ноль';
    }
    return a/b;
};
alert (divide(14,2));*/

var action = function (a,b,act) {
    if(act==='+') {
        return a+b;
    }
    if(act==='-') {
        return a-b;
    }
    if(act==='*') {
        return a*b;
    }
    if(act==='/') {
        if(b===0) {
            return 'нельзя делить на ноль';
        }
        return a/b;
    }
    return 'выберите знак'
};