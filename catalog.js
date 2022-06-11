const template = document.createElement('template');

template.innerHTML = `
  <style>
    .container{
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        max-width: 100%;
        max-height: 100%;
        position: absolute;
        display:grid;
        background-color: #C7C9A0;
    }

    .catalog {
        width: 100vw;
        display: grid;
        grid-template-columns: repeat(auto-fill, 345px);
        grid-auto-rows: 15px;
        position: absolute;
        margin-top: 60px;
        left: 50%;
        transform: translateX(-50%);
        justify-content: center;
        background-color: #C7C9A0;
    }
  </style>

  <div class="container">
    <div id="catalog" class="catalog">
      <slot></slot>
    </div>
  </div>
`;

export default class Catalog extends HTMLElement {
  constructor() {
    super();

    this.$host = document.querySelector('#host');

    this.$host.appendChild(template.content.cloneNode(true));

    this.$host.addEventListener('slotchange', event => console.log(event));
  }
}