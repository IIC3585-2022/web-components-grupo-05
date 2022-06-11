import Button from "../components/web-components/my-button.js";
import Catalog from "../components/web-components/catalog.js";
import SellItem from "../components/web-components/sell-item.js";
import MyElement from "../components/lit-element/lit-test.js";
import LitSellItem from "../components/lit-element/lit-sell-item.js";

window.customElements.define('my-button', Button);
window.customElements.define('my-catalog', Catalog);
window.customElements.define('sell-item', SellItem);
window.customElements.define('my-element', MyElement);
window.customElements.define('lit-sell-item', LitSellItem);