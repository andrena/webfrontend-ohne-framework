import {container} from "tsyringe";
import type {Reise} from "./reiseAdvanced";

const REISEN_URL = "http://localhost:8082/data/reisen.json"

export class ReiseRepository {

    async fetchReisen(ids: string[]): Promise<Reise[]> {
        const response = await fetch(REISEN_URL);
        const reisen: Reise[] = response.ok
            ? await response.json()
            : [];

        return reisen.filter(reise => ids.includes(reise.id));
    }

}

container.registerSingleton(ReiseRepository);