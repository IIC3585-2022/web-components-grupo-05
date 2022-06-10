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
  </style>

    <div class="card">
        <div class="image-container">
        </div>
        <h3 class="sell-item-name"></h3>
    </div>
`;

export default class SellItem extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true)); 

    this.$sellItemName = this._shadowRoot.querySelector('.sell-item-name');
    this.$imageContainer = this._shadowRoot.querySelector('.image-container');
    
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
    switch (name) {
      case 'name':
        this.$sellItemName.innerHTML = newVal;
    }
  }

  connectedCallback() {
    console.log("Connected");
    const imageElement = document.createElement('img');
    imageElement.setAttribute('src', this.imageUrl)
    this.$imageContainer.appendChild(imageElement);
    this.$sellItemName.innerHTML = this.name;
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