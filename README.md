# `Foto Overlay`
O **Foto Overlay** é um script que possui o objetivo de recriar a mesma foto em forma de uma overlay, garantindo que toda a área disponivel para exibição da foto será devidamente preenchida mesmo que ela possua um tamanho inferior.

Confira um exemplo: [codepen.io/dyogophoenix/full/ZGpBGp](http://codepen.io/dyogophoenix/full/ZGpBGp/)

## Habilitando o script no seu site
Hospede os arquivos na pasta desejada, vá até o HTML da sua página e insira os seguintes códigos em seus respectivos lugares:

```html
<!-- Códigos CSS devem ser colocados acima do </head> -->
<link href="./css/foto-overlay.min.css" rel="stylesheet" />

<!-- Scripts devem ser colocados acima do </body> -->
<script src="./js/foto-overlay.min.js"></script>
<script>
  new fotoOverlay(); // new fotoOverlay('.foto-overlay');
</script>
```

## Usando o script
Após adicionar os códigos mostrados acima, o **Foto Overlay** estará habilitado e tudo o que você precisará fazer para chamá-lo é inserir o seguinte formato HTML para adicionar as fotos desejadas:

```html
<!-- Para fotos normais e gifs utilize esse código -->
<figure class="foto-overlay">
  <img src="URL_DA_FOTO">
</figure>