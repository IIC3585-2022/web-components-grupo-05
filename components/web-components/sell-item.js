import { sellItemStyle } from "../../styles/sell-item.css.js";
const template = document.createElement('template');

template.innerHTML = `
  <style>
    ${sellItemStyle}
  </style>
  
  <head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  </head>

  <div class="card">
      <div class="sell-item-discount"><h4></h4></div>
      <div class="image-container">
      </div>
      <div class="sell-item-name-rating">
        <h4 class="sell-item-name"></h4>
        <h4 class="sell-item-rating"><i class="material-icons">star</i></h4>
      </div>
      <div class="sell-item-price-container">
        <div> <h5 class="sell-item-discount-price"></h5> </div>
        <div> <h6 class="sell-item-price"></h6> </div>
      </div>
  </div>
`;

export default class SellItem extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$name = this._shadowRoot.querySelector('.sell-item-name');
    this.$discount = this._shadowRoot.querySelector('.sell-item-discount');
    this.$discountPrice = this._shadowRoot.querySelector('.sell-item-discount-price')
    this.$price = this._shadowRoot.querySelector('.sell-item-price');
    this.$imageContainer = this._shadowRoot.querySelector('.image-container');
    this.$rating = this._shadowRoot.querySelector('.sell-item-rating');
  }

  appendTo(htmlElementId) {
    let element = document.getElementById(htmlElementId);
    element.appendChild(this);
  }

  get name() {
    return this.getAttribute('name');
  }

  get imageUrl() {
    return this.getAttribute('imageUrl');
  }

  get price() {
    return this.getAttribute('price');
  }

  get discountPrice() {
    return this.getAttribute('discountPrice');
  }

  get discount() {
    return this.getAttribute('discount');
  }

  get rating() {
    return this.getAttribute('rating');
  }

  static get observedAttributes() {
    return ['name', 'imageUrl', 'price', 'discountPrice', 'discount', 'rating'];
  }
  
  connectedCallback() {
    // Anade imagen
    const imageElement = document.createElement('img');
    imageElement.setAttribute('src', this.imageUrl)
    this.$imageContainer.appendChild(imageElement);
    // Anade el nombre y otros atributos de texto
    this.$name.innerHTML = this.name;
    this.$discountPrice.innerHTML = `$${this.discountPrice}`;
    this.$price.innerHTML = `Precio normal: ${this.price}`;
    this.$discount.innerHTML += `-${this.discount}%`;
    this.$rating.innerHTML += `${this.rating}`;
  }
}