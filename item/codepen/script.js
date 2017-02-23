/*
	Ignore esse script, ele é utilizado apenas para criar o estilo do exemplo do codepen !
*/

(function() {

	function langText(lingua) {
		lang = {
			pt : {
				btnSM : 'Menor que a foto',
				btnOG : 'Tamanho original',
				btnMD : 'Zona segura',
				btnLG : 'Maior que a foto'
			},
			en : {
				btnSM : 'Smaller than photo',
				btnOG : 'Original Photo size',
				btnMD : 'Security Zone',
				btnLG : 'Bigger than photo'
			} 
		}
		if(lingua != '') {
			return lingua == 'pt-BR' ? lang.pt : lang.en;
		} else {
			return lang.pt;
		}
	}

	function createBTN(info) {
		var btn = document.createElement('button');
		btn.setAttribute('id',info.id);
		btn.innerHTML = info.text;

		return btn;
	}

	function addElement(lang) {
		var body = document.getElementsByTagName('BODY')[0];

		var section = document.createElement('section');
		section.setAttribute('class','intro');
		body.insertBefore(section,body.firstChild);

		var title = document.createElement('h1');
		title.innerHTML = 'Foto Overlay';
		section.appendChild(title);

		var btns = document.createElement('div');
		btns.setAttribute('class','btns');

		var btnSM = createBTN({ id : 'small', text : lang.btnSM });
		var btnOG = createBTN({ id : 'original', text : lang.btnOG });
		var btnMD = createBTN({ id : 'medium', text : lang.btnMD });
		var btnLG = createBTN({ id : 'large', text : lang.btnLG });
		
		btns.appendChild(btnSM);
		btns.appendChild(btnOG);
		btns.appendChild(btnMD);
		btns.appendChild(btnLG);
		section.appendChild(btns);
	}

	function btnExample() {

		var artigo = document.querySelector('.artigo');
		var size = artigo.getAttribute('data-size');		

		var btnSM = document.getElementById('small');
		var btnOG = document.getElementById('original');
		var btnMD = document.getElementById('medium');
		var btnLG = document.getElementById('large');

		switch(size) {
			case 'small':
		        btnSM.setAttribute('class', 'active');
		        break;
		    case 'original':
		        btnOG.setAttribute('class', 'active');
		        break;
		    case 'medium':
		        btnMD.setAttribute('class', 'active');
		        break;
		    case 'large':
		        btnLG.setAttribute('class', 'active');
		        break;
		    default:
		        btnLG.setAttribute('class', 'active');
		}

		btnSM.onclick = function() {
			this.setAttribute('class', 'active');
			btnOG.removeAttribute('class');
			btnMD.removeAttribute('class');
			btnLG.removeAttribute('class');
			artigo.setAttribute('data-size', 'small');
		}
		
		btnOG.onclick = function() {
			this.setAttribute('class', 'active');
			btnSM.removeAttribute('class');
			btnMD.removeAttribute('class');
			btnLG.removeAttribute('class');
			artigo.setAttribute('data-size', 'original');
		}
		
		btnMD.onclick = function() {
			this.setAttribute('class', 'active');
			btnSM.removeAttribute('class');
			btnOG.removeAttribute('class');
			btnLG.removeAttribute('class');
			artigo.setAttribute('data-size', 'medium');
		}
		
		btnLG.onclick = function() {
			this.setAttribute('class', 'active');
			btnOG.removeAttribute('class');
			btnMD.removeAttribute('class');
			btnSM.removeAttribute('class');
			artigo.setAttribute('data-size', 'large');
		}
	}



	window.onload = function() {		
		var lang = langText(navigator.language);
		addElement(lang);
		setTimeout(function() { btnExample(); }, 10);
	}

})();