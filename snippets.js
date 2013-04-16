"use strict";

//
// Converts a hex to rgb string, or to a rgba string if alpha parameter was provided
// [original source: http://www.jquery4u.com/jquery-functions/jquery-convert-rgb-hex-color/]
//
var hexToRgb = function(hex, alpha){
    
    var cutHex = function(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h};

    var r = parseInt((cutHex(hex)).substring(0,2),16),
        g = parseInt((cutHex(hex)).substring(2,4),16),
        b = parseInt((cutHex(hex)).substring(4,6),16),
        a = alpha ? ',' + alpha : '';
    return r + ',' + g + ',' + b + '' + a;
};
