import '../components/web-components/todo-item.js';

const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: block;
            font-family: sans-serif;
            text-align: center;
        }
        button {
            border: none;
            cursor: pointer;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        
    </style>

    <h1 class='titulo'></h1>
    <form id="todo-input">
        <input class='prompt' type="text"></input>
        <button>+</button>
    </form>

    <ul id="todos" class="ul">
       
    </ul>

`; 

class TodoList extends HTMLElement {
    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        
        this.$todoList = this._shadowRoot.querySelector('ul');
        this.$input = this._shadowRoot.querySelector('input');

        this.$submitButton = this._shadowRoot.querySelector('button');
        this.$submitButton.addEventListener('click', this._addTodo.bind(this));
        
        this.$item1 = this._shadowRoot.querySelector('.item-1');
        this.$item2 = this._shadowRoot.querySelector('.item-2');
        this.$item3 = this._shadowRoot.querySelector('.item-3');
        
        this.$prompt = this._shadowRoot.querySelector('.prompt');
        this.$titulo = this._shadowRoot.querySelector('.titulo');

        this.$ul = this._shadowRoot.querySelector('.ul')
        
        this.$initialTodos = [
            { text: this.$item1, checked: false },
            { text: this.$item2, checked: false },
            { text: this.$item3, checked: false }]
        
    }

    _removeTodo(e) {
        this._todos.splice(e.detail, 1);
        this._renderTodoList();
    }

    _toggleTodo(e) {
        const todo = this._todos[e.detail];
        this._todos[e.detail] = Object.assign({}, todo, {
            checked: !todo.checked
        });
        this._renderTodoList();
    }

    _addTodo(e) {
        e.preventDefault();
        if(this.$input.value.length > 0){
            this._todos.push({ text: this.$input.value, checked: false });
            this._renderTodoList();
            this.$input.value = '';
        }
    }

    _renderTodoList() {
        this.$todoList.innerHTML = '';

        let _todos = this._todos ? this._todos : this.$initialTodos

        _todos.forEach((todo, index) => {
            let $todoItem = document.createElement('todo-item');

            $todoItem.setAttribute('text', todo.text);

            if(todo.checked) {
                $todoItem.setAttribute('checked', '');
            }

            $todoItem.setAttribute('index', index);

            $todoItem.addEventListener('onRemove', this._removeTodo.bind(this));
            $todoItem.addEventListener('onToggle', this._toggleTodo.bind(this));

            this.$todoList.appendChild($todoItem);
        });
    }


 

    set todos(value) {
        this._todos = value;
        this._renderTodoList();
    }

    get todos() {
        return this._todos;
    }

    get item1() {
        return this.getAttribute('item1');
    }

    get item2() {
        return this.getAttribute('item2');
    }

    get item3() {
        return this.getAttribute('item3');
    }

    get prompt() {
        return this.getAttribute('prompt');
    }

    get titulo() {
        return this.getAttribute('titulo');
    }

    static get observedAttributes() {
        return ['item1','item2','item3','prompt','titulo'];
    }

    connectedCallback() {
        
        var ul = this.$ul;
        var li1 = document.createElement('li');
        var li2 = document.createElement('li');
        var li3 = document.createElement('li');

        this.$item1 = this.item1; 
        this.$item2 = this.item2; 
        this.$item3 = this.item3; 


        this.$initialTodos = [
             		{ text: this.$item1, checked: false },
            		{ text: this.$item2, checked: false },
             		{ text: this.$item3, checked: false }]
        
        this._todos = this.$initialTodos
                     
        this._renderTodoList();        
        
        this.$prompt.placeholder = this.prompt; 
        this.$titulo.innerHTML = this.titulo; 
    }
}

window.customElements.define('todo-list', TodoList);