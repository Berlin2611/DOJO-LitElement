import { LitElement, html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';
import './components/passing-properties';
import './components/my-counter';
class ViewHome extends PageViewElement {

    static get styles() {
        return css `
      :host {
        display: block;
      }
      h1{
        background-color: #ffffff;
        padding: 4px 2px; 
        border: 1px solid #000000;
      }
    `;
    }
    static get properties() {
        return {
            saludo: { type: String },
        };
    }

    constructor() {
        super();
        this.saludo = '¡Hola mundo!'
    }

    render() {
        return html `
         <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css">
         <div class="row justify-content-center mt-4">
           <div class="col-4">
             <h1 class="text-center"> ${this.saludo} </h1>
           </div>
         </div>
         <hr>
         <div class="row justify-content-center">
          <div class="col-2">
            <passing-properties></passing-properties>
          </div>
         </div>
         <hr>
         <div>
           <my-counter></my-counter>
         </div>
    `;
    }
}

customElements.define('view-home', ViewHome);