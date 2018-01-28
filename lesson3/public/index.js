var imyaFunkcii = function (vvodimoeZnachenie) {
    var vremenaGoda = ['зима','весна','лето','осень'];
    if (vremenaGoda.indexOf(vvodimoeZnachenie)=== -1) {
        return false;
    }
    return true;
};
alert(imyaFunkcii('зиа'))
