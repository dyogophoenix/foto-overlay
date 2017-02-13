/*! ===================================================
    # Script Name: Foto Overlay
    # Version: v3.0
    # Create in: 28/03/2015
    # Update in: 13/02/2017
    # Author: Dyogo Phoenix
    # Author URL: http://dyogophoenix.com.br/
    # More info: https://dyogophoenix.github.io/foto-overlay/
    # License: MIT License
==================================================== */

(function() { 'use strict',

	// Chamando o fotoOverlay
	this.fotoOverlay = function(elem) {
		var w = window, d = document, self = this, options = {},
		container = elem ? elem : '.foto-overlay', ctn = d.querySelectorAll(container);
		
		// Separando os elementos para configuração individual
		fotoOverlay.prototype.start = function() {
			if(options.css) delete options.css;
			options.css = self.myCSS();
			for (var i = ctn.length - 1; i >= 0; i--) {
				var atual = ctn[i];
				atual.number = i;
				self.check(atual);
			}
		}

		// Criando o <style> personalizado para a função
		fotoOverlay.prototype.myCSS = function(css) {
			var style = d.createElement('style');
				style.setAttribute('data-css', 'foto-overlay');
			d.querySelector('head').appendChild(style);
			return style;
		}

		// Adicionando o texto dentro do <style>...</style>
		fotoOverlay.prototype.addCSS = function(texto) {
			if(options.css) {
				var code = d.createTextNode(texto);
				options.css.appendChild(code);
			}
		}

		// Checando se os elementos possuem <img> como filho
		fotoOverlay.prototype.check = function(elem) {
			for (var i = 0; i < elem.childNodes.length; i++) {
				if(elem.childNodes[i].tagName == 'IMG') {
					elem.childNodes[i].number = i;
					self.init(elem,elem.childNodes[i]);
					break;
				}
			}
		}
		
		// Iniciando a inserção no HTML e CSS
		fotoOverlay.prototype.init = function(elem, img) {
			var num = elem.number + 1;
			elem.setAttribute('data-foto-overlay', num);
			var photo = img.getAttribute('src');
			self.addCSS(container +'[data-foto-overlay="'+ num +'"] { background-image: url(\''+ photo +'\') !important; }');
			self.config(elem,img);
		}

		// Checando se o elemento é maior ou menor que o tamanho original da imagem
		fotoOverlay.prototype.config = function(elem, img, width) {
			var width = width || 0;

			if(width != img.clientWidth) {	
				width = img.clientWidth;
				if(elem.clientWidth >= img.naturalWidth) {
					elem.setAttribute('data-effect', 'true');
				} else {
					elem.setAttribute('data-effect', 'false');
				}			
			}
			
			setTimeout(function() { self.config(elem, img, width); }, 10);
		}

		// Checando se o elemento existe antes de iniciar a função
		if(ctn.length > 0) self.start();
	}
})();