# `Foto Overlay`
O <b>Foto Overlay</b> é um plugin [JQUERY](https://jquery.com/) que cria uma overlay usando a mesma foto para que ela ocupe todo o espaço necessário mesmo possuindo tamanho menor.

# {Demo}(http://jsfiddle.net/dyogophoenix/j9q5kLgg)

## Habilitando o plugin em seu site
Primeiramente hospede o plugin em seu site e depois habilite-o em sua página inserindo os seguintes códigos em seus respectivos lugares:

```html
<!-- Códigos CSS devem ser colocados acima do </head> -->
<link href="./css/foto-overlay.css" rel="stylesheet" />

<!-- Scripts devem ser colocados acima do </body> -->
<script src="./js/foto-overlay.js"></script>
<script>
  $('.foto-overlay').fotoOverlay();
</script>
```

## Exibindo sua imagem com Foto Overlay
Após habilitar o <b>Foto Overlay</b> em seu site insira suas imagens da seguinte maneira:

```html
<figure class="foto-overlay">
  <img src="URL DA FOTO">
</figure>
```

Caso o <b>Foto Overlay</b> não funcione, verifique se o [JQUERY](https://jquery.com/) está habilitado na sua página.
