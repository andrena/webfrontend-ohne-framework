import {html, LitElement, TemplateResult} from "lit";
import {customElement, property} from "lit/decorators.js";
import Styles from "./reiseBasic.lit.scss";

@customElement("reise-basic")
export class ReiseComponentBasic extends LitElement {

    static styles = Styles;

    @property({attribute: "reise-id"})
    reiseId: string;
    @property({attribute: "name"})
    name: string;
    @property({attribute: "description"})
    description: string;
    @property({attribute: "img-src"})
    imgSrc: string;
    @property({attribute: "price", type: Number})
    price: number;

    render(): TemplateResult {
        return html`
            <div class="reise-tile" @click=${this.handleClick}>
                <div class="tile-top">
                    <h2 class="headline">${this.name}</h2>
                    <img src=${this.imgSrc} alt=${this.name}>
                    <div class="description">${this.description}</div>
                </div>
                <div class="tile-bottom">
                    <div class="price">${this.price},-</div>
                </div>
            </div>
        `;
    }

    private handleClick(): void {
        this.dispatchEvent(new SelectEvent(this.reiseId));
    }
}

export type SelectData = { reiseId: string };
export const SELECT_EVENT_REISE = "select-reise";

export class SelectEvent extends CustomEvent<SelectData> {
    constructor(reiseId: string) {
        super(SELECT_EVENT_REISE, {bubbles: true, composed: true, detail: {reiseId: reiseId}});
    }
}