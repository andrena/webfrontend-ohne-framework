import {html, LitElement, TemplateResult} from "lit";
import {customElement, property, state} from "lit/decorators.js";
import Styles from "./helloComponentLit.lit.scss";

@customElement("hello-lit")
export class HelloLit extends LitElement {

    static styles = Styles;

    @state()
    private counter: number;

    @property({attribute: "data-name"})
    name: string;

    constructor() {
        super();
        this.counter = 1;
    }

    render(): TemplateResult {
        const counterIndicator = this.counter > 1
            ? ` (${this.counter})`
            : "";
        return html`
            <span @click="${this.incrementCounter}">
                Hi ${this.name}!${counterIndicator}
            </span>
        `;
    }

    private incrementCounter(): void {
        this.counter++;
    }
}