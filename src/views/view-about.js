import { LitElement, html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';
import './components/should-update';
class ViewAbout extends PageViewElement {


    static get styles() {
        return css `
      :host {
        display: block;
      }
    `;
    }

    render() {
        return html `
      <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css">
      <div class="row justify-content-center">
        <div class="col-3">
          <h3 class="text-center">Servicio de Lorem Picsum</h3>
          <img src="https://picsum.photos/300/200" alt="imagen" class="border border-primary m-auto">
        </div>
      </div>    
      <hr>  
      <should-update></should-update>
       
    `;
    }
}

customElements.define('view-about', ViewAbout);