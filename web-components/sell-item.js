const template = document.createElement('template');

template.innerHTML = `
  <style>
    .card {
        margin: 10px 15px;
        padding: 0;
        border-radius: 16px;
        background-color: #E52142;
        display: flex;
        flex-direction: column;
        -webkit-box-shadow: 8px 8px 15px 5px rgba(0,0,0,0.5); 
        box-shadow: 8px 8px 15px 5px rgba(0,0,0,0.5);
        transition: transform .3s;
        grid-row-end: span 21;
        overflow: hidden;
    }

    .card:hover {
        transform: scale(1.05);
        cursor: pointer;
    }

    .image-container {
      height: 70%;
      width: 100%;
      border-bottom: 1px solid black;
    }

    img {
        max-width:100%;
        max-height:100%;
        height: 100%;
        width: 100%;
    }

    h4, h5, h6 {
      margin: 0;
      padding: 0;
    }

    .sell-item-discount-price {
      display: inline-block;
    }

    .sell-item-price {
      display: inline-block;
    }

    .sell-item-price-container {
      display: flex;
      justify-content: space-between;
      margin-left: 30px;
      margin-right: 20px;
      margin-bottom: 10px;
    }

    .sell-item-name-rating {
      display: flex;
      justify-content: space-between;
      margin-left: 20px;
      margin-right: 20px;
    }
  </style>
  
  <head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  </head>

  <div class="card">
      <div class="sell-item-discount"> </div>
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
  
  attributeChangedCallback(name, oldVal, newVal) {
    console.log("Attribute changed value");
  }

  connectedCallback() {
    console.log("Connected");
    // Anade imagen
    const imageElement = document.createElement('img');
    imageElement.setAttribute('src', this.imageUrl)
    this.$imageContainer.appendChild(imageElement);
    // Anade el nombre y otros atributos de texto
    this.$name.innerHTML = this.name;
    this.$discountPrice.innerHTML = `$${this.discountPrice}`;
    this.$price.innerHTML = `Precio normal: ${this.price}`;
    this.$rating.innerHTML += `${this.rating}`;
  }

  adoptedCallback() {
    console.log("Adopted");
  }

  disconnectedCallback() {
    console.log("Disconnected");
  }

  render() {
    console.log("rendering");
  }
}