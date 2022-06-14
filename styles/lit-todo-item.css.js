import { css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export const litTodoItemStyle = css`

    :host {
        display: block;
        font-family: sans-serif;
    }
    .completed {
        text-decoration: line-through;
    }
    button {
        border: none;
        cursor: pointer;
    }

`