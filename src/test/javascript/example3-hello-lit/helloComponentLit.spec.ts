import {fixture} from "@open-wc/testing";
import {html} from "lit";
import type {HelloLit} from "../../../main/javascript/example3-hello-lit/helloComponentLit";

describe("hello-lit", () => {

    it("should say hello to specified name", async () => {
        const element: HelloLit = await fixture(html`
            <hello-lit data-name="Max Mustermann"></hello-lit>`);

        const text = element.renderRoot.textContent!.trim();
        expect(text).toEqual("Hi Max Mustermann!");
    });

    it("should increase counter on click", async () => {
        const element: HelloLit = await fixture(html`
            <hello-lit data-name="Max Mustermann"></hello-lit>`);

        element.renderRoot
            .querySelector("span")!
            .click();

        await element.updateComplete;

        let text = element.renderRoot.textContent!.trim();
        expect(text).toEqual("Hi Max Mustermann! (2)");
    });
});