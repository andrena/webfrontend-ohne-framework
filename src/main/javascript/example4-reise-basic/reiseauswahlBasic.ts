import {html, LitElement, TemplateResult} from "lit";
import {customElement, state} from "lit/decorators.js";
import {SELECT_EVENT_REISE, SelectEvent} from "./reiseBasic";
import Styles from "./reiseauswahlBasic.lit.scss";

@customElement("reiseauswahl-basic")
class ReiseauswahlComponentBasic extends LitElement {

    static styles = Styles;

    @state()
    private selectedReiseId: string | null;

    constructor() {
        super();
        this.selectedReiseId = null;
    }

    connectedCallback(): void {
        super.connectedCallback();
        this.addEventListener(SELECT_EVENT_REISE, event => {
            const eventData = (event as SelectEvent).detail;
            this.selectedReiseId = eventData.reiseId;
        });
    }

    render(): TemplateResult {
        return html`
            <div class="reisen">
                <reise-basic reise-id="r1" name="Ans Meer"
                          description="Sommer, Sonne, Strand, Schwimmen, Sonnenbrand!"
                          price="850"
                          img-src="images/meer.jpg"
                          ?selected=${this.selectedReiseId === "r1"}>
                </reise-basic>
                <reise-basic reise-id="r2" name="In die Berge"
                          description="Schnee, Hütten, Sonnenbrand, Kühe!"
                          price="900"
                          img-src="images/berge.jpg"
                          ?selected=${this.selectedReiseId === "r2"}>
                </reise-basic>
                <reise-basic reise-id="r3" name="Nach Karlsruhe!"
                          description="Baustellen, Baustellen, Baustellen!"
                          price="380"
                          img-src="images/stadt.jpg"
                          ?selected=${this.selectedReiseId === "r3"}>
                </reise-basic>
            </div>
        `;
    }
}