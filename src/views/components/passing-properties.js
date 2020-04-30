import { LitElement, html } from 'lit-element';

class PassingProperties extends LitElement {
    static get properties() {
        return {
            author: { type: Object },
            books: {  type: Array }
        }
    }

    constructor() {
        super();
        this.author = { name: 'G.R.R. Martin', age: 70 };
        this.books = [
            { title: 'Game of Thrones', pages: 697 },
            { title: 'The Ice Dragon', pages: 521 }
        ];
    }
    render() {
        return html `
      <author-profile
        .author=${this.author}
        .books=${this.books}>
      </author-profile>
    `;
    }
}

customElements.define('passing-properties', PassingProperties);

class AuthorProfile extends LitElement {
    static get properties() {
        return {
            author: { type: Object },
            books: { type: Array },
        };
    }

    render() {
            return html `
        <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css">
        <h5>Author: ${ this.author.name }</h5>
        <ul>${this.books.map(book => html`<li>${book.title}</li>`)}</ul>
    `;
  }
}

customElements.define('author-profile', AuthorProfile);