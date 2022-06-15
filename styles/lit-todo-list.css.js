import { css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export const litToDoListStyle = css`
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

`