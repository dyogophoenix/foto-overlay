/*! ===================================================
    # Script Name: Foto Overlay
    # Version: v4.0
    # Create in: 28/03/2015
    # Update in: 02/11/2017
    # Author: Dyogo Phoenix
    # Author URL: dyogophoenix.com.br
    # More info: dyogophoenix.github.io/foto-overlay/
    # License: MIT License
==================================================== */

function fotoOverlay(t){var e=window,a=document,r=this,o={},n=t&&"object"==typeof t?t:a.querySelectorAll(t?t:".foto-overlay");r.start=function(){o.css&&delete o.css,o.css=r.myCSS();for(var t=0;t<n.length;t++){var e=n[t];e.number=t,r.check(e)}},r.myCSS=function(){var t=a.querySelector("style[data-fo-css]");if(!t){var t=a.createElement("style");t.setAttribute("data-fo-css","foto-overlay"),a.querySelector("head").appendChild(t)}return t},r.addCSS=function(t){if(o.css){var e=a.createTextNode(t);o.css.appendChild(e)}},r.check=function(t){for(var e=0;e<t.childNodes.length;e++){var a=t.childNodes[e].tagName;if(a=a?a.toLowerCase():null,"img"===a){t.childNodes[e].number=e,r.exec(t,t.childNodes[e]);break}}},r.Number=function(t,e,a,r){r=r>0?r:1;for(var o=0;o<n.length;o++)n[o].getAttribute("data-foto-overlay")&&r++;!t.getAttribute("data-foto-overlay")&&a&&a(t,e,r)},r.exec=function(t,e){r.Number(t,e,function(t,e,a){t.setAttribute("data-foto-overlay",a);var o=e.getAttribute("src");r.addCSS(t.tagName.toLowerCase()+'[data-foto-overlay="'+a+"\"] { background-image: url('"+o+"') !important; }"),r.config(t,e)})},r.config=function(t,e){o.$els||(o.$els=[]),o.$els[t.number]=o.$els[t.number]?o.$els[t.number]:0,o.$els[t.number]!=e.clientWidth&&(o.$els[t.number]=e.clientWidth,t.clientWidth>=e.naturalWidth?t.getAttribute("data-expand")||t.setAttribute("data-expand","true"):t.getAttribute("data-expand")&&t.removeAttribute("data-expand")),setTimeout(function(){r.config(t,e)},400)},r.init=function(){"complete"!==a.readyState?e.addEventListener("load",function(){n.length>0&&r.start()}):n.length>0&&r.start()},r.init()}