import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { litTodoItemStyle } from "../../styles/lit-todo-item.css.js";

export class LitToDoItem extends LitElement {
    static get properties() {
        return {
            item: {type: String},
            deleteItem: {type: Function},
        };
    }

    static get styles() {
        return [litTodoItemStyle];
    }

    render() { 
        return html`
            <li class="item ToDoItem">
                <input type="checkbox">
                <label class="ToDoItem-Text">${this.item}</label>
                <button class="ToDoItem-Delete" @click=${this.deleteItem}>-</button>
            </li>
        `;
    }
}

customElements.define('lit-todo-item', LitToDoItem)
