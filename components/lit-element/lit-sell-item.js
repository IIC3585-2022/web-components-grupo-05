import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { litSellItemStyle } from "../../styles/lit-sell-item.css.js";

export default class LitSellItem extends LitElement {
    static get styles() {
        return [litSellItemStyle];
    }
    
    appendTo(htmlElementId) {
        let element = document.getElementById(htmlElementId);
        element.appendChild(this);
    }

    connectedCallback() {
        super.connectedCallback()        
        this.name = this.getAttribute('name');
        this.imageUrl = this.getAttribute('imageUrl');
        this.price = this.getAttribute('price');
        this.discount = this.getAttribute('discount');
        this.discountPrice = this.getAttribute('discountPrice');
        this.rating = this.getAttribute('rating');
    }

    render() {
        return html`
        <head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        </head>
        
        <div class="card">
            <div class="sell-item-discount">-${this.discount}%</div>
            <div class="image-container"><img src="${this.imageUrl}"></img></div>
            <div class="sell-item-name-rating">
                <h4 class="sell-item-name">${this.name}</h4>
                <h4 class="sell-item-rating"><i class="material-icons">star</i>${this.rating}</h4>
            </div>
            <div class="sell-item-price-container">
                <div> <h5 class="sell-item-discount-price">$${this.discountPrice}</h5> </div>
                <div> <h6 class="sell-item-price">Precio normal: $${this.price}</h6> </div>
            </div>
        </div>
        `;
    }
}
