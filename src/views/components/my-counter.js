import { LitElement, html } from 'lit-element';
import './feedback-element';
export class MyCounter extends LitElement {

    static get properties() {
        return {
            counter: { type: Number }
        };
    }

    constructor() {
        super();
        this.counter = 0;

    }

    render() {
        return html `
         <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css">
         <div class="row justify-content-center">
             <div class="col-12">
                 <h3 class="text-center">Llevas ${this.counter} clicks!!!</h3>
             </div>
            <div class="col-2">
                <button @click="${this.incrementar}" class="btn btn-primary btn-block" style="font-weight: 900;">+1</button>
            </div>
            <div class="col-2">
                <button @click="${this.decrementar}" class="btn btn-primary btn-block" style="font-weight: 900;">-1</button>
            </div>
        </div>
        <feedback-element id="feedback"></feedback-element>
        `;
    }
    incrementar() {
        this.counter++;
        if (this.counter == 5) {
            this.shadowRoot.getElementById('feedback').open('Has llegado a 5 clicks');
        }
    }
    decrementar() {
        this.counter--;
        if (this.counter == 0) {
            this.shadowRoot.getElementById('feedback').open('Has reseteado los clicks');
        }
    }
}
customElements.define('my-counter', MyCounter);