import {html, LitElement, TemplateResult} from "lit";
import {customElement, property} from "lit/decorators.js";
import Styles from "./reiseAdvanced.lit.scss";

export type Reise = {
    id: string;
    name: string;
    description: string;
    imgSrc: string;
    price: number;
}

@customElement("reise-advanced")
export class ReiseComponentAdvanced extends LitElement {

    static styles = Styles;

    @property({attribute: "reise", type: Object})
    reise: Reise;

    render(): TemplateResult {
        return html`
            <div class="reise-tile" @click=${this.handleClick}>
                <div class="tile-top">
                    <h2 class="headline">${this.reise.name}</h2>
                    <img src=${this.reise.imgSrc} alt=${this.reise.name}>
                    <div class="description">${this.reise.description}</div>
                </div>
                <div class="tile-bottom">
                    <div class="price">${this.reise.price},-</div>
                </div>
            </div>
        `;
    }

    private handleClick(): void {
        this.dispatchEvent(new SelectEvent(this.reise.id));
    }
}

export type SelectData = { reiseId: string };
export const SELECT_EVENT_REISE = "select-reise";

export class SelectEvent extends CustomEvent<SelectData> {
    constructor(reiseId: string) {
        super(SELECT_EVENT_REISE, {bubbles: true, composed: true, detail: {reiseId: reiseId}});
    }
}