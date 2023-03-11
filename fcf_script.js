"use strict";

/* 
    Feral Cats Family - JavaScript file for the Form
    Author: Nadiia Yanuchevska

    Filename: fcf_script.js

    Feral Cats Family website:
       HTML files: fcf_about.html, fcf_adopt.html, fcf_best.html, fcf_feral.html, fcf_form.html, fcf_foster.html, fcf_help.html,                         fcf_history.html, index.html.
       CSS files: fcf_flex.css, fcf_flex.css, fcf_styles.css, fcf_styles1.css, fcf_styles2.css, fcf_styles3.css, fcf_styles4.css,                        fcf_styles5.css, fcf_styles6.css, fcf_styles7.css, fcf_styles8.css, reset.css.
       JS files: fcf_best_img.html, fcf_script.
*/

function updateTextMoney(val) {
    document.getElementById('textMoney').value=val; 
}

function redirect() {
    var option = document.getElementById("options").value;
    if(option=="fb_fund") {
        window.location.href = "https://www.facebook.com/donate/682976349283002/788891748566415";
        alert("Form submitted.");
    }
    else if(option=="go_fund") {
        window.location.href = "https://www.gofundme.com/f/feral-cats-society";
        alert("Form submitted.")
    }
    else {
        alert("Form submitted. Please etransfer your donation to feralcatsfamily@gmail.com.")
    }
}