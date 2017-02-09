# CNIR - frontend

Projeto com templates do IDG para o CNIR.

## Dependências:

- Bootstrap
- Font Awesome

## Páginas disponíveis:

- [página interna](https://augustoalmeida.github.io/cnir/)
- [página de login](https://augustoalmeida.github.io/cnir/login.html)
- [página de acessibilidade](https://augustoalmeida.github.io/cnir/acessibilidade.html)

## Classes reusáveis:

`.titulo` - Usar em títulos com destaque.

`.subtitulo` - Usar em subtítulos com borda separadora.

`.table` - Usar para tabelas.

## Componentes reusáveis:

**Submenu**

```html
<nav>
  <div class="submenu">
    <ul>
      <li>
        <a href="">
          Nome do submenu
          <br>
          <i class="fa fa-check fa-2x" aria-hidden="true"></i>
        </a>
      </li>
      ...
    </ul>
    <button type="button" class="btn btn-link" data-toggle="popover" data-container="body" data-placement="left" data-content="texto de ajuda">
      <i class="fa fa-question-circle fa-lg" aria-hidden="true"></i>
      <span class="sr-only">Ajuda</span>
    </button>
  </div>
</nav>
```

**Paginador**

```html
<nav aria-label="Page navigation" class="paginacao">
  <div class="row">
    <div class="col-md-7">
      <ul class="pagination">
        <li><a href="#" aria-label="Previous" class="first"><span>&laquo; anterior</span></a></li>
        <li class="active"><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        ...
        <li><a href="#" aria-label="Next" class="last"><span>próximo &raquo;</span></a></li>
      </ul>
    </div>
    <div class="col-md-5 text-right">
      <div class="form-inline">
        <span>Exibir</span>
        &nbsp;
        <select>
          <option>10</option>
        </select>
        &nbsp;
        <span>Itens por página</span>
      </div>
    </div>
  </div>
</nav>
```
