"use strict";

/*
    Feral Cats Family - JavaScript file for generating images in Best Moments Page
    Author: Nadiia Yanuchevska

    Filename: fcf_best_img.js

    Feral Cats Family website:
       HTML files: fcf_about.html, fcf_adopt.html, fcf_best.html, fcf_feral.html, fcf_form.html, fcf_foster.html, fcf_help.html,                         fcf_history.html, index.html.
       CSS files: fcf_flex.css, fcf_flex.css, fcf_styles.css, fcf_styles1.css, fcf_styles2.css, fcf_styles3.css, fcf_styles4.css,                        fcf_styles5.css, fcf_styles6.css, fcf_styles7.css, fcf_styles8.css, reset.css.
       JS files: fcf_best_img.html, fcf_script.
*/

var img;

// The cats' name array:
var names = ['Tallstar', 'Toadstep', 'Feathertail', 'Tux', 'Archie', 'Badger'];
// The number of images of each cat:
var num = [6, 2, 2, 4, 3, 2];

var width;
var height;

// Function return the string for the source of image:
function img_src(q) {
    return "cat3/cat3"+q+".webp";
}
// Function return the string for the alternative of image:
function img_alt(n, k) {
    return names[n]+k;
}

for(var i=1; i<=num.length; i++) {
    for(var a=0; a<=num[i-1]; a++)  {
        img = document.getElementById("p3"+i+a)
        img.src = img_src(i*10 + a);
        img.alt = img_alt(i-1, a);  
        
        // This code works for Firefox but not for Chrome:
        width=img.NaturalWidth;
        height=img.NaturalHeight;
        if(width < height)  img.className = 'vert';  
    }
} 