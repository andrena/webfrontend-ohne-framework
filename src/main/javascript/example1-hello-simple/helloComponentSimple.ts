class HelloSimple extends HTMLElement {

    private counter: number;
    private content: HTMLSpanElement;

    constructor() {
        super();
        this.counter = 1;
    }

    connectedCallback(): void {
        this.content = document.createElement("span");
        this.appendChild(this.content);

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

customElements.define("hello-simple", HelloSimple);