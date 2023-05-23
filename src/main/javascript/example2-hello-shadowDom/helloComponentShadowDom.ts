import Styles from "./helloComponentShadowDom.scss";

class HelloShadow extends HTMLElement {

    private content: HTMLSpanElement;
    private counter: number;

    constructor() {
        super();
        this.counter = 1;
    }

    connectedCallback(): void {
        this.content = document.createElement("span");

        const styleElement = document.createElement("style");
        styleElement.textContent = Styles.cssText;

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(styleElement);
        shadow.appendChild(this.content);

        this.updateText();
        this.addEventListener("click", () => {
            this.counter++;
            this.updateText();
        })
    }

    private updateText(): void {
        const counterIndicator = this.counter > 1
            ? ` (${this.counter})`
            : "";
        this.content.innerHTML = `Hi ${this.dataset.name}!${counterIndicator}`;
    }
}

customElements.define("hello-shadow", HelloShadow);