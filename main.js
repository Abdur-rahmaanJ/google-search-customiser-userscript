// ==UserScript==
// @name         google search coloring
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  google.mu search customiser!
// @author       Abdur-Rahmaan Janhangeer
// @match        https://www.google.mu/*
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==
/*
var spans = $( "span" );
$( "p" ).find( spans ).css( "color", "red" );
Eyes-friendly 
*/
(function() {
    'use strict';

    $(document).ready(function(){
        jQuery.expr[':'].icontains = function(a, i, m) {
            return jQuery(a).text().toUpperCase()
                .indexOf(m[3].toUpperCase()) >= 0;
        };
        //$("h1, h2, h3, h4, h5, h6").css("background-color", "orange");
        $("h3.r").css("background-color", "#EEE");
        $("h3.r").css("padding", "10px");
        $("h3.r").css("border", "5px solid #AAA");
        //$("h3.r").css("border-radius", "30px");
        $("h3.r a").css("color", "#FF1aaf");
        $("b").css("color", "green");
        $("body").css("background-color", "#DDD");
        $("div").css("background-color", "#DDD");
        $("span").css("color", "#841c68");
        $("input").attr("placeholder", "                                                                         Janhangeer Search");
        //$('div:icontains("github")').css("background-color", "orange");
        //$('div:icontains("github")').append( "<p>search found</p>" );
    });

})();
