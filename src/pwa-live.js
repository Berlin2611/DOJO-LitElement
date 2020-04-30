import { LitElement, html, css } from 'lit-element';
import './views/view-home';
import './views/view-about';
import './views/components/passing-properties';
import 'dile-tabs/dile-tabs';
import 'dile-pages/dile-pages';
export class PwaLive extends LitElement {

    static get styles() {
        return css `
        :host{
            display: block;
            --dile-tab-background-color: #000000;
            --dile-tab-selected-background-color: #ffffff;
            --dile-tab-selected-text-color: #000000;
            --dile-tab-text-color: #ffffff;
        }
        h2{
            font-weight: 300;
            color: #ffffff;
            margin-top: 5px;
        }
        .margen{
            margin-left: 600px;
            margin-top: 6px
        }
        .page{
            display: none;
        }
        .page[active] {
            display: block;
          }
        `;
    }


    static get properties() {
        return {
            selected: { type: String },
        };
    }

    constructor() {
        super();
        this.selected = 'home';
    }

    render() {
        return html `
         <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css">
         <nav class="row bg-primary">
             <div class="col-3 mr-5">
                 <h2 class=""> My App </h2>
             </div>
             <div class="col-8">
                <dile-tabs selected="${this.selected}" attrForSelected="name" @dile-tabs-selected-changed="${this.selectedChanged}" class="margen">
                    <dile-tab name="home">Home</dile-tab>
                    <dile-tab name="about">About</dile-tab>
                </dile-tabs>
            </div>
        </nav>
                <dile-pages selected="${this.selected}" attrForSelected="name">
                    <view-home name="home" ?active="${this.selected === 'home'}"></view-home>
                    <view-about name="about" ?active="${this.selected === 'about'}"></view-about>
                </dile-pages> 
        `;
    }
    selectedChanged(e) {
        this.selected = e.detail;
    }
}
customElements.define('pwa-live', PwaLive);