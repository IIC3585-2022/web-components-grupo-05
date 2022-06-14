import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { litToDoListStyle } from "../../styles/lit-todo-list.css.js";
import './lit-todo-item.js';

export default class LitToDoList extends LitElement {
    static get properties() {
        return {
            list: {type: Array},
            todo: {type: String},
            item1: {type: String},
            item2: {type: String},
            item3: {type: String},
            prompt: {type: String},
            titulo: {type: String}
        };
    }

    connectedCallback() {
        super.connectedCallback()        

        this.list = [
            this.todoItem(this.item1),
            this.todoItem(this.item2),
            this.todoItem(this.item3)
        ];
        this.todo = '';
    }

    static get styles() {
        return [litToDoListStyle];
    }

    todoItem(todo) {
        return {todo}
    }

    createNewToDoItem(e) {
        e.preventDefault();
        this.list = [
            ...this.list,
            this.todoItem(this.todo)
        ];
        this.todo = '';
    }
    
    handleKeyPress(e) {
        if (e.target.value !== '') {
            if (e.key === 'Enter') {
                this.createNewToDoItem();
            }
        }
    }
    
    handleInput(e) {
        this.todo = e.target.value;
    }
    
    // this is now being emitted back to the parent from the child component
    deleteItem(indexToDelete) {
        this.list = this.list.filter((toDo, index) => index !== indexToDelete);
    }
    
    render() {
        return html`
            <h1 class='titulo'>${this.titulo}</h1>
            <form id="todo-input">
                <input 
                    class='prompt' 
                    type="text"
                    .value=${this.todo}
                    @input=${this.handleInput}
                    @keypress=${this.handleKeyPress}
                    placeholder=${this.prompt}
                ></input>
                <button @click=${this.createNewToDoItem}>+</button>
            </form>
        
            <ul id="todos" class="ul">
                ${this.list.map((item, key) => {
                    return html`
                        <lit-todo-item
                            item=${item.todo}
                            .deleteItem=${this.deleteItem.bind(this, key)}
                        ></lit-todo-item>
                    `;
                }
                )}
            </ul>
        `;
    }
};
