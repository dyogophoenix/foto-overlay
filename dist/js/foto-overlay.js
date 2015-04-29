/*  
    Nome do Plugin: Foto Overlay
    VersÃ£o do tema: 1.0
    Criado em: 28/03/2015
    Autor: Dyogo Phoenix
    Autor URL: http://dyogophoenix.com.br/
    Adquirido via: https://github.com/dyogophoenix/foto-overlay
    Uso sob a licença (CC) BY-NC-ND do Creative Commons 
    http://creativecommons.org/licenses/by-nd/4.0/deed.pt_BR
*/

(function( $ ){
  $.fn.fotoOverlay = function(opcoes) {
    var tagAtual = this;

    var padrao = { }; 

    var configurar = $.extend( {}, padrao, opcoes );

    $('head').append('<style type="text/css" data-f-over-css></style>');

    return this.each(function(index, element) {
      $(element).attr('data-foto-overlay', index);
      var overIMG = $( element ).children('img').attr('src');
      var addCSS = '*[data-foto-overlay="'+ index +'"]:before { background-image: url(\''+ overIMG +'\'); }';
      $('style[data-f-over-css]').append(addCSS);
    }); 

  }; 
})( jQuery );
