import { LitElement, html } from 'lit-element';

class ShouldUpdate extends LitElement {

    static get properties() {
        return {
            active: { type: Boolean },
            count: { type: Number },
            title: { type: String },
        };
    }

    constructor() {
        super();
        this.title = "Contador";
        this.active = true;
        this.count = 0;

        setInterval(() => {
            this.count += 1;
        }, 1000);
    }

    render() {
        return html `
      <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css">
      <div class="row justify-content-center">
        <div class="col-2">
          ${this.title} : ${this.count}
          <button @click="${() => this.active = !this.active}" class="btn btn-primary">
            Probar
          </button>
        </div>
      </div>
    `;
    }
    shouldUpdate(changedProperties) {
        return this.active;
    }

}

customElements.define('should-update', ShouldUpdate);