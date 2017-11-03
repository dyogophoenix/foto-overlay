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

function fotoOverlay(e){var t=window,a=document,n=this,r={},o=e&&"object"==typeof e?e:a.querySelectorAll(e?e:".foto-overlay");n.start=function(){r.css&&delete r.css,r.css=n.myCSS();for(var e=0;e<o.length;e++){var t=o[e];t.number=e,n.check(t)}},n.myCSS=function(){var e=a.createElement("style");return e.setAttribute("data-css","foto-overlay"),a.querySelector("head").appendChild(e),e},n.addCSS=function(e){if(r.css){var t=a.createTextNode(e);r.css.appendChild(t)}},n.check=function(e){for(var t=0;t<e.childNodes.length;t++){var a=e.childNodes[t].tagName;if(a=a?a.toLowerCase():null,"img"===a){e.childNodes[t].number=t,n.exec(e,e.childNodes[t]);break}}},n.exec=function(e,t){var a=e.number+1;e.setAttribute("data-foto-overlay",a);var r=t.getAttribute("src");n.addCSS(e.tagName.toLowerCase()+'[data-foto-overlay="'+a+"\"] { background-image: url('"+r+"') !important; }"),n.config(e,t)},n.config=function(e,t){r.$els||(r.$els=[]),r.$els[e.number]=r.$els[e.number]?r.$els[e.number]:0,r.$els[e.number]!=t.clientWidth&&(r.$els[e.number]=t.clientWidth,e.clientWidth>=t.naturalWidth?e.getAttribute("data-expand")||e.setAttribute("data-expand","true"):e.getAttribute("data-expand")&&e.removeAttribute("data-expand")),setTimeout(function(){n.config(e,t)},400)},n.init=function(){"complete"!==a.readyState?t.addEventListener("load",function(){o.length>0&&n.start()}):o.length>0&&n.start()},n.init()}