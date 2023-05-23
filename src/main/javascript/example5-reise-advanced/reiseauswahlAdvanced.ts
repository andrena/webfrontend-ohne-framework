import {html, LitElement, TemplateResult} from "lit";
import {customElement, property, state} from "lit/decorators.js";
import type {Reise} from "./reiseAdvanced";
import {SELECT_EVENT_REISE, SelectEvent} from "./reiseAdvanced";
import Styles from "./reiseauswahlAdvanced.lit.scss";
import {ReiseRepository} from "./reiseRepository";
import {container} from "tsyringe";

@customElement("reiseauswahl-advanced")
class ReiseauswahlComponentAdvanced extends LitElement {

    static styles = Styles;

    @state()
    private reisen: Reise[];
    @state()
    private selectedReiseId: string | null;
    @property({attribute: "data-ids"})
    private reisenIds: string;

    constructor(private reiseRepository: ReiseRepository = container.resolve(ReiseRepository)) {
        super();
        this.reisen = [];
        this.selectedReiseId = null;
    }

    connectedCallback(): void {
        super.connectedCallback();
        this.addEventListener(SELECT_EVENT_REISE, event => {
            const eventData = (event as SelectEvent).detail;
            this.selectedReiseId = eventData.reiseId;
        });
        this.fetchReisen(this.reisenIds.split(","));
    }

    private async fetchReisen(ids: string[]): Promise<void> {
        this.reisen = await this.reiseRepository.fetchReisen(ids);
    }

    render(): TemplateResult {
        return html`
            <div class="reisen">
                ${this.reisen.map(reise => this.renderReise(reise))}
            </div>
        `;
    }

    renderReise(reise: Reise): TemplateResult {
        return html`
            <reise-advanced
                    .reise=${reise}
                    ?selected=${reise.id === this.selectedReiseId}
            >
            </reise-advanced>
        `;
    }
}