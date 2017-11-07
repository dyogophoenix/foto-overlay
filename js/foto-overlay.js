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

function fotoOverlay( elm ) {
	var w = window, d = document, self = this, opts = {},
		ctn = elm && typeof elm === 'object' ? elm : d.querySelectorAll( (elm ? elm : '.foto-overlay') );

	// Iniciando o Foto Overlay se o elemento existir
	self.start = function() {
		if(opts.css) delete opts.css;
		opts.css = self.myCSS();
		for (var i = 0; i < ctn.length; i++) {
			var atual = ctn[i]; atual.number = i;
			self.check(atual);
		}
	}

	// Criando um <style> exclusivo para incluir o CSS do script
	self.myCSS = function(css) {
		var style = d.querySelector('style[data-fo-css]');
		if(!style) {
			var style = d.createElement('style');
				style.setAttribute('data-fo-css', 'foto-overlay');
				d.querySelector('head').appendChild(style);
		}
		return style;
	}

	// Adiciona o código CSS no <style> exclusivo
	self.addCSS = function(texto) {
		if(opts.css) {
			var code = d.createTextNode(texto);
			opts.css.appendChild(code);
		}
	}

	// Checa se existe <img> dentro do elemento
	self.check = function(el) {
		for (var i = 0; i < el.childNodes.length; i++) {
			var tag = el.childNodes[i].tagName;
				tag = tag ? tag.toLowerCase() : null;
				if(tag === 'img') {
					el.childNodes[i].number = i;
					self.exec(el,el.childNodes[i]);
					break;
				}
		}
	}

	self.Number = function(el, img, callback, count) {
		count = count > 0 ? count : 1;
		for (var i = 0; i < ctn.length; i++) {
			if( ctn[i].getAttribute('data-foto-overlay') ) { count++; }
		}
		if(!el.getAttribute('data-foto-overlay') && callback) { callback(el,img,count); }
	}

	// Inicia o script com todas as configurações verificadas
	self.exec = function(el, img) {
		self.Number(el, img, function(el, img, num) {
			el.setAttribute('data-foto-overlay', num);
			var photo = img.getAttribute('src');
			self.addCSS(el.tagName.toLowerCase() +'[data-foto-overlay="'+ num +'"] { background-image: url(\''+ photo +'\') !important; }');
			self.config(el,img);
		});		
	}

	// Configura o efeito no elemento correspondente
	self.config = function(el, img) {
		if(!opts.$els) opts.$els = [];
			opts.$els[el.number] = opts.$els[el.number] ? opts.$els[el.number] : 0;

		if( opts.$els[el.number] != img.clientWidth ) {
			opts.$els[el.number] = img.clientWidth;
			if(el.clientWidth >= img.naturalWidth) {
				if(!el.getAttribute('data-expand')) el.setAttribute('data-expand', 'true');
			} else {
				if(el.getAttribute('data-expand')) el.removeAttribute('data-expand');
			}
		}
		
		setTimeout(function() {
			self.config(el, img);
		}, 400);
	}

	// Verifica se o "document" já foi carregado antes de começar
	self.init = function() {
		if( d.readyState !== 'complete' ) {
			w.addEventListener('load', function(e) {
				if(ctn.length > 0) self.start();
			});
		} else {
			if(ctn.length > 0) self.start();
		}
	}
	
	// Iniciando o script
	self.init();
}